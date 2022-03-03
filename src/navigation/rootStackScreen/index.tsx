import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../../screens/SplashScreen';
import SignInScreen from '../../screens/SignInScreen';
import SignUpScreen from '../../screens/SignUpScreen';
import {ROUTES} from '../routes';

const RootStack = createStackNavigator();

const RootStackScreen = () => (
  <RootStack.Navigator headerMode={ROUTES.SPLASH_SCREEN}>
    <RootStack.Screen name={ROUTES.SPLASH_SCREEN} component={SplashScreen} />
    <RootStack.Screen name={ROUTES.SIGN_IN_SCREEN} component={SignInScreen} />
    <RootStack.Screen name={ROUTES.SIGN_UP_SCREEN} component={SignUpScreen} />
  </RootStack.Navigator>
);

export default RootStackScreen;
