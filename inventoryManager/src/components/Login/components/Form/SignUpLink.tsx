import {Flex, Link} from 'native-base';
import React from 'react';
import {TNavigation} from '../../../../../App';

const SignUpLink: React.FC<{navigation: TNavigation}> = ({navigation}) => (
  <Flex flexDir="row" justifyContent="flex-end">
    Don't have an account?
    <Link
      _text={{
        color: 'indigo.500',
      }}
      ml="1"
      onPress={() => navigation.push('SignUp')}>
      Sign up
    </Link>
  </Flex>
);

export default SignUpLink;
