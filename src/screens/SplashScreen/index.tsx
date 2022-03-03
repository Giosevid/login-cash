import React from 'react';
import {View, Text, Dimensions, StyleSheet, StatusBar} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {NavigationProps} from '../../navigation/interfaces/navigation';
import {ROUTES} from '../../navigation/routes';
import colors from '../../assets/colors';
import Button from '../../components/Button';
import Card from '../../components/Card';

const SplashScreen: React.FC<NavigationProps> = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          source={require('../../assets/images/lemon.png')}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>
      <Card>
        <Text style={styles.title}>Example Countries</Text>
        <Text style={styles.text}>Sign in with account</Text>
        <Button label="Empezar" route={ROUTES.SIGN_IN_SCREEN} />
      </Card>
    </View>
  );
};

export default SplashScreen;

const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: 'grey',
    marginTop: 5,
  },
});
