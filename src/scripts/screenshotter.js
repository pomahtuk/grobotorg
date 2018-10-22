import fetchUploadFile from './integrations/cloudinary';
import setFbShareParameters from './integrations/facebook';
import setVkShareParameters from './integrations/vk';
import convertToCanvas from './layout/layout-to-canvas';

import Globals from './globals';

const loadingMinTimespanMs = 3000;

document.getElementById('screenshot').addEventListener('click', () => {
  const modalElement = document.querySelector('#modal-select');
  const modalLoader = modalElement.querySelector('.share-loader');
  const modalContent = modalElement.querySelector('.share-loaded');
  // prepare modal
  modalContent.classList.add('hidden');
  modalLoader.classList.remove('hidden');
  // show modal
  Globals.MicroModal.show('modal-select');

  const startTime = Date.now();
  convertToCanvas().then((canvas) => {
    fetchUploadFile(canvas.toDataURL(), (imageResponse) => {
      const endTime = Date.now();
      // if upload took less than 3 seconds
      const timeTaken = endTime - startTime;
      // fake longer upload, just for sake of it
      const timerInterval = timeTaken < loadingMinTimespanMs ? loadingMinTimespanMs - timeTaken : 0;
      setTimeout(() => {
        modalContent.classList.remove('hidden');
        modalLoader.classList.add('hidden');
      }, timerInterval);

      const shareParams = {
        title: 'Примерь памятник',
        image: imageResponse.secure_url,
        url: 'https://pomahtuk.github.io/grobotorg/',
      };
      // set up facebook share
      setFbShareParameters(shareParams);
      // set up vk share
      setVkShareParameters(shareParams);
    });
  });
});
