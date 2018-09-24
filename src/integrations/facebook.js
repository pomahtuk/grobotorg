import updateImages from '../scripts/image-updater';

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
