import React, {useState, useTransition} from 'react';
import {StyleSheet, View} from 'react-native';
import {DataTable, Text, IconButton, Divider} from 'react-native-paper';
import {WithNavigation} from '../../../../App';

export const ManagementDashboard: React.FC<WithNavigation> = ({navigation}) => {
  const tableData = [
    {
      group: 'Group 1',
      inventories: ['Inventory 1', 'Inventory 2', 'Inventory 3', 'Inventory 4'],
    },
    {
      group: 'Group 2',
      inventories: ['Inventory 5', 'Inventory 6', 'Inventory 7'],
    },
    {
      group: 'Group 3',
      inventories: ['Inventory 8', 'Inventory 9'],
    },
    {
      group: 'Group 4',
      inventories: [
        'Inventory 10',
        'Inventory 11',
        'Inventory 12',
        'Inventory 13',
        'Inventory 14',
      ],
    },
  ];

  const [showDetails, setShowDetails] = useState<boolean[]>(
    Array(tableData.length).fill(false),
  );

  const toggleDetails = (index: number) => {
    setShowDetails(prevState => {
      let updatedState = [...prevState];
      updatedState = updatedState.map((showD, i) => {
        if (i === index) return !showD;
        return false;
      });
      return updatedState;
    });
  };

  return (
    <View style={styles.container}>
      <DataTable>
        <DataTable.Header style={styles.row}>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title>Inventory Number</DataTable.Title>
          <DataTable.Title> </DataTable.Title>
        </DataTable.Header>

        {tableData.map((data, index) => (
          <React.Fragment key={data.group + index}>
            <Divider />
            <View style={styles.row}>
              <Text>{data.group}</Text>
              <Text style={{alignSelf: 'center'}}>
                {data.inventories.length}
              </Text>
              <IconButton
                icon={showDetails[index] ? 'chevron-up' : 'chevron-down'}
                size={24}
                onPress={() => toggleDetails(index)}
              />
            </View>

            {showDetails[index] &&
              data.inventories.map((inventory, index) => (
                <View key={index} style={styles.inventoryRow}>
                  <Text>{inventory}</Text>
                  <IconButton icon="arrow-right" />
                </View>
              ))}
            <Divider />
          </React.Fragment>
        ))}
      </DataTable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  row: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderWidth: 0.5,
    borderColor: 'gray',
  },
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
