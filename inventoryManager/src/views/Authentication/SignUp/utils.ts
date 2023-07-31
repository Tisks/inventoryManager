import {UseFormReset} from 'react-hook-form';
import {Keyboard} from 'react-native';
import {signUpWithEmailAndPassword} from '../../../api/services/user';
import {
  determineToastProps,
  showToast,
  isAuthRequestSuccessful,
} from '../utils';
import {TUseToast} from '../../../types/general';
import {ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  IFormInputs,
  ISignUpInputs,
} from '../../../components/Authentication/SignUp/components/Form/types';
import {
  toastId,
  toastProps,
} from '../../../components/Authentication/SignUp/components/Form/constants';
import {TUser} from '../../../types/user';

export const tryToSignUp = async (
  data: ISignUpInputs,
  resetForm: UseFormReset<IFormInputs>,
  setIsCreatingUser: React.Dispatch<React.SetStateAction<boolean>>,
  toast: TUseToast,
): Promise<TUser | false> => {
  Keyboard.dismiss();

  if (!data || !data.name || !data.email || !data.password) return false;

  setIsCreatingUser(true);
  const res = await signUpWithEmailAndPassword(data);
  setIsCreatingUser(false);

  if (!res) return false;

  const props = determineToastProps(res, 'SIGNUP', toastProps.successfulSignUp);

  if (!props) return false;

  resetForm();
  showToast(toast, toastId, props);

  const isSuccessful = isAuthRequestSuccessful(res);
  return isSuccessful ? (res as TUser) : false;
};
