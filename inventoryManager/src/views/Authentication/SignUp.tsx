import {Keyboard} from 'react-native';
import {useToast} from 'native-base';
import React, {useState} from 'react';
import {WithNavigation} from '../../../App';
import {signUpWithEmailAndPassword} from '../../api/services/user';
import CenteredLayout from '../../common/layout/Centered';
import {Toast} from '../../common/Toast';
import Form from '../../components/Authentication/SignUp/components/Form';
import {
  toastId,
  toastProps,
} from '../../components/Authentication/SignUp/components/Form/constants';
import {
  IFormInputs,
  ISignUpInputs,
} from '../../components/Authentication/SignUp/components/Form/types';
import Header from '../../components/Authentication/SignUp/components/Header';
import {
  determineSuccessfulRequestResult,
  determineToastProps,
  showToast,
} from './utils';
import {UseFormReset} from 'react-hook-form';

const SignUp: React.FC<WithNavigation> = ({navigation}) => {
  const toast = useToast();
  const [isCreatingUser, setIsCreatingUser] = useState(false);

  const onSubmit = async (
    data: ISignUpInputs,
    resetForm: UseFormReset<IFormInputs>,
  ) => {
    Keyboard.dismiss();

    setIsCreatingUser(true);
    const res = await signUpWithEmailAndPassword(data);
    setIsCreatingUser(false);

    const props = determineToastProps(
      res,
      'SIGNUP',
      toastProps.successfulSignUp,
    );

    if (props) {
      resetForm();
      showToast(toast, toastId, props);
      determineSuccessfulRequestResult(res) && navigation.navigate('Dashboard');
    }
  };
  return (
    <CenteredLayout>
      <Header />
      <Form
        onSubmit={onSubmit}
        navigation={navigation}
        isLoading={isCreatingUser}
      />
    </CenteredLayout>
  );
};

SignUp.displayName = 'SignUp';

export default SignUp;
