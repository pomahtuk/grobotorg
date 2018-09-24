const updateImages = (photoUrl) => {
  const images = document.querySelectorAll('.memorial--image img');
  const img = document.createElement('img');
  img.src = photoUrl;
  img.onload = () => {
    // hide video, JIC
    const video = document.querySelector('video.user-video');
    video.classList.add('hidden');

    Array.prototype.forEach.call(images, (image) => {
      image.src = photoUrl;
    });
  };
};

export default updateImages;
