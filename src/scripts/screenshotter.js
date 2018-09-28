// import html2canvas from 'html2canvas';
import fetchUploadFile from './integrations/cloudinary';
import shareFaceBook from './integrations/facebook';
// import shareVk from './integrations/vk';
// import enlargeCanvas from './utils/enlargeImage';
import convertToCanvas from './layout/layout-to-canvas';

const screenshotButtonId = 'screenshot';

const shareCallback = (canvas) => {
  // make image bigger
  // then send it to cloud storage
  fetchUploadFile(canvas.toDataURL(), (imageResponse) => {
    // shareVk({
    //   url: window.location.href,
    //   image: imageResponse.secure_url,
    // });
    console.log(imageResponse);
    shareFaceBook({
      'og:title': 'Примерь памятник',
      'og:image': imageResponse.secure_url,
      'og:url': 'https://pomahtuk.github.io/grobotorg/',
    });
  });
};

document.getElementById(screenshotButtonId).addEventListener('click', () => {
  convertToCanvas().then((canvas) => {
    console.log('here?');
    shareCallback(canvas);
  });
});
