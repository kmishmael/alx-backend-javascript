import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser(photoData, userData) { // eslint-disable-line no-unused-vars
  try {
    const photoResponse = await uploadPhoto(photoData);
    const userResponse = await createUser(userData);

    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
