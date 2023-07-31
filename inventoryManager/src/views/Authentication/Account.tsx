import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button} from 'react-native-paper';
import {WithNavigation} from '../../../App';
import {signOut} from '../../api/services/user';
import {default as ButtonIcon} from '../../components/Inventory/shared/Categories/components/Category/SingleItem';
import {AuthRoutes} from '../../routes';
import useUserStore from '../../stores/user';

export const AccountButton: React.FC = ({}) => {
  const navigation = useNavigation();

  const onPress = async () => {
    // @ts-ignore
    navigation.navigate(AuthRoutes.Account);
  };
  return (
    <ButtonIcon
      onPress={onPress}
      imageSrc="library"
      item={{icon: 'user', name: ''}}
      iconProps={{size: 30, color: 'lightblue'}}
    />
  );
};

const Account: React.FC<WithNavigation> = ({navigation}) => {
  //@ts-ignore
  const {resetUser} = useUserStore();

  const logOut = async () => {
    const res = await signOut();

    if (typeof res === 'boolean') {
      resetUser();
      navigation.navigate(AuthRoutes.Login);
    }
  };
  return (
    <Button key={0} onPress={logOut} buttonColor="white" textColor="black">
      Log Out
    </Button>
  );
};

Account.displayName = 'Account';

export default Account;
