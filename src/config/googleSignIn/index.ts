import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

export const configureGoogleSignIn = () => {
  GoogleSignin.configure({
    webClientId:
      '626373482212-98u90kkb4q1dr9a18ikakboldpl27ffu.apps.googleusercontent.com',
  });
};

export const getCurrentUserInfo = async () => {
  let data = null;
  try {
    await configureGoogleSignIn();
    const {user, idToken} = await GoogleSignin.signIn();
    data = {
      user,
      idToken,
    };
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_REQUIRED) {
      console.error('error code =====>', error.code);
    } else {
      console.error('error =====>', error);
    }
  }
  return data;
};
