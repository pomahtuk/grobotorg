import Globals from './globals';

import convertToGrayscale from './utils/imageDataToGrayscale';

const updateImages = (photoUrl) => {
  const img = new Image();

  // using fetch to bypass canvas restriction to same-origin
  // converting image to blob and then to base64 string
  fetch(photoUrl)
    .then(response => response.blob())
    .then(blob => URL.createObjectURL(blob))
    .then((data) => {
      img.src = data;
    })
    .catch(() => {
      // TODO: alerts or something like this...
    });

  img.addEventListener('load', () => {
    // hide video, JIC
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    const context = canvas.getContext('2d');
    const x = 0;
    const y = 0;

    context.drawImage(img, x, y);

    const imageData = context.getImageData(x, y, img.width, img.height);

    // gryscale all the way!
    convertToGrayscale(imageData);

    // overwrite original image
    context.putImageData(imageData, x, y);

    Array.prototype.forEach.call(Globals.imagesElements, (image) => {
      image.src = canvas.toDataURL();
    });

    Globals.showShareButton();
  }, false);
};

export default updateImages;
