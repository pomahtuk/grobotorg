const Globals = {
  imagesElements: document.querySelectorAll('.memorial--image img'),
  videoElement: document.querySelector('video.user-video'),
  closeSocialModal() {
    document.querySelector('#modal-source button.modal__close').click();
  },
  simpleMemorialElement: document.querySelector('.memorial.simple'),
  simpleMemorialText: document.querySelector('.memorial.simple .memorial--text'),
};

export default Globals;
