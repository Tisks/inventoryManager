import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {TProviderNames} from '../../../utils/constants';

export const getUserInfo = (
  user: FirebaseAuthTypes.User,
  provider?: string,
  displayName?: string,
) => {
  if (!user) return;

  return {
    displayName,
    email: user.email,
    phoneNumber: user.phoneNumber,
    photoURL: user.photoURL,
    providerId: provider || user.providerId,
    uid: user.uid,
  };
};
