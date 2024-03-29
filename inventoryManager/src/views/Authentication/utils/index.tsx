import { ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  firebaseErrors,
  firebaseErrorsValues,
} from '../../../api/services/user/constants';
import {Toast} from '../../../common/Toast';
import {toastProps as LoginToastProps} from '../../../components/Authentication/Login/components/Form/constants';
import {toastProps as SignUpToastProps} from '../../../components/Authentication/SignUp/components/Form/constants';
import {TLooseObject, TUseToast} from '../../../types/general';
import {TUser} from '../../../types/user';
import {isObjectEmpty} from '../../../utils/general';

export const TComponent = {
  LOGIN: 'LOGIN',
  SIGNUP: 'SIGNUP',
};

export type TComponentNames = keyof typeof TComponent;

export const toastConstants: Record<TComponentNames, Record<string, any>> = {
  LOGIN: LoginToastProps,
  SIGNUP: SignUpToastProps,
};

const determineToastConstantUsed = (
  component: TComponentNames,
): Record<string, TLooseObject> | undefined => toastConstants[component];

const determineSpecificToastPropsUsed = (
  res: string | boolean,
  toastPropsUsed: Record<string, TLooseObject>,
): TLooseObject | undefined => {
  switch (res) {
    case firebaseErrors.EMAIL_ALREADY_IN_USE:
      return toastPropsUsed.emailAlreadyUsedToastProps;
    case firebaseErrors.WRONG_PASSWORD:
      return toastPropsUsed.wrongPasswordUsed;
    case firebaseErrors.TOO_MANY_REQUESTS:
      return toastPropsUsed.tooManyRequests;
    default:
      return;
  }
};

export const determineToastProps = (
  res: TUser | string,
  component: TComponentNames,
  successfulRequestProps?: TLooseObject,
): TLooseObject | undefined => {
  let props: TLooseObject | undefined = {};
  let toastPropsUsed: Record<string, TLooseObject> | undefined = {};

  if (typeof res !== 'string') return successfulRequestProps;

  toastPropsUsed = determineToastConstantUsed(component);

  if (!toastPropsUsed) return;

  props = determineSpecificToastPropsUsed(res, toastPropsUsed);

  if (!props) return;

  return props;
};

export const showToast = (
  useToast: TUseToast,
  toastId: string,
  toastProps: TLooseObject,
) =>
  !isObjectEmpty(toastProps) &&
  useToast.show({
    render: () => {
      return <Toast visible hideToast={() => {}} {...toastProps} />;
    },
  });

export const isAuthRequestSuccessful = (res: TUser | string): boolean =>
  //Check that is a valid TUser if its not a string
  (typeof res === 'string' && !firebaseErrorsValues.includes(res)) || !!res;

export const setAndNavigateToMainScreen = (
  user: TUser | false,
  setUser: (payload: TUser) => void,
  navigation: NativeStackNavigationProp<ParamListBase, string, undefined>,
) => {
  if (user) {
    setUser(user);
    navigation.navigate('Dashboard');
  }
};
