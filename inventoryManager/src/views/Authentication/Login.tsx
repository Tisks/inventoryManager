import {useToast} from 'native-base';
import React, {useState} from 'react';
import {UseFormResetField} from 'react-hook-form';
import {Keyboard} from 'react-native';
import {WithNavigation} from '../../../App';
import {
  signInWithEmailAndPassword,
  signInWithSocialNetwork,
} from '../../api/services/user';
import Divider from '../../common/Divider';
import CenteredLayout from '../../common/layout/Centered';
import Form from '../../components/Authentication/Login/components/Form';
import {toastId} from '../../components/Authentication/Login/components/Form/constants';
import {IFormInputs} from '../../components/Authentication/Login/components/Form/types';
import Header from '../../components/Authentication/Login/components/Header';
import ProviderButtonList from '../../components/Authentication/Login/components/ProviderButtonList';
import {useAuthStateChange} from '../../hooks/useAuthStateChange';
import {TProviderNames} from '../../utils/constants';
import {
  determineSuccessfulRequestResult,
  determineToastProps,
  showToast,
} from './utils';

const Login: React.FC<WithNavigation> = ({navigation}) => {
  const toast = useToast();
  useAuthStateChange(navigation);
  const [isSigningInUser, setIsSigningInUser] = useState(false);

  const onSubmit = async (
    data: IFormInputs,
    resetField: UseFormResetField<IFormInputs>,
    fieldToBeReset: keyof IFormInputs,
  ) => {
    Keyboard.dismiss();

    if (!data.email || !data.password) return;

    setIsSigningInUser(true);
    const res = await signInWithEmailAndPassword(data);
    setIsSigningInUser(false);

    const props = determineToastProps(res, 'LOGIN', {});

    if (props) {
      resetField(fieldToBeReset);
      showToast(toast, toastId, props);
      determineSuccessfulRequestResult(res) && navigation.navigate('Example');
    }
  };

  const loginWithSocialNetwork = async (socialNetwork: string) => {
    const res = await signInWithSocialNetwork(socialNetwork as TProviderNames);
    if (res) navigation.navigate('Example');
  };
  return (
    <CenteredLayout>
      <Header />
      <Form
        onSubmit={onSubmit}
        navigation={navigation}
        isLoading={isSigningInUser}
      />
      <Divider mb={6} />
      <ProviderButtonList loginWithSocialNetwork={loginWithSocialNetwork} />
    </CenteredLayout>
  );
};

export default Login;
