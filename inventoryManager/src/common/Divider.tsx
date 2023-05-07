import { Divider as NativeDivider, Flex, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import React from 'react';

interface IDividerProps {
  text?: string;
  my?: number;
  mt?: number;
  mb?: number;
}

const Divider: React.FC<IDividerProps> = ({
  text = 'or',
  my = 0,
  mt = 10,
  mb = 10,
}) => {
  return (
    <Flex
      style={[styles.container, { marginTop: mt, marginBottom: mb, marginVertical: my }]}
      flexDir="row">
      <NativeDivider style={styles.divider} />
      {text && <Text style={styles.text}>{text}</Text>}
      <NativeDivider style={styles.divider} />
    </Flex>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#D1D1D6',
  },
  text: {
    marginHorizontal: 8,
    color: '#8E8E93',
    fontSize: 14,
  },
});

export default Divider;
