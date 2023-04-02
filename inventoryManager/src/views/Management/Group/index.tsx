import { Text } from 'native-base';
import React from 'react';
import { WithNavigation } from '../../../../App';

const Group: React.FC<WithNavigation> = ({navigation}) => {
  return <Text>Group</Text>;
};

Group.displayName = 'Group';

export default Group;
