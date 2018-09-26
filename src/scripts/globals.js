const Globals = {
  imagesElements: document.querySelectorAll('.memorial--image img'),
  videoElement: document.querySelector('video.user-video'),
  closeSocialModal() {
    document.querySelector('#modal-source .modal__overlay').click();
  },
  simpleMemorialElement: document.querySelector('.memorial.simple'),
  simpleMemorialText: document.querySelector('.memorial.simple .memorial--text'),
};

export default Globals;
