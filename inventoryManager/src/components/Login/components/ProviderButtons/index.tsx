import {Button, IButtonProps} from 'native-base';
import React, {PropsWithChildren} from 'react';
import {ButtonProps, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const prefix = 'Continue with ';

interface GenericProviderButtonProps
  extends IButtonProps,
    Pick<ButtonProps, 'title'> {
  iconName: string;
}

const GenericProviderButton: React.FC<
  PropsWithChildren<GenericProviderButtonProps>
> = ({title, iconName, ...rest}) => {
  return (
    <Button
      py="13px"
      leftIcon={<Icon name={iconName} size={30} color="blue" />}
      {...rest}>
      <Text style={{color: 'black'}}> {title}</Text>
    </Button>
  );
};

export const GoogleProviderButton: React.FC<{
  onPress: GenericProviderButtonProps['onPress'];
}> = ({onPress}) => {
  return (
    <GenericProviderButton
      title={`${prefix} Google`}
      iconName="google"
      onPress={onPress}
      variant="outline"
      colorScheme="success"
    />
  );
};
