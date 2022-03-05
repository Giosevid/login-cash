import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../../../screens/SplashScreen';
import SignInScreen from '../../../screens/SignInScreen';
import SignUpScreen from '../../../screens/SignUpScreen';
import {ROUTES} from '../routes';

const AuthStack = createStackNavigator();

const AuthStackScreen = () => (
  <AuthStack.Navigator headerMode="none">
    <AuthStack.Screen name={ROUTES.SPLASH_SCREEN} component={SplashScreen} />
    <AuthStack.Screen name={ROUTES.SIGN_IN_SCREEN} component={SignInScreen} />
    <AuthStack.Screen name={ROUTES.SIGN_UP_SCREEN} component={SignUpScreen} />
  </AuthStack.Navigator>
);

export default AuthStackScreen;
