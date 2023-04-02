import { Text } from 'native-base';
import React from 'react';
import { WithNavigation } from '../../../../App';

const Inventory: React.FC<WithNavigation> = ({navigation}) => {
  return <Text>inventory</Text>;
};

Inventory.displayName = 'Inventory';

export default Inventory;
