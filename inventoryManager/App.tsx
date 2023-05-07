/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackHeaderProps,
} from '@react-navigation/native-stack';
import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {AuthRoutes, TAuthRoutes} from './src/routes';
import {InventoryTabs, ManagementTabs} from './src/routes/tabs';
import {authRouteAndComponent} from './src/utils/constants';
import {Provider as PaperProvider} from 'react-native-paper';

GoogleSignin.configure({
  webClientId:
    '300060932220-imddenlp4ls5bitut4f05o7q4omtiare.apps.googleusercontent.com',
});

export type TNavigation = NativeStackHeaderProps['navigation'];
export interface WithNavigation {
  navigation: TNavigation;
}

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <PaperProvider>
        <NativeBaseProvider>
          <Stack.Navigator>
            <Stack.Screen name="Inventory" component={InventoryTabs} />
            <Stack.Screen name="Management" component={ManagementTabs} />
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
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;
