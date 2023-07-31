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

export const onSubmit = async (
  data: IFormInputs,
  resetField: UseFormResetField<IFormInputs>,
  fieldToBeReset: keyof IFormInputs,
  setIsSigningInUser: React.Dispatch<React.SetStateAction<boolean>>,
  toast: TUseToast,
  navigation: NativeStackNavigationProp<ParamListBase, string, undefined>,
): Promise<void> => {
  Keyboard.dismiss();

  if (!data || !data.email || !data.password) return;

  setIsSigningInUser(true);
  const res = await signInWithEmailAndPassword(data);
  setIsSigningInUser(false);

  if (!res) return;

  const props = determineToastProps(res, 'LOGIN', {});

  if (!props) return;

  resetField(fieldToBeReset);
  showToast(toast, toastId, props);
  isAuthRequestSuccessful(res) && navigation.navigate('Dashboard');
};
