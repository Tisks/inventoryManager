import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Dialog, Portal, Text} from 'react-native-paper';

export interface ToastProps {
  status?: 'error' | 'success' | 'info' | 'warning';
  title?: string;
  description?: string;
  visible: boolean;
  hideToast: () => void;
}

export const Toast: React.FC<ToastProps> = ({
  status = 'info',
  title,
  description,
  visible,
  hideToast,
}) => {
  const getColor = (status: string) => {
    switch (status) {
      case 'error':
        return '#FF5757';
      case 'success':
        return '#4CAF50';
      case 'warning':
        return '#FFC107';
      default:
        return '#4CAF50';
    }
  };

  const dialogContainerStyle = [
    styles.dialogContainer,
    {backgroundColor: getColor(status)},
  ];

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideToast}>
        <Dialog.Content style={dialogContainerStyle}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideToast}>OK</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

const styles = StyleSheet.create({
  dialogContainer: {
    padding: 16,
    borderRadius: 8,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 16,
  },
});
