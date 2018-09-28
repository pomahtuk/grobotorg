import updateImages from '../image-updater';
import Globals from '../globals';

const paramsters = {
  shareOptions: {},
  cb: () => {},
};

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

const setShareParameters = (params = {}, cb = () => { }) => {
  Object.keys(params).forEach((k) => {
    paramsters.shareOptions[`og:${k}`] = params[k];
  });
  paramsters.cb = cb;
};

const share = () => {
  FB.ui({
    method: 'share_open_graph',
    action_type: 'og.likes',
    action_properties: JSON.stringify({
      object: paramsters.shareOptions,
    }),
  }, paramsters.cb);
  Globals.closeShareModal();
};

document.getElementById('fb_auth').addEventListener('click', () => {
  FB.login(checkLoginState, { scope: 'public_profile' });
  Globals.closeSocialModal();
});

document.getElementById('fb_share').addEventListener('click', share);

export default setShareParameters;
