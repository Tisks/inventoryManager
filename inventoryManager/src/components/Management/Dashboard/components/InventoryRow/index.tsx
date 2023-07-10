import React from 'react';
import {StyleSheet, View} from 'react-native';
import {IconButton, Text} from 'react-native-paper';
import {InventoryRowProps} from './types';

export const InventoryRow: React.FC<InventoryRowProps> = ({props}) => {
  return (
    <>
      {props?.data.map((inventory, index) => (
        <View key={index} style={styles.inventoryRow}>
          <Text>{inventory}</Text>
          <IconButton icon="arrow-right" />
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  inventoryRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 40,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: 'gray',
  },
});
