import {Center, Box} from 'native-base';
import React, {PropsWithChildren} from 'react';

const CenteredLayout: React.FC<PropsWithChildren> = ({children}) => (
  <Center w="100%" h="90%">
    <Box safeArea w="90%" maxW="290">
      {children}
    </Box>
  </Center>
);

export default CenteredLayout;
