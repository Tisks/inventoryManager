import React from 'react';
import {Heading} from 'native-base';

const Header: React.FC = () => (
  <>
    <Heading
      size="lg"
      fontWeight="600"
      color="coolGray.800"
      _dark={{
        color: 'warmGray.50',
      }}>
      Welcome
    </Heading>
    <Heading
      mt="1"
      _dark={{
        color: 'warmGray.200',
      }}
      color="coolGray.600"
      fontWeight="medium"
      size="xs">
      Sign in to continue!
    </Heading>
  </>
);

export default Header;
