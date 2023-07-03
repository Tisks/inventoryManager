import auth from '@react-native-firebase/auth';
import {useEffect} from 'react';
import {TNavigation} from '../../../App';
import {AuthRoutes} from '../../routes';

export const useAuthStateChange = (navigation: TNavigation) => {
  /*
   * Component that uses the Firebase Auth observer and listens
   * for authentication state changes to set the user to the state
   */
  useEffect(() => {
    const unsubscribeOnAuthStateChanged = auth().onAuthStateChanged(
      async (user: any) => {
        if (user) navigation.navigate('Management', {screen: 'Dashboard'});
        else navigation.navigate(AuthRoutes.Login);
      },
    );

    const unsubscribeOnIdTokenChanged = auth().onIdTokenChanged(async user => {
      if (!user) return;
      const newToken = await user.getIdToken();
      if (!newToken) return;
    });

    return () => {
      unsubscribeOnAuthStateChanged();
      unsubscribeOnIdTokenChanged();
    };
  }, []);
};
