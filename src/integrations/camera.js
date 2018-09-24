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
  navigator.mediaDevices.getUserMedia({ audio: true, video: { facingMode: 'user', width: 400, height: 400 } })
    .then((stream) => {
      /* use the stream */
      const video = document.querySelector('video.user-video');
      video.classList.remove('hidden');
      // resize
      // Older browsers may not have srcObject
      if ('srcObject' in video) {
        video.srcObject = stream;
      } else {
        // Avoid using this in new browsers, as it is going away.
        video.src = window.URL.createObjectURL(stream);
      }
      video.onloadedmetadata = () => {
        video.play();
      };
    })
    .catch((err) => {
      /* handle the error */
      console.log(err);
    });
};

document.getElementById('use_camera').addEventListener('click', useCamera);