/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import Login from './src/views/Authentication/Login';
import SignUp from './src/views/Authentication/SignUp';
import React, {useState} from 'react';
import {NativeBaseProvider} from 'native-base';
import {Text, useColorScheme, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Example from './src/views/Example';
import Routes from './src/utils/routes';

export type TNavigation = NativeStackHeaderProps['navigation'];
export interface WithNavigation {
  navigation: TNavigation;
}

const ExampleView2 = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <>
      <Header />
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>
        <Text>its a newer one</Text>
      </View>
    </>
  );
};

const App = () => {
  const [selected, setSelected] = useState(1);

  const Stack = createNativeStackNavigator();

  /*
   * Component that uses the Firebase Auth observer and listens
   * for authentication state changes to set the user to the state

  useEffect(() => {
    const unsubscribeOnAuthStateChanged = onAuthStateChanged(
      auth,
      async (user: any) => {
        console.log({user});
        if (user) {
          await getOrCreateUserById(user);
        }
      },
    );

    const unsubscribeOnIdTokenChanged = onIdTokenChanged(auth, async user => {
      if (!user) return;
      const newToken = await user.getIdToken();
      if (!newToken) return;
      dispatch(setUserIdToken(newToken));
    });

    return () => {
      unsubscribeOnAuthStateChanged();
      unsubscribeOnIdTokenChanged();
    };
  }, []);
 */
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator initialRouteName={Routes.Login}>
          <Stack.Screen name={Routes.Login} component={Login} />
          <Stack.Screen name={Routes.SignUp} component={SignUp} />
          <Stack.Screen name={Routes.Example} component={Example} />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
