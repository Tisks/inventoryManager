import React from 'react';
import {
  GenericIconButtonProps,
  GenericIconButton,
} from '../../../../../../../common/GenericIconButton';
import {providerNames} from '../../../../../../../utils/constants';

interface InstantiatedProviderButton
  extends Pick<GenericIconButtonProps, 'onPress'> {}

export const GoogleProviderButton: React.FC<InstantiatedProviderButton> = ({
  onPress,
}) => {
  return (
    <GenericIconButton
      iconName="google"
      onPress={onPress}
      variant="outline"
      bgColor="red.700"
      onPressProps={providerNames.Google}
      width="25%"
    />
  );
};

export const TwitterProviderButton: React.FC<InstantiatedProviderButton> = ({
  onPress,
}) => {
  return (
    <GenericIconButton
      iconName="twitter"
      onPress={onPress}
      variant="outline"
      bgColor="lightBlue.500"
      onPressProps={providerNames.Twitter}
      width="25%"
    />
  );
};

export const FacebookProviderButton: React.FC<InstantiatedProviderButton> = ({
  onPress,
}) => {
  return (
    <GenericIconButton
      iconName="facebook-square"
      onPress={onPress}
      variant="outline"
      bgColor="darkBlue.600"
      onPressProps={providerNames.Facebook}
      width="25%"
    />
  );
};

export const buttonList = [
  TwitterProviderButton,
  GoogleProviderButton,
  FacebookProviderButton,
];
