import React from 'react';
import {View, StatusBar} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {NavigationProps} from '../../routes/navigation/interfaces/navigation';
import {ROUTES} from '../../routes/navigation/routes';
import colors from '../../assets/colors';
import Button from '../../components/Button';
import Card from '../../components/Card';
import styles from './styles';
import CustomText from '../../components/CustomText';
import {useNavigation} from '@react-navigation/native';
import {NavigationDrawerProps} from '../../routes/navigation/interfaces/navigation';

const SplashScreen: React.FC<NavigationProps> = () => {
  const navigation = useNavigation<NavigationDrawerProps>();

  const handlePress = () => {
    navigation.navigate(ROUTES.SIGN_IN_SCREEN);
  };

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
        <CustomText textStyle={styles.title} textType="bold">
          Challenge Paises
        </CustomText>
        <CustomText textStyle={styles.text} textType="bold">
          Comencemos
        </CustomText>
        <View style={styles.button}>
          <Button label="Empezar" onPress={handlePress} />
        </View>
      </Card>
    </View>
  );
};

export default SplashScreen;
