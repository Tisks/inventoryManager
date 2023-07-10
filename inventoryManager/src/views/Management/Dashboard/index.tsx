import React from 'react';
import {WithNavigation} from '../../../../App';
import AccordionTable from '../../../common/AccordionTable';
import { InventoryRow } from '../../../components/Management/Dashboard/components/InventoryRow';

const tableTitles = ['Name', 'Inventory Number', ''];

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

ManagementDashboard.displayName = 'Dashboard';
