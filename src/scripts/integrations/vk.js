import updateImages from '../image-updater';
import Globals from '../globals';

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


const share = (params = {}, cb = () => { }) => {
  const url = `https://vk.com/share.php?url=${params.url}&image=${params.image}`;
  const link = document.createElement('a');
  link.href = url;
  link.target = '_blank';
  link.innerHtml = 'test';
  document.appendChild(link);
  link.click();
  cb();
};

export default share;
