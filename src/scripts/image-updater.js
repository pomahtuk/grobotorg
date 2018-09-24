import Globals from './globals';

const updateImages = (photoUrl) => {
  const img = document.createElement('img');
  img.src = photoUrl;
  img.onload = () => {
    // hide video, JIC
    Globals.videoElement.classList.add('hidden');

    Array.prototype.forEach.call(Globals.imagesElements, (image) => {
      image.src = photoUrl;
    });
  };
};

export default updateImages;
