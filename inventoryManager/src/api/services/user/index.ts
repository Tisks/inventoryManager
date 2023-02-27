import {getUserInfo} from './utils';
import {createDoc} from '../../utils';
import {USER_COLLECTION} from './routes';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {ISignUpInputs} from '../../../components/SignUp/components/Form/types';
import {IFormInputs} from '../../../components/Login/components/Form/types';
import {firebaseErrors} from './constants';

export const signUpWithEmailAndPassword = async (
  signUpData: ISignUpInputs,
): Promise<boolean | string> => {
  const {name: displayName, email, password} = signUpData;
  try {
    const res = await auth().createUserWithEmailAndPassword(email, password);
    const userInfo = getUserInfo(res.user, displayName);

    if (!userInfo) return false;

    await createDoc(USER_COLLECTION, userInfo);

    return !!userInfo;
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

export const signOut = async (): Promise<boolean | string> => {
  try {
    await auth().signOut();
    return true;
  } catch (error: any) {
    return error.code;
  }
};
