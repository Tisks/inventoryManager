/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  AllRoutes,
  AuthRoutes,
  TAllRoutes,
  TAuthRoutes,
} from './src/utils/routes';
import {
  allRouteAndComponent,
  authRouteAndComponent,
} from './src/utils/constants';
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
          let iconName = 'facebook';
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
console.log(Object.keys(AuthRoutes));
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
