import React from 'react';
import {Flex, Heading, HStack} from 'native-base';
import {buttonList, GoogleProviderButton} from './components/Buttons';
import {providerNames} from '../../../../../utils/constants';
import {ProviderButtonListProps} from './types';

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
