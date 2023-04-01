/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackHeaderProps } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  authRouteAndComponent
} from './src/utils/constants';
import {
  AuthRoutes, TAuthRoutes
} from './src/utils/routes';
import Dashboard from './src/views/Inventory/Dashboard';

GoogleSignin.configure({
  webClientId:
    '300060932220-imddenlp4ls5bitut4f05o7q4omtiare.apps.googleusercontent.com',
});

export type TNavigation = NativeStackHeaderProps['navigation'];
export interface WithNavigation {
  navigation: TNavigation;
}

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function InventoryTabs() {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarIcon: ({color, size}) => {
          let iconName = 'clipboard-list';
          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        headerShown: false,
      })}>
      <Tab.Screen name="Dashboard" component={Dashboard} />
    </Tab.Navigator>
  );
}
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator>
          <Stack.Screen name="Inventory" component={InventoryTabs} />
          {Object.keys(AuthRoutes).map((route, index) => {
            return (
              <Stack.Screen
                key={index}
                name={authRouteAndComponent[route as TAuthRoutes].displayName}
                component={authRouteAndComponent[route as TAuthRoutes]}
              />
            );
          })}
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
