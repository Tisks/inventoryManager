import {Heading} from 'native-base';
import React from 'react';
import {WithNavigation} from '../../App';
import CenteredLayout from '../common/layout/Centered';
import Form from '../components/SignUp/components/Form';
import { IFormInputs } from '../components/SignUp/components/Form/types';
import Header from '../components/SignUp/components/Header';

const SignUp: React.FC<WithNavigation> = ({navigation}) => {
  const onSubmit = (data: IFormInputs) => {
    console.log({data});
  };
  return (
    <CenteredLayout>
      <Header />
      <Form onSubmit={onSubmit} navigation={navigation} />
    </CenteredLayout>
  );
};

export default SignUp;
