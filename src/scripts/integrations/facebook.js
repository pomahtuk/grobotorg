import updateImages from '../image-updater';
import Globals from '../globals';

/* global FB */
const checkLoginState = () => FB.getLoginStatus((response) => {
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

document.getElementById('fb_auth').addEventListener('click', () => {
  FB.login(checkLoginState, { scope: 'public_profile' });
  Globals.closeSocialModal();
});


const share = (params = {}, cb = () => {}) => {
  FB.ui({
    method: 'share_open_graph',
    action_type: 'og.likes',
    action_properties: JSON.stringify(params),
  }, cb);
};

export default share;
