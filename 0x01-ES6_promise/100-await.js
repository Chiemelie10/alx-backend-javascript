import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const [Image, User] = await Promise.all([uploadPhoto(), createUser()]);
    return {
      Image,
      User,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
