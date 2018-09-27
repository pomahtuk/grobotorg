import html2canvas from 'html2canvas';
import fetchUploadFile from './integrations/cloudinary';
// import shareFaceBook from './integrations/facebook';
import shareVk from './integrations/vk';

document.getElementById('screenshot').addEventListener('click', () => {
  html2canvas(document.querySelector('.memorial'), {
    allowTaint: true,
    useCORS: true,
    logging: false,
  }).then((canvas) => {
    fetchUploadFile(canvas.toDataURL(), (imageResponse) => {
      shareVk({
        url: window.location.href,
        image: imageResponse.secure_url,
      });
      // shareFaceBook({
      //   image: imageResponse.secure_url
      // });
    });
  });
});
