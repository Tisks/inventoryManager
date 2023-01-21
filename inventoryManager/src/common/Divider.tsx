import {Box, Center, Divider as NativeDivider, Flex, Text} from 'native-base';
import {InterfaceBoxProps} from 'native-base/lib/typescript/components/primitives/Box';
import React from 'react';

interface IDividerProps
  extends Partial<Pick<InterfaceBoxProps, 'my' | 'mt' | 'mb'>> {
  text?: string;
}

const Divider: React.FC<IDividerProps> = ({
  text = 'or',
  my = 0,
  mt = 0,
  mb = 0,
}) => {
  return (
    <Flex
      my={my}
      mt={my ? undefined : mt}
      mb={my ? undefined : mb}
      flexDir="row">
      <NativeDivider minHeight="2px" w="44%" mt={3} />
      {text && <Text mx={4}>{text}</Text>}
      <NativeDivider minHeight="2px" w="44%" mt={3} />
    </Flex>
  );
};

export default Divider;
