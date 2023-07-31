import {useToast} from 'native-base';
import React, {useState} from 'react';
import {WithNavigation} from '../../../../App';
import {signInWithSocialNetwork} from '../../../api/services/user';
import Divider from '../../../common/Divider';
import CenteredLayout from '../../../common/layout/Centered';
import Form from '../../../components/Authentication/Login/components/Form';
import Header from '../../../components/Authentication/Login/components/Header';
import ProviderButtonList from '../../../components/Authentication/Login/components/ProviderButtonList';
import {useAuthStateChange} from '../../../hooks/useAuthStateChange';
import {TProviderNames} from '../../../utils/constants';
import {tryToLogin} from './utils';
import useUserStore from '../../../stores/user';
import {setAndNavigateToMainScreen} from '../utils';

const Login: React.FC<WithNavigation> = ({navigation}) => {
  const toast = useToast();

  const {setUser} = useUserStore();

  useAuthStateChange(navigation);

  const [isSigningInUser, setIsSigningInUser] = useState(false);

  const loginWithSocialNetwork = async (socialNetwork: string) => {
    const res = await signInWithSocialNetwork(socialNetwork as TProviderNames);

    if (!res || typeof res === 'string') {
      //Error of some kind, please show a toast
    } else {
      setAndNavigateToMainScreen(res, setUser, navigation);
    }
  };

  return (
    <CenteredLayout>
      <Header />
      <Form
        onSubmit={async (data, resetField, fieldToBeReset) => {
          const user = await tryToLogin(
            data,
            resetField,
            fieldToBeReset,
            setIsSigningInUser,
            toast,
          );

          setAndNavigateToMainScreen(user, setUser, navigation);
        }}
        navigation={navigation}
        isLoading={isSigningInUser}
      />
      <Divider mb={6} />
      <ProviderButtonList loginWithSocialNetwork={loginWithSocialNetwork} />
    </CenteredLayout>
  );
};

Login.displayName = 'Login';

export default Login;
