import Globals from '../globals';

const pxToFloat = px => parseFloat(px.replace('px', ''), 10);

// function to support line-break for texts to big for one line
const printAtWordWrap = (context, text, x, y, lineHeight, fitWidth = 0) => {
  if (fitWidth <= 0) {
    context.fillText(text, x, y);
    return;
  }
  let words = text.split(' ');
  let currentLine = 0;
  let idx = 1;
  while (words.length > 0 && idx <= words.length) {
    const str = words.slice(0, idx).join(' ');
    const hasNewline = str.includes('\n') && str !== '\n';
    const endsWithNewline = str.endsWith('\n');
    const w = context.measureText(str).width;
    if (w > fitWidth || hasNewline) {
      if (idx === 1) {
        idx = 2;
      }
      context.fillText(words.slice(0, idx - 1).join(' '), x, y + (lineHeight * currentLine));
      currentLine += 1;

      const offset = endsWithNewline ? idx : idx - 1;
      words = words.splice(offset);
      idx = 1;
    } else {
      idx += 1;
    }
  }
  if (idx > 0) {
    context.fillText(words.join(' '), x, y + (lineHeight * currentLine));
  }
};

// fixing poor render of text for retina-like devices
const setupCanvasForText = (canvas) => {
  const context = canvas.getContext('2d');

  const devicePixelRatio = window.devicePixelRatio || 1;
  const backingStoreRatio = context.webkitBackingStorePixelRatio
    || context.mozBackingStorePixelRatio
    || context.msBackingStorePixelRatio
    || context.oBackingStorePixelRatio
    || context.backingStorePixelRatio || 1;

  const ratio = devicePixelRatio / backingStoreRatio;

  if (devicePixelRatio !== backingStoreRatio) {
    const oldWidth = canvas.width;
    const oldHeight = canvas.height;

    canvas.width = oldWidth * ratio;
    canvas.height = oldHeight * ratio;

    canvas.style.width = `${oldWidth}px`;
    canvas.style.height = `${oldHeight}px`;

    // now scale the context to counter
    // the fact that we've manually scaled
    // our canvas element
    context.scale(ratio, ratio);
  }

  return context;
};

// get memorial image and annd it to canvas
const drawMemorial = canvas => new Promise((resolve, reject) => {
  const context = canvas.getContext('2d');
  // put image
  const img = new Image();
  img.width = Globals.simpleMemorialElement.clientWidth;
  img.height = Globals.simpleMemorialElement.clientHeight;
  const memorialStyle = Globals.simpleMemorialElement.currentStyle
    || window.getComputedStyle(Globals.simpleMemorialElement, false);
  img.src = memorialStyle.backgroundImage.slice(4, -1).replace(/"/g, '');
  img.onload = () => {
    context.drawImage(img, 0, 0, img.width, img.height);
    resolve(canvas);
  };
  img.onabort = (err) => {
    reject(err);
  };
});

// idd picture from meorial to canvas
const drawPicture = canvas => new Promise((resolve) => {
  const context = canvas.getContext('2d');

  const image = Globals.simpleMemorialImage.querySelector('img');

  const tmpCanvas = document.createElement('canvas');
  const tmpCtx = tmpCanvas.getContext('2d');

  tmpCanvas.width = image.width;
  tmpCanvas.height = image.height;
  const halfwidth = image.width / 2;

  // draw the cached images to temporary canvas and return the context
  tmpCtx.drawImage(image, 0, 0, image.width, image.height);

  tmpCtx.fillStyle = '#fff'; // color doesn't matter, but we want full opacity
  tmpCtx.globalCompositeOperation = 'destination-in';
  tmpCtx.beginPath();
  tmpCtx.arc(halfwidth, halfwidth, halfwidth, 0, 2 * Math.PI, true);
  tmpCtx.closePath();
  tmpCtx.fill();

  const pictureStyle = Globals.simpleMemorialImage.currentStyle
    || window.getComputedStyle(Globals.simpleMemorialImage, false);

  context.drawImage(
    tmpCanvas,
    pxToFloat(pictureStyle.left) - Globals.simpleMemorialImage.clientWidth / 2,
    pxToFloat(pictureStyle.top),
    Globals.simpleMemorialImage.clientWidth,
    Globals.simpleMemorialImage.clientHeight,
  );

  resolve(canvas);
});

// add selected title to canvas
const drawText = canvas => new Promise((resolve) => {
  const context = canvas.getContext('2d');

  const tmpCanvas = document.createElement('canvas');
  tmpCanvas.width = Globals.simpleMemorialText.clientWidth;
  tmpCanvas.height = Globals.simpleMemorialText.clientHeight;

  const tmpCtx = setupCanvasForText(tmpCanvas);

  const textStyle = Globals.simpleMemorialText.currentStyle
    || window.getComputedStyle(Globals.simpleMemorialText, false);

  tmpCtx.fillStyle = 'white';
  tmpCtx.textAlign = 'center';
  tmpCtx.font = `${textStyle.fontSize} ${textStyle.fontFamily}`;

  printAtWordWrap(
    tmpCtx,
    Globals.simpleMemorialText.innerHTML.replace('<br>', '\n'),
    Globals.simpleMemorialText.clientWidth / 2,
    pxToFloat(textStyle.fontSize),
    pxToFloat(textStyle.lineHeight),
    Globals.simpleMemorialText.clientWidth,
  );

  context.drawImage(
    tmpCanvas,
    pxToFloat(textStyle.left) - Globals.simpleMemorialText.clientWidth / 2,
    pxToFloat(textStyle.top),
    Globals.simpleMemorialText.clientWidth,
    Globals.simpleMemorialText.clientHeight,
  );

  resolve(canvas);
});

// force 16:9 aspect ratio for canvas
const enlargeCanvasAndPadImage = canvas => new Promise((resolve) => {
  const inMem = document.createElement('canvas');
  inMem.width = canvas.width;
  inMem.height = canvas.height;

  const inMemCtx = inMem.getContext('2d');
  // "Save" the canvas bitmap to the in memory canvas
  inMemCtx.drawImage(canvas, 0, 0);

  // Resize the canvas, which will clear it
  canvas.width = Math.ceil(canvas.height * (16 / 9));
  canvas.height = inMem.height;
  const offsetX = (canvas.width - inMem.width) / 2;

  // "restore" the bitmap to the old canvas, using an appropraite offset
  const ctx = canvas.getContext('2d');
  ctx.drawImage(inMem, offsetX, 0);

  resolve(canvas);
});

const convertToCanvas = () => new Promise((resolve, reject) => {
  // create canvas
  const canvas = document.createElement('canvas');
  // get image size and resize canvas
  canvas.width = Globals.simpleMemorialElement.clientWidth;
  canvas.height = Globals.simpleMemorialElement.clientHeight;
  setupCanvasForText(canvas);
  // draw memorial itself
  drawMemorial(canvas)
    .then(drawPicture)
    .then(drawText)
    .then(enlargeCanvasAndPadImage)
    .then(() => {
      resolve(canvas);
    })
    .catch(reject);
});

export default convertToCanvas;
