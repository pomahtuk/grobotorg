import 'purecss/build/base.css';
import 'purecss/build/grids-responsive.css';

import './style.css';

import updateImages from './scripts/image-updater';

// TODO: small screen height hack

// TODO: image updates

/* global VK */
VK.Widgets.Auth('vk_auth', {
  onAuth: (data) => {
    console.log(data);
  },
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
