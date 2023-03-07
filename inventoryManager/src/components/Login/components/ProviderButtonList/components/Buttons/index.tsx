import {Button, IButtonProps} from 'native-base';
import React, {PropsWithChildren} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {IconProps} from 'react-native-vector-icons/Icon';
import {providerNames} from '../../../../../../utils/constants';
import {ProviderButtonListProps} from '../../types';

interface GenericProviderButtonProps extends Omit<IButtonProps, 'onPress'> {
  iconName: string;
  iconColor?: IconProps['color'];
  onPress: ProviderButtonListProps['loginWithSocialNetwork'];
  provider: string;
}

interface InstantiatedProviderButton
  extends Pick<GenericProviderButtonProps, 'onPress'> {}

const GenericProviderButton: React.FC<
  PropsWithChildren<GenericProviderButtonProps>
> = ({iconName, iconColor, onPress, provider, ...rest}) => {
  return (
    <Button
      py="13px"
      leftIcon={<Icon name={iconName} size={30} color={iconColor || 'white'} />}
      onPress={() => onPress(provider)}
      {...rest}
    />
  );
};

export const GoogleProviderButton: React.FC<InstantiatedProviderButton> = ({
  onPress,
}) => {
  return (
    <GenericProviderButton
      iconName="google"
      onPress={onPress}
      variant="outline"
      bgColor="red.700"
      provider={providerNames.Google}
      width="25%"
    />
  );
};

export const TwitterProviderButton: React.FC<InstantiatedProviderButton> = ({
  onPress,
}) => {
  return (
    <GenericProviderButton
      iconName="twitter"
      onPress={onPress}
      variant="outline"
      bgColor="lightBlue.500"
      provider={providerNames.Twitter}
      width="25%"
    />
  );
};

export const FacebookProviderButton: React.FC<InstantiatedProviderButton> = ({
  onPress,
}) => {
  return (
    <GenericProviderButton
      iconName="facebook-square"
      onPress={onPress}
      variant="outline"
      bgColor="darkBlue.600"
      provider={providerNames.Facebook}
      width="25%"
    />
  );
};

export const buttonList = [
  TwitterProviderButton,
  GoogleProviderButton,
  FacebookProviderButton,
];
