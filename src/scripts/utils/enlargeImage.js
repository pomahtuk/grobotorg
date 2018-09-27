// NOTE: not pure function, has side-effects
const enlarge = (canvas) => {
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

  // fill with white
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // "restore" the bitmap to the old canvas, using an appropraite offset
  ctx.drawImage(inMem, offsetX, 0);
};

export default enlarge;
