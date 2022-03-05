import React from 'react';
import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {AuthContextProvider} from './src/context/Auth/AuthContext';
import Routes from './src/routes';
import {configureGoogleSignIn} from './src/config/googleSignIn';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  React.useEffect(() => {
    configureGoogleSignIn();
  }, []);

  return (
    <AuthContextProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </AuthContextProvider>
  );
};

export default App;
