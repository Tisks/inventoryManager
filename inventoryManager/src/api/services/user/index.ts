import auth from '@react-native-firebase/auth';
import {ISignUpInputs} from '../../../components/SignUp/components/Form/types';
import {MEMBER_INVITEES_REF, MEMBER_INVITER_REF} from '../../../types/user';
import {createDoc} from '../../utils';
import {USER_COLLECTION} from './routes';
import {getUserInfo} from './utils';

export const signUpWithEmailAndPassword = async (
  signUpData: ISignUpInputs,
): Promise<boolean> => {
  const {name: displayName, email, password} = signUpData;
  try {
    const res = await auth().createUserWithEmailAndPassword(email, password);
    const userInfo = getUserInfo(res.user, displayName);

    if (!userInfo) return false;

    await createDoc(USER_COLLECTION, userInfo);

    return !!userInfo;
  } catch (e: any) {
    if (e.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (e.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(e);
    return false;
  }
};
