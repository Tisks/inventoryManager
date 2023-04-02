import { Text } from 'native-base';
import React from 'react';
import { WithNavigation } from '../../../../App';

export const ManagementDashboard: React.FC<WithNavigation> = ({navigation}) => {
  return <Text>Dashboard</Text>;
};

ManagementDashboard.displayName = 'Dashboard'