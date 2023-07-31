import {onSubmit} from './utils';
import {useToast} from 'native-base';
import React, {useState} from 'react';
import {WithNavigation} from '../../../../App';
import CenteredLayout from '../../../common/layout/Centered';
import Form from '../../../components/Authentication/SignUp/components/Form';
import Header from '../../../components/Authentication/SignUp/components/Header';

const SignUp: React.FC<WithNavigation> = ({navigation}) => {
  const toast = useToast();
  const [isCreatingUser, setIsCreatingUser] = useState(false);

  return (
    <CenteredLayout>
      <Header />
      <Form
        onSubmit={(data, resetField) =>
          onSubmit(data, resetField, setIsCreatingUser, toast, navigation)
        }
        navigation={navigation}
        isLoading={isCreatingUser}
      />
    </CenteredLayout>
  );
};

SignUp.displayName = 'SignUp';

export default SignUp;
