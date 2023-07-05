import React from 'react';
import {StyleSheet, View} from 'react-native';
import {IconButton, Text} from 'react-native-paper';
import {WithNavigation} from '../../../../App';
import AccordionTable from '../../../common/AccordionTable';
import {InventoryRowProps} from './types';

const tableTitles = ['Name', 'Inventory Number', ''];

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

export const ManagementDashboard: React.FC<WithNavigation> = ({navigation}) => {
  const tableData = [
    {
      title: 'Group 1',
      data: ['Inventory 1', 'Inventory 2', 'Inventory 3', 'Inventory 4'],
    },
    {
      title: 'Group 2',
      data: ['Inventory 5', 'Inventory 6', 'Inventory 7'],
    },
    {
      title: 'Group 3',
      data: ['Inventory 8', 'Inventory 9'],
    },
    {
      title: 'Group 4',
      data: [
        'Inventory 10',
        'Inventory 11',
        'Inventory 12',
        'Inventory 13',
        'Inventory 14',
      ],
    },
  ];

  return (
    <AccordionTable
      tableData={tableData}
      tableTitles={tableTitles}
      children={<InventoryRow />}
      navigation={navigation}
    />
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

ManagementDashboard.displayName = 'Dashboard';
