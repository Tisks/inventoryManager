import {tryToSignUp} from './utils';
import {useToast} from 'native-base';
import React, {useState} from 'react';
import {WithNavigation} from '../../../../App';
import CenteredLayout from '../../../common/layout/Centered';
import Form from '../../../components/Authentication/SignUp/components/Form';
import Header from '../../../components/Authentication/SignUp/components/Header';
import {setAndNavigateToMainScreen} from '../utils';
import useUserStore from '../../../stores/user';

const SignUp: React.FC<WithNavigation> = ({navigation}) => {
  const toast = useToast();
  const {setUser} = useUserStore();
  const [isCreatingUser, setIsCreatingUser] = useState(false);

  return (
    <CenteredLayout>
      <Header />
      <Form
        onSubmit={async (data, resetField) => {
          const user = await tryToSignUp(
            data,
            resetField,
            setIsCreatingUser,
            toast,
          );
          setAndNavigateToMainScreen(user, setUser, navigation);
        }}
        navigation={navigation}
        isLoading={isCreatingUser}
      />
    </CenteredLayout>
  );
};

SignUp.displayName = 'SignUp';

export default SignUp;
