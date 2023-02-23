import {Heading} from 'native-base';
import React from 'react';

const Header = () => {
  return (
    <Heading
      size="lg"
      fontWeight="600"
      color="coolGray.800"
      _dark={{
        color: 'warmGray.50',
      }}>
      Sign up
    </Heading>
  );
};

export default Header;
