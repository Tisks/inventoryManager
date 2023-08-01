import {TUser} from '../../../../types/user';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';

export const getUserInfo = async (
  user: FirebaseAuthTypes.User,
  provider?: string,
  displayName?: string,
): Promise<TUser | undefined> => {
  if (!user) return;
  const token = await user.getIdToken();
  return {
    displayName,
    email: user.email,
    phoneNumber: user.phoneNumber,
    photoURL: user.photoURL,
    providerId: provider || user.providerId,
    uid: user.uid,
    token,
  };
};
