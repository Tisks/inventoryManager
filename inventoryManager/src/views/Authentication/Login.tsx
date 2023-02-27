import {useToast} from 'native-base';
import React, {useState} from 'react';
import {Keyboard} from 'react-native';
import {WithNavigation} from '../../../App';
import {signInWithEmailAndPassword} from '../../api/services/user';
import Divider from '../../common/Divider';
import CenteredLayout from '../../common/layout/Centered';
import {Toast} from '../../common/Toast';
import Form from '../../components/Login/components/Form';
import {toastId} from '../../components/Login/components/Form/constants';
import {IFormInputs} from '../../components/Login/components/Form/types';
import Header from '../../components/Login/components/Header';
import {GoogleProviderButton} from '../../components/Login/components/ProviderButtons';
import {isObjectEmpty} from '../../utils/general';
import {determineToastProps, showToast} from './utils';

const Login: React.FC<WithNavigation> = ({navigation}) => {
  const toast = useToast();

  const [isSigningInUser, setIsSigningInUser] = useState(false);

  const onSubmit = async (data: IFormInputs) => {
    Keyboard.dismiss();

    setIsSigningInUser(true);
    const res = await signInWithEmailAndPassword(data);
    setIsSigningInUser(false);

    const props = determineToastProps(res, 'LOGIN', {});

    if (props) {
      showToast(toast, toastId, props)
      navigation.navigate('Example');
    }
  };

  const loginWithGoogle = () => {};
  return (
    <CenteredLayout>
      <Header />
      <Form
        onSubmit={onSubmit}
        navigation={navigation}
        isLoading={isSigningInUser}
      />
      <Divider mb={6} />
      <GoogleProviderButton onPress={loginWithGoogle} />
    </CenteredLayout>
  );
};

export default Login;
