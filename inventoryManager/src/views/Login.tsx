import {Box, Center} from 'native-base';
import React from 'react';
import Form from '../components/Login/components/Form';
import Header from '../components/Login/components/Header';

const Login = () => {
  return (
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Header />
        <Form />
      </Box>
    </Center>
  );
};

export default Login;
