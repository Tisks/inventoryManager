import {Box, Center, Heading, HStack} from 'native-base';
import React from 'react';
import {WithNavigation} from '../../App';
import CenteredLayout from '../common/layout/Centered';
import Form, {IFormInputs} from '../components/SignUp/components/Form';

const SignUp: React.FC<WithNavigation> = ({navigation}) => {
  const onSubmit = (data: IFormInputs) => {
    console.log({data});
  };
  const loginWithGoogle = () => {};
  return (
    <CenteredLayout>
      <Heading
        size="lg"
        fontWeight="600"
        color="coolGray.800"
        _dark={{
          color: 'warmGray.50',
        }}>
        Sign up
      </Heading>
      <Form onSubmit={onSubmit} navigation={navigation} />
    </CenteredLayout>
  );
};

export default SignUp;
