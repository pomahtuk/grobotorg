import updateImages from '../image-updater';
import Globals from '../globals';

const paramsters = {
  shareOptions: {},
  cb: () => { },
};

const vkButtonTemplate = `
  <button class="pure-button pure-button-primary button-xlarge" id="vk_share" data-custom-close="modal-share">
      <svg viewBox="0 0 1032.346923828125 585.4198608398438" id="si-metro-vk" width="28px" fill="#fff">
          <title>icon vk</title>
          <path d="M916.838 410.367s82.79 81.766 103.27 119.603c.563.819.82 1.434.922 1.792 8.346 13.978 10.394 24.934 6.298 33.024-6.912 13.363-30.31 20.07-38.246 20.634H842.753c-10.189 0-31.386-2.662-57.19-20.48-19.712-13.773-39.322-36.454-58.317-58.624-28.365-32.922-52.89-61.491-77.722-61.491-3.174 0-6.246.512-9.216 1.536-18.79 5.939-42.65 32.717-42.65 104.038 0 22.323-17.613 35.021-29.952 35.021h-67.02c-22.836 0-141.723-7.987-247.143-119.142C124.364 330.188 8.345 57.19 7.219 54.784 0 37.12 15.155 27.494 31.539 27.494h147.764c19.814 0 26.266 11.981 30.771 22.733 5.222 12.339 24.576 61.696 56.32 117.146 51.405 90.214 82.995 126.925 108.237 126.925 4.762 0 9.267-1.178 13.517-3.584 32.973-18.125 26.83-135.885 25.293-160.154 0-4.71-.05-52.582-16.947-75.725-12.083-16.589-32.666-23.04-45.107-25.395 3.328-4.813 10.394-12.186 19.456-16.538C393.423 1.638 434.229 0 474.728 0h22.477c43.93.614 55.296 3.43 71.27 7.475 32.154 7.68 32.768 28.518 29.952 99.482-.819 20.275-1.69 43.11-1.69 69.99 0 5.734-.256 12.134-.256 18.637-.973 36.403-2.253 77.414 23.45 94.259a20.952 20.952 0 0 0 11.11 3.174c8.91 0 35.584 0 107.93-124.16 31.744-54.835 56.32-119.501 58.01-124.365 1.434-2.714 5.734-10.342 10.957-13.414 3.994-2.458 9.318-2.867 12.083-2.867h173.824c18.944 0 31.795 2.867 34.304 10.035 4.198 11.622-.819 47.104-80.179 154.419a6678.045 6678.045 0 0 1-35.379 46.848c-71.936 94.413-71.936 99.174 4.25 170.854z" />
      </svg>
  </button>
`;

/* global VK */
document.getElementById('vk_auth').addEventListener('click', () => {
  VK.Auth.login(({
    session: {
      user,
    },
  }) => {
    VK.Api.call('users.get', { user_ids: user.id, fields: 'photo_400_orig', v: '5.85' }, ({ response: userData }) => {
      if (userData) {
        updateImages(userData[0].photo_400_orig);
      }
    });
    Globals.closeSocialModal();
  }, 8192);
});

const setShareParameters = (params = {}, cb = () => { }) => {
  paramsters.cb = cb;
  document.querySelector('.button-holder.vk-holder').innerHTML = VK.Share.button(params, {
    type: 'custom',
    text: vkButtonTemplate,
  });
};

// const share = (params = {}, cb = () => { }) => {
//   const url = `https://vk.com/share.php?url=${params.url}&image=${params.image}`;
//   const link = document.createElement('a');
//   link.href = url;
//   link.target = '_blank';
//   link.innerHtml = 'test';
//   document.appendChild(link);
//   link.click();
//   cb();
// };

export default setShareParameters;
