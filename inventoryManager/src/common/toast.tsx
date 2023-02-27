import React from 'react';
import {
  VStack,
  HStack,
  Text,
  IconButton,
  CloseIcon,
  Alert,
  useToast,
  IAlertProps,
  IToastProps,
} from 'native-base';

export interface ToastProps
  extends Pick<IAlertProps, 'status' | 'variant'>,
    Omit<IToastProps, 'variant'> {
  id: string;
  title?: string;
  description?: string;
  isClosable?: boolean;
}

export const Toast: React.FC<ToastProps> = ({
  id,
  status,
  variant,
  title,
  description,
  isClosable,
}) => {
  const toast = useToast();

  return (
    <Alert
      maxWidth="100%"
      alignSelf="center"
      flexDirection="row"
      status={status || 'info'}
      variant={variant}>
      <VStack space={1} flexShrink={1} w="80%">
        <HStack
          flexShrink={1}
          alignItems="center"
          justifyContent="space-between">
          <HStack space={2} flexShrink={1} alignItems="center">
            <Alert.Icon />
            <Text
              fontSize="md"
              fontWeight="medium"
              flexShrink={1}
              color={
                variant === 'solid'
                  ? 'lightText'
                  : variant !== 'outline'
                  ? 'darkText'
                  : null
              }>
              {title}
            </Text>
          </HStack>
          {isClosable ? (
            <IconButton
              variant="unstyled"
              icon={<CloseIcon size="3" />}
              _icon={{
                color: variant === 'solid' ? 'lightText' : 'darkText',
              }}
              onPress={() => toast.close(id)}
            />
          ) : null}
        </HStack>
        <Text
          px="6"
          color={
            variant === 'solid'
              ? 'lightText'
              : variant !== 'outline'
              ? 'darkText'
              : null
          }>
          {description}
        </Text>
      </VStack>
    </Alert>
  );
};
