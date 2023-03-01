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
import Form from '../../components/Login/components/Form';
import {toastId} from '../../components/Login/components/Form/constants';
import {IFormInputs} from '../../components/Login/components/Form/types';
import Header from '../../components/Login/components/Header';
import {GoogleProviderButton} from '../../components/Login/components/ProviderButtons';
import {providerNames, TProviderNames} from '../../utils/constants';
import {
  determineSuccessfulRequestResult,
  determineToastProps,
  showToast,
} from './utils';

const Login: React.FC<WithNavigation> = ({navigation}) => {
  const toast = useToast();

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
      <GoogleProviderButton
        onPress={() => loginWithSocialNetwork(providerNames.Google)}
      />
    </CenteredLayout>
  );
};

export default Login;
