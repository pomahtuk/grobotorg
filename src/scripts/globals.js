const Globals = {
  imagesElements: document.querySelectorAll('.memorial--image img'),
  textElements: document.querySelectorAll('.memorial--text'),
  videoElement: document.querySelector('video.user-video'),
  simpleMemorialElement: document.querySelector('.memorial.simple'),
  simpleMemorialText: document.querySelector('.memorial.simple .memorial--text'),
  closeSocialModal() {
    document.querySelector('#modal-source .modal__overlay').click();
  },
  showShareButton() {
    document.querySelector('.memorial--share-it').classList.remove('hidden');
  },
};

export default Globals;
