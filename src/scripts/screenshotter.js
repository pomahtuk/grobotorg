import html2canvas from 'html2canvas';

document.getElementById('screenshot').addEventListener('click', () => {
  html2canvas(document.querySelector('.memorial'), {
    allowTaint: true,
    useCORS: true,
    logging: false,
  }).then((canvas) => {
    document.body.appendChild(canvas);
  });
});
