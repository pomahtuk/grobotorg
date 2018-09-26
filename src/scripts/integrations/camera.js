import Globals from '../globals';

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
      Globals.videoElement.classList.remove('hidden');
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
      Globals.showShareButton();
    })
    .catch(() => {
      /* handle the error */
    })
    .finally(Globals.closeSocialModal);
};

document.getElementById('use_camera').addEventListener('click', useCamera);
