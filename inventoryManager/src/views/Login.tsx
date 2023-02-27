import React, {useState} from 'react';
import {WithNavigation} from '../../App';
import {signInWithEmailAndPassword} from '../api/services/user';
import Divider from '../common/Divider';
import CenteredLayout from '../common/layout/Centered';
import Form from '../components/Login/components/Form';
import {IFormInputs} from '../components/Login/components/Form/types';
import Header from '../components/Login/components/Header';
import {GoogleProviderButton} from '../components/Login/components/ProviderButtons';

const Login: React.FC<WithNavigation> = ({navigation}) => {
  const [isSigningInUser, setIsSigningInUser] = useState(false);

  const onSubmit = async (data: IFormInputs) => {
    setIsSigningInUser(true);
    const res = await signInWithEmailAndPassword(data);
    if (res) console.log('successful login');
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
