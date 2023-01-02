/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {
  Box,
  Center,
  HStack,
  Icon,
  NativeBaseProvider,
  SearchIcon,
} from 'native-base';
import React, {useEffect, useState, type PropsWithChildren} from 'react';
import {
  Button,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {onAuthStateChanged, onIdTokenChanged, User} from 'firebase/auth';
import {auth} from './src/config';

const Section: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

function ExampleView({navigation}) {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <>
      <Header />
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>
        <Section title="See Your Changes">
          <ReloadInstructions />
        </Section>
        <Button
          title="Go to Home2"
          onPress={() => navigation.navigate('Home2')}
        />
        <Section title="Debug">
          <DebugInstructions />
        </Section>
        <Section title="Learn More">
          Read the docs to discover what to do next:
        </Section>
        <LearnMoreLinks />
      </View>
    </>
  );
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
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={ExampleView} />
          <Stack.Screen name="Home2" component={ExampleView2} />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
