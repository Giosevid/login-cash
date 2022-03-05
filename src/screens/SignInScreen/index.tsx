import React from 'react';
import {View, StatusBar} from 'react-native';
import {useAuthContext} from '../../context/Auth/AuthContext';
import colors from '../../assets/colors';
import {ROUTES} from '../../routes/navigation/routes';
import {getCurrentUserInfo} from '../../config/googleSignIn';
import styles from './styles';
import CustomText from '../../components/CustomText';
import Card from '../../components/Card';
import TextInput from '../../components/TextInput';
import Link from '../../components/Link';
import Button from '../../components/Button';
import ButtonGoogle from '../../components/ButtonGoogle';
import {useNavigation} from '@react-navigation/native';

const SignInScreen = () => {
  const {authContext} = useAuthContext();
  const navigation = useNavigation();

  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const textInputChange = (val: string) => {
    setData({
      ...data,
      username: val,
    });
  };

  const passwordInputChange = (val: string) => {
    setData({
      ...data,
      password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const getUserInfoGoogle = async () => {
    const {idToken, user} = await getCurrentUserInfo();
    authContext.signIn({
      userName: user.givenName,
      password: '123456',
      token: idToken,
    });
  };

  const onSignIn = () => {
    authContext.signIn({
      username: data.username,
      password: data.password,
    });
  };

  const onSignUp = () => {
    navigation.navigate(ROUTES.SIGN_UP_SCREEN);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <View style={styles.header}>
        <CustomText textStyle={styles.textHeader}>Bienvenido!</CustomText>
      </View>
      <Card stylesCard={styles.footer}>
        <TextInput
          label="Nombre"
          iconName="user-o"
          placeholder="Tu nombre"
          onChange={textInputChange}
        />
        <TextInput
          label="Contraseña"
          iconName="lock"
          placeholder="Tu contraseña"
          onChange={passwordInputChange}
          password
          onPressEye={updateSecureTextEntry}
          viewPassword={data.secureTextEntry}
        />

        <Link label="Recuperar contraseña?" onPress={() => console.log} />
        <Button label="Iniciar sesion" onPress={onSignIn} />
        <Button label="Registro" onPress={onSignUp} secondary />
        <ButtonGoogle onPress={getUserInfoGoogle} />
      </Card>
    </View>
  );
};

export default SignInScreen;
