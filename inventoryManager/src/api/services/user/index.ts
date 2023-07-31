import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {IFormInputs} from '../../../components/Authentication/Login/components/Form/types';
import {ISignUpInputs} from '../../../components/Authentication/SignUp/components/Form/types';
import {TProviderNames} from '../../../utils/constants';
import {createDoc} from '../../utils';
import {USER_COLLECTION} from './routes';
import {getUserInfo} from './utils';
import {handleGoogleSignIn} from './utils/provider';
import {TUser} from '../../../types/user';

export const createUserDocument = async (
  res: FirebaseAuthTypes.UserCredential,
  provider?: string,
  displayName?: string,
  isNewUser: boolean = true,
): Promise<TUser | undefined> => {
  const userInfo = getUserInfo(res.user, provider, displayName);

  if (!userInfo) return;

  isNewUser && (await createDoc(USER_COLLECTION, userInfo, res.user.uid));

  return userInfo;
};

export const signUpWithEmailAndPassword = async (
  signUpData: ISignUpInputs,
): Promise<TUser | string | undefined> => {
  const {name: displayName, email, password} = signUpData;
  try {
    const res = await auth().createUserWithEmailAndPassword(email, password);
    return createUserDocument(res, undefined, displayName);
  } catch (e: any) {
    return e.code || false;
  }
};

export const signInWithEmailAndPassword = async (
  signInData: IFormInputs,
): Promise<TUser | string | undefined> => {
  const {email, password} = signInData;
  try {
    const res = await auth().signInWithEmailAndPassword(email, password);
    const userInfo = getUserInfo(res.user);
    return userInfo;
  } catch (e: any) {
    return e.code || false;
  }
};

export const signInWithSocialNetwork = async (
  socialNetwork: TProviderNames,
): Promise<TUser | string | undefined> => {
  try {
    switch (socialNetwork) {
      case 'Google':
        return await handleGoogleSignIn();

      default:
        break;
    }
  } catch (e: any) {
    return e.code || false;
  }
};

export const signOut = async (): Promise<boolean | string> => {
  try {
    await auth().signOut();
    return true;
  } catch (error: any) {
    return error.code;
  }
};
/*
export const getOrCreateUserById = (
  userCredential: UserAuth,
  token: string,
): ThunkAction<void, State, null, AuthAction> => {
  return async (dispatch, getState) => {
    try {
      const user = await getUser(token);

      if (user) {
        const provider = !sessionStorage.getItem('PROVIDER_TYPE')
          ? getState().auth.provider
          : sessionStorage.getItem('PROVIDER_TYPE');

        // Every time a login happens we want to show again the inaccurate match pop up
        if (provider) {
          putUser(
            {id: userCredential.uid, showInaccurateMatchPopup: true} as User,
            token,
          );
        }

        sessionStorage.removeItem('PROVIDER_TYPE');
        dispatch(setProviderType(''));

        dispatch({
          type: Types.SET_USER,
          payload: {user: user, token},
        });
        sessionStorage.setItem('onSignIn', STATUS_DONE);

        if (user.isFirstTime) {
          // We won't redirect the user to fill their AP when they do a sign up on any of the
          // non static pages
          if (!nonStaticPages.includes(router.pathname)) {
            router.push(Routes.ACCESSIBILITY_PROFILE_WELCOME);
          }

          dispatch(setOpenUserModal(null));
        } else {
          // We won't show the "complete profile" popup when the user reloads any of the non static pages
          if (
            user.showAccessibilityPopup &&
            !user.finishA11yProfileFlow &&
            !nonStaticPages.includes(router.pathname)
          ) {
            dispatch(setOpenUserModal('COMPLETE_PROFILE'));
          }
        }

        sendCustomEvent('signInSuccess', {provider: user.authProvider});
      } else {
        if (
          userCredential &&
          userCredential.email &&
          userCredential.displayName
        ) {
          const userData: User = {
            email: userCredential.email || '',
            firstName: userCredential.displayName || '',
            id: userCredential.uid,
            photoUrl: userCredential.photoURL,
            authProvider: 'GOOGLE',
            isFirstTime: true,
            finishA11yProfileFlow: false,
            showAccessibilityPopup: true,
            showInaccurateMatchPopup: true,
          };
          const createdUser = await createUser(userData, token);

          dispatch({
            type: Types.NEED_VERIFICATION,
          });
          dispatch({
            type: Types.SET_USER,
            payload: {user: createdUser, token},
          });
          sessionStorage.setItem('onSignIn', STATUS_DONE);
          if (sessionStorage.getItem('onSignIn') === STATUS_DONE) {
            gtmEvent('sign up by google', 'sign up', 'form', 'sign up google');
          }
          dispatch(setOpenUserModal('COMPLETE_PROFILE'));
          sendCustomEvent('signup', {
            provider: createdUser.authProvider,
            userId: createdUser.id,
          });
        }
      }
    } catch (error) {
      errorReporter.report(error as Error);
      dispatch(setErrorStatus(error.code));
      dispatch(setError(true));
      dispatch(setAuthStatus(STATUS_DONE));
      sessionStorage.setItem('onSignIn', STATUS_DONE);
    }
  };
};
*/
