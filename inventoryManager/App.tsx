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
import Routes, {outsideMainRoutes, TRoutes} from './src/utils/routes';
import {routeAndComponent} from './src/utils/constants';

import {GoogleSignin} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '300060932220-imddenlp4ls5bitut4f05o7q4omtiare.apps.googleusercontent.com',
});

export type TNavigation = NativeStackHeaderProps['navigation'];
export interface WithNavigation {
  navigation: TNavigation;
}

const App = () => {
  const [selected, setSelected] = useState(1);

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator initialRouteName={Routes.Login}>
          {Object.keys(Routes).map((route, index) => {
            return (
              <Stack.Screen
                name={Routes[route as TRoutes]}
                component={routeAndComponent[route as TRoutes]}
                options={() => ({
                  headerBackVisible: outsideMainRoutes.includes(route),
                })}
                key={index}
              />
            );
          })}
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
