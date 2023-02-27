import {Keyboard} from 'react-native';
import {useToast} from 'native-base';
import React, {useState} from 'react';
import {WithNavigation} from '../../App';
import {signUpWithEmailAndPassword} from '../api/services/user';
import CenteredLayout from '../common/layout/Centered';
import {ToastAlert} from '../common/toast';
import Form from '../components/SignUp/components/Form';
import {
  successfulSignUp,
  toastId,
} from '../components/SignUp/components/Form/constants';
import {ISignUpInputs} from '../components/SignUp/components/Form/types';
import Header from '../components/SignUp/components/Header';

const SignUp: React.FC<WithNavigation> = ({navigation}) => {
  const toast = useToast();
  const [isCreatingUser, setIsCreatingUser] = useState(false);
  const onSubmit = async (data: ISignUpInputs) => {
    Keyboard.dismiss();
    setIsCreatingUser(true);
    const res = await signUpWithEmailAndPassword(data);
    if (res) {
      setIsCreatingUser(false);
      toast.show({
        render: () => {
          return <ToastAlert id={toastId} {...successfulSignUp} />;
        },
      });
    }
  };
  return (
    <CenteredLayout>
      <Header />
      <Form
        onSubmit={onSubmit}
        navigation={navigation}
        isLoading={isCreatingUser}
      />
    </CenteredLayout>
  );
};

export default SignUp;
