import dataURItoBlob from '../utils/dataURItoBlob';

const cloudName = 'grobotorg-org';
const unsignedUploadPreset = 'grobotorg-fe';
const uploadUrl = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;

// *********** Upload file to Cloudinary ******************** //
const fetchUploadFile = (imageString, cb) => {
  const fd = new FormData();
  fd.append('upload_preset', unsignedUploadPreset);
  fd.append('tags', 'user_upload,share'); // Optional - add tag for image admin in Cloudinary
  fd.append('file', dataURItoBlob(imageString));

  return fetch(uploadUrl, {
    method: 'POST',
    cache: 'no-cache',
    redirect: 'follow',
    body: fd,
  })
    .then(response => response.json())
    .then(cb); // parses response to JSON
};

export default fetchUploadFile;
