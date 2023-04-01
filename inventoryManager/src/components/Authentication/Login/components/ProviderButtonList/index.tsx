import { HStack } from 'native-base';
import React from 'react';
import { buttonList } from './components/Buttons';
import { ProviderButtonListProps } from './types';

const ProviderButtonList: React.FC<ProviderButtonListProps> = ({
  loginWithSocialNetwork,
}) => {
  return (
    <HStack space={3} justifyContent="center">
      {buttonList.map((Button, index) => {
        return <Button key={index} onPress={loginWithSocialNetwork} />;
      })}
    </HStack>
  );
};

export default ProviderButtonList;
