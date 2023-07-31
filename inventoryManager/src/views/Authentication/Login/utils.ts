import {UseFormResetField} from 'react-hook-form';
import {Keyboard} from 'react-native';
import {signInWithEmailAndPassword} from '../../../api/services/user';
import {toastId} from '../../../components/Authentication/Login/components/Form/constants';
import {IFormInputs} from '../../../components/Authentication/Login/components/Form/types';
import {
  determineToastProps,
  showToast,
  isAuthRequestSuccessful,
} from '../utils';
import {TUseToast} from '../../../types/general';
import {ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {TUser} from '../../../types/user';

export const isLoginSuccessful = async (
  data: IFormInputs,
  resetField: UseFormResetField<IFormInputs>,
  fieldToBeReset: keyof IFormInputs,
  setIsSigningInUser: React.Dispatch<React.SetStateAction<boolean>>,
  toast: TUseToast,
): Promise<TUser | false> => {
  Keyboard.dismiss();

  if (!data || !data.email || !data.password) return false;

  setIsSigningInUser(true);
  const res = await signInWithEmailAndPassword(data);
  setIsSigningInUser(false);

  if (!res) return false;

  const props = determineToastProps(res, 'LOGIN', {});

  if (!props) return false;

  resetField(fieldToBeReset);
  showToast(toast, toastId, props);

  const isSuccessful = isAuthRequestSuccessful(res);
  return isSuccessful ? (res as TUser) : false;
};
