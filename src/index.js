import 'purecss/build/base.css';
import 'purecss/build/grids-responsive.css';

import './style.css';

import updateImages from './scripts/image-updater';

// TODO: small screen height hack

// TODO: image updates

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
  });
});

/* global FB */
window.checkLoginState = () => FB.getLoginStatus((response) => {
  const { userID } = response.authResponse;

  FB.api(
    `/${userID}/picture`,
    'GET',
    {
      redirect: 'false',
      height: '300',
      type: 'square',
    },
    ({ data }) => {
      updateImages(data.url);
    },
  );
});
