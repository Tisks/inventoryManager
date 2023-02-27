import { Heading } from "native-base";
import React from "react";

const Example: React.FC = () => {
    return (
      <>
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: 'warmGray.50',
          }}>
          Main page
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: 'warmGray.200',
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs">
          Here lies the main page
        </Heading>
      </>
    );
  };
  
  export default Example;
  