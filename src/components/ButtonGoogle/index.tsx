import React from 'react';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';

type Props = {
  onPress: () => void;
};

const ButtonGoogle = ({onPress}: Props) => {
  return (
    <GoogleSigninButton
      style={{width: '100%', height: 48}}
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Dark}
      onPress={onPress}
      disabled={false}
    />
  );
};

export default ButtonGoogle;
