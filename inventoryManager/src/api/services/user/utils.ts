import {FirebaseAuthTypes} from '@react-native-firebase/auth';

export const getUserInfo = (
  user: FirebaseAuthTypes.User,
  displayName: string,
) => {
  if (!user) return;
  return {
    displayName,
    email: user.email,
    phoneNumber: user.phoneNumber,
    photoURL: user.photoURL,
    providerId: user.providerId,
    uid: user.uid,
  };
};
