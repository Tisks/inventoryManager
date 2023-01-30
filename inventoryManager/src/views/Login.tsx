import React from 'react';
import {WithNavigation} from '../../App';
import Divider from '../common/Divider';
import CenteredLayout from '../common/layout/Centered';
import Form, {IFormInputs} from '../components/Login/components/Form';
import Header from '../components/Login/components/Header';
import {GoogleProviderButton} from '../components/Login/components/ProviderButtons';

const Login: React.FC<WithNavigation> = ({navigation}) => {
  const onSubmit = (data: IFormInputs) => {
    console.log({data});
  };
  const loginWithGoogle = () => {};
  return (
    <CenteredLayout>
      <Header />
      <Form onSubmit={onSubmit} navigation={navigation} />
      <Divider mb={6} />
      <GoogleProviderButton onPress={loginWithGoogle} />
    </CenteredLayout>
  );
};

export default Login;
