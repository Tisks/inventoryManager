import {Button, IButtonProps} from 'native-base';
import React, {PropsWithChildren} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {IconProps} from 'react-native-vector-icons/Icon';

export interface GenericIconButtonProps extends Omit<IButtonProps, 'onPress'> {
  iconName: string;
  iconColor?: IconProps['color'];
  onPress: (...rest: any) => void;
  onPressProps?: any;
}

export const GenericIconButton: React.FC<
  PropsWithChildren<GenericIconButtonProps>
> = ({iconName, iconColor, onPress, onPressProps, ...rest}) => {
  return (
    <Button
      py="13px"
      leftIcon={<Icon name={iconName} size={30} color={iconColor || 'white'} />}
      onPress={() => onPress(onPressProps)}
      {...rest}
    />
  );
};
