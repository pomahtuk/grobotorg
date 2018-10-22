const Globals = {
  imagesElements: document.querySelectorAll('.memorial--image img'),
  textElements: document.querySelectorAll('.memorial--text'),
  videoElement: document.querySelector('video.user-video'),
  shareButtonElement: document.querySelector('.memorial--share-it'),
  simpleMemorialElement: document.querySelector('.memorial.simple'),
  simpleMemorialText: document.querySelector('.memorial.simple .memorial--text'),
  simpleMemorialImage: document.querySelector('.memorial.simple .memorial--image'),
  closeSocialModal() {
    document.querySelector('#modal-source .modal__overlay').click();
  },
  closShareModal() {
    document.querySelector('#modal-select .modal__overlay').click();
  },
  showShareButton() {
    document.querySelector('.memorial--share-it').classList.remove('hidden');
  },
};

export default Globals;
