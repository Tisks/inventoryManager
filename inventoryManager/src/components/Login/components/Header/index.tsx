import {Heading} from 'native-base';
import React from 'react';

const Header = () => {
  return (
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
};

export default Header;
