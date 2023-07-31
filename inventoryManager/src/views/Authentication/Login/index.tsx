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
import {onSubmit} from './utils';

const Login: React.FC<WithNavigation> = ({navigation}) => {
  const toast = useToast();

  useAuthStateChange(navigation);

  const [isSigningInUser, setIsSigningInUser] = useState(false);

  const loginWithSocialNetwork = async (socialNetwork: string) => {
    const res = await signInWithSocialNetwork(socialNetwork as TProviderNames);
    if (res) navigation.navigate('Dashboard');
  };

  return (
    <CenteredLayout>
      <Header />
      <Form
        onSubmit={(data, resetField, fieldToBeReset) =>
          onSubmit(
            data,
            resetField,
            fieldToBeReset,
            setIsSigningInUser,
            toast,
            navigation,
          )
        }
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
