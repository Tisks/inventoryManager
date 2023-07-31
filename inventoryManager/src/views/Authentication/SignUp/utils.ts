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

export const onSubmit = async (
  data: ISignUpInputs,
  resetForm: UseFormReset<IFormInputs>,
  setIsCreatingUser: React.Dispatch<React.SetStateAction<boolean>>,
  toast: TUseToast,
  navigation: NativeStackNavigationProp<ParamListBase, string, undefined>,
): Promise<void> => {
  Keyboard.dismiss();

  if (!data || !data.name || !data.email || !data.password) return;

  setIsCreatingUser(true);
  const res = await signUpWithEmailAndPassword(data);
  setIsCreatingUser(false);

  if (!res) return;

  const props = determineToastProps(res, 'SIGNUP', toastProps.successfulSignUp);

  if (!props) return;

  resetForm();
  showToast(toast, toastId, props);
  isAuthRequestSuccessful(res) && navigation.navigate('Dashboard');
};
