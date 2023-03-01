import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {createUserDocument} from '..';
import auth from '@react-native-firebase/auth';

export const handleGoogleSignIn = async () => {
  // Check if your device supports Google Play
  await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
  // Get the users ID token
  const {idToken} = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  const res = await auth().signInWithCredential(googleCredential);
  return createUserDocument(
    res,
    res.user.providerData[0].providerId,
    res.user.displayName || '',
    res.additionalUserInfo?.isNewUser,
  );
};
