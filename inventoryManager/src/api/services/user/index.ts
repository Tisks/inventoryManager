import {getUserInfo} from './utils';
import {createDoc} from '../../utils';
import {USER_COLLECTION} from './routes';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {ISignUpInputs} from '../../../components/SignUp/components/Form/types';
import {IFormInputs} from '../../../components/Login/components/Form/types';
import {TProviderNames} from '../../../utils/constants';
import {handleGoogleSignIn} from './utils/provider';

export const createUserDocument = async (
  res: FirebaseAuthTypes.UserCredential,
  provider?: string,
  displayName?: string,
  isNewUser: boolean = true,
) => {
  const userInfo = getUserInfo(res.user, provider, displayName);

  if (!userInfo) return false;

  isNewUser && (await createDoc(USER_COLLECTION, userInfo, res.user.uid));

  return !!userInfo;
};

export const signUpWithEmailAndPassword = async (
  signUpData: ISignUpInputs,
): Promise<boolean | string> => {
  const {name: displayName, email, password} = signUpData;
  try {
    const res = await auth().createUserWithEmailAndPassword(email, password);
    return createUserDocument(res, undefined, displayName);
  } catch (e: any) {
    return e.code || false;
  }
};

export const signInWithEmailAndPassword = async (
  signInData: IFormInputs,
): Promise<boolean | string> => {
  const {email, password} = signInData;
  try {
    const res = await auth().signInWithEmailAndPassword(email, password);
    const userInfo = getUserInfo(res.user);
    return !!userInfo;
  } catch (e: any) {
    return e.code || false;
  }
};

export const signInWithSocialNetwork = async (
  socialNetwork: TProviderNames,
): Promise<boolean | string | undefined> => {
  try {
    switch (socialNetwork) {
      case 'Google':
        return await handleGoogleSignIn();

      default:
        break;
    }
  } catch (e: any) {
    return e.code || false;
  }
};

export const signOut = async (): Promise<boolean | string> => {
  try {
    await auth().signOut();
    return true;
  } catch (error: any) {
    return error.code;
  }
};
