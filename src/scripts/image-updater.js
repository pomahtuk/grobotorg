import Globals from './globals';

const updateImages = (photoUrl) => {
  const img = new Image();
  img.src = photoUrl;
  img.crossOrigin = 'Anonymous';
  img.addEventListener('load', () => {
    // hide video, JIC
    Globals.videoElement.classList.add('hidden');
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    const context = canvas.getContext('2d');
    const x = 0;
    const y = 0;

    context.drawImage(img, x, y);

    const imageData = context.getImageData(x, y, img.width, img.height);
    const { data } = imageData;

    for (let i = 0; i < data.length; i += 4) {
      const brightness = 0.34 * data[i] + 0.5 * data[i + 1] + 0.16 * data[i + 2];
      // red
      data[i] = brightness;
      // green
      data[i + 1] = brightness;
      // blue
      data[i + 2] = brightness;
    }

    // overwrite original image
    context.putImageData(imageData, x, y);

    Array.prototype.forEach.call(Globals.imagesElements, (image) => {
      image.src = canvas.toDataURL();
    });

    Globals.showShareButton();
  }, false);
};

export default updateImages;
