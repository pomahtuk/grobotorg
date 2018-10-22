import Globals from '../globals';
import convertToGrayscale from '../utils/imageDataToGrayscale';

// Older browsers might not implement mediaDevices at all, so we set an empty object first
if (navigator.mediaDevices === undefined) {
  navigator.mediaDevices = {};
}

// Some browsers partially implement mediaDevices. We can't just assign an object
// with getUserMedia as it would overwrite existing properties.
// Here, we will just add the getUserMedia property if it's missing.
if (navigator.mediaDevices.getUserMedia === undefined) {
  navigator.mediaDevices.getUserMedia = (constraints) => {
    // First get ahold of the legacy getUserMedia, if present
    const getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

    // Some browsers just don't implement it - return a rejected promise with an error
    // to keep a consistent interface
    if (!getUserMedia) {
      return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
    }

    // Otherwise, wrap the call to the old navigator.getUserMedia with a Promise
    return new Promise((resolve, reject) => {
      getUserMedia.call(navigator, constraints, resolve, reject);
    });
  };
}

const useCamera = () => {
  navigator.mediaDevices.getUserMedia({
    audio: false,
    video: {
      facingMode: 'user',
    },
  })
    .then((stream) => {
      /* use the stream */
      // resize
      // Older browsers may not have srcObject
      if ('srcObject' in Globals.videoElement) {
        Globals.videoElement.srcObject = stream;
      } else {
        // Avoid using this in new browsers, as it is going away.
        Globals.videoElement.src = window.URL.createObjectURL(stream);
      }
      Globals.videoElement.setAttribute('playsinline', true);
      Globals.videoElement.onloadedmetadata = () => {
        Globals.videoElement.play();
      };

      Array.prototype.forEach.call(Globals.imagesElements, (image) => {
        image.style.height = `${image.height}px`;
        image.style.width = `${image.width}px`;
      });

      Globals.videoElement.addEventListener('play', () => {
        setInterval(() => {
          const video = Globals.videoElement;
          const canvas = document.createElement('canvas');
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          const context = canvas.getContext('2d');
          const x = canvas.width > canvas.height ? (canvas.width - canvas.height) / 2 : 0;
          const y = canvas.height > canvas.width ? (canvas.height - canvas.width) / 2 : 0;

          // put original video on cavas
          context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);

          const imageData = context.getImageData(x, y, video.videoWidth, video.videoHeight);

          // gryscale all the way!
          convertToGrayscale(imageData);

          // overwrite original image
          context.putImageData(imageData, x, y);

          Array.prototype.forEach.call(Globals.imagesElements, (image) => {
            image.src = canvas.toDataURL();
          });
        }, 33);
      }, false);

      Globals.showShareButton();
    })
    .catch(() => {
      /* handle the error */
    })
    .finally(Globals.closeSocialModal);
};

document.getElementById('use_camera').addEventListener('click', useCamera);
