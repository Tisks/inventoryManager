import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button} from 'react-native-paper';
import {WithNavigation} from '../../../App';
import {signOut} from '../../api/services/user';
import {default as ButtonIcon} from '../../components/Inventory/shared/Categories/components/Category/SingleItem';

export const AccountButton: React.FC = ({}) => {
  const navigation = useNavigation();

  const onClicked = async () => {
    navigation.navigate('Account');
  };
  return (
    <ButtonIcon
      item={{icon: 'user', name: ''}}
      imageSrc="library"
      onPress={onClicked}
      boxProps={{width: 0, height: 0}}
    />
  );
};

const Account: React.FC<WithNavigation> = ({navigation}) => {
  const logOut = async () => {
    const res = await signOut();

    if (typeof res === 'boolean') {
      navigation.navigate('Login');
    }
  };
  return (
    <Button key={0} onPress={logOut} buttonColor="blue">
      Log Out
    </Button>
  );
};

Account.displayName = 'Account';

export default Account;
