import React, {useState} from 'react';
import {AccordionTableProps} from './types';
import {StyleSheet, View} from 'react-native';
import {DataTable, Text, IconButton, Divider} from 'react-native-paper';

const AccordionTable: React.FC<AccordionTableProps> = ({
  tableTitles,
  tableData,
  children,
}) => {
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
          {tableTitles.map(name => (
            <DataTable.Title style={{alignSelf: 'center'}}>{name}</DataTable.Title>
          ))}
        </DataTable.Header>

        {tableData.map((props, index) => (
          <React.Fragment key={props.title + index}>
            <Divider />
            <View style={styles.row}>
              <Text>{props.title}</Text>
              <Text style={{alignSelf: 'center'}}>{props.data.length}</Text>
              <IconButton
                size={24}
                onPress={() => toggleDetails(index)}
                icon={showDetails[index] ? 'chevron-up' : 'chevron-down'}
              />
            </View>

            {showDetails[index] && (
              <>
                {React.Children.map(children, child => {
                  if (React.isValidElement(child)) {
                    // @ts-ignore
                    return React.cloneElement(child, {props, index});
                  }
                  return null;
                })}
              </>
            )}
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

AccordionTable.displayName = 'AccordionTable';

export default AccordionTable;
