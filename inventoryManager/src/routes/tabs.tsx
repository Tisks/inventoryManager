import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'native-base';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  InventoryRoutes,
  ManagementRoutes,
  TInventoryRoutes,
  TManagementRoutes,
} from '.';
import {
  allRouteAndComponent,
  inventoryRouteAndComponent,
  managementRouteAndComponent,
} from '../utils/constants';

const Tab = createBottomTabNavigator();

export const InventoryTabs = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({color, size}) => {
        let iconName = 'clipboard-list';
        // You can return any component that you like here!
        return <Icon name={iconName} size={size} color={color} />;
      },
      headerShown: false,
    })}>
    {Object.keys(InventoryRoutes).map((route, index) => {
      return (
        <Tab.Screen
          key={index}
          name={
            inventoryRouteAndComponent[route as TInventoryRoutes].displayName
          }
          component={inventoryRouteAndComponent[route as TInventoryRoutes]}
        />
      );
    })}
  </Tab.Navigator>
);

export const ManagementTabs = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({color, size}) => {
        const icon =
          allRouteAndComponent[route.name as TManagementRoutes]?.icon;

        const iconName = icon || 'clipboard-list';

        return <Icon name={iconName} size={size} color={color} />;
      },
      headerShown: false,
    })}>
    {Object.keys(ManagementRoutes).map((route, index) => {
      return (
        <Tab.Screen
          key={index}
          name={
            managementRouteAndComponent[route as TManagementRoutes].displayName
          }
          component={managementRouteAndComponent[route as TManagementRoutes]}
        />
      );
    })}
  </Tab.Navigator>
);
