import {
  firebaseErrors,
  firebaseErrorsValues
} from '../../../api/services/user/constants';
import { Toast } from '../../../common/Toast';
import { toastProps as LoginToastProps } from '../../../components/Authentication/Login/components/Form/constants';
import { toastProps as SignUpToastProps } from '../../../components/Authentication/SignUp/components/Form/constants';
import { TLooseObject, TUseToast } from '../../../types/general';
import { isObjectEmpty } from '../../../utils/general';

export const TComponent = {
  LOGIN: 'LOGIN',
  SIGNUP: 'SIGNUP',
};

export type TComponentNames = keyof typeof TComponent;

const determineToastConstantUsed = (
  component: TComponentNames,
): Record<string, TLooseObject> | undefined => {
  switch (component) {
    case TComponent.SIGNUP:
      return SignUpToastProps;
    case TComponent.LOGIN:
      return LoginToastProps;
    default:
      return;
  }
};

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
  res: string | boolean,
  component: TComponentNames,
  successfulRequestProps?: TLooseObject,
): TLooseObject | undefined => {
  let props: TLooseObject | undefined = {};
  let toastPropsUsed: Record<string, TLooseObject> | undefined = {};

  if (typeof res === 'string') {
    toastPropsUsed = determineToastConstantUsed(component);

    if (!toastPropsUsed) return;

    props = determineSpecificToastPropsUsed(res, toastPropsUsed);

    if (!props) return;
  } else props = successfulRequestProps;
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

export const isAuthRequestSuccessful = (res: string | boolean) =>
  (typeof res === 'boolean' && res) ||
  (typeof res === 'string' && !firebaseErrorsValues.includes(res));
