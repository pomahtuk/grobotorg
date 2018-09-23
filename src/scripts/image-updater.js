const updateImages = (photoUrl) => {
  const images = document.querySelectorAll('.memorial--image img');

  // TODO: add check for image load first...

  Array.prototype.forEach.call(images, (image) => {
    image.src = photoUrl;
  });
};

export default updateImages;
