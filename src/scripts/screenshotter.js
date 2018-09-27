import html2canvas from 'html2canvas';
import fetchUploadFile from './integrations/cloudinary';
import shareFaceBook from './integrations/facebook';

document.getElementById('screenshot').addEventListener('click', () => {
  html2canvas(document.querySelector('.memorial'), {
    allowTaint: true,
    useCORS: true,
    logging: false,
  }).then((canvas) => {
    fetchUploadFile(canvas.toDataURL(), (imageResponse) => {
      shareFaceBook({
        image: imageResponse.secure_url,
        object: 'https://gotbotorg.org',
      });
    });
  });
});
