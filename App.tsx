import React from 'react';
import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DetailsScreen from './src/screens/DetailsScreen';
import StackNavigator from './src/navigation/stackNavigation';
import {ROUTES} from './src/navigation/routes';
import DrawerContentNavigation from './src/navigation/drawerNavigation';
import RootStackScreen from './src/navigation/rootStackScreen';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
      {/* <Drawer.Navigator
        initialRouteName={ROUTES.HOME}
        drawerContent={props => <DrawerContentNavigation {...props} />}>
        <Drawer.Screen name={ROUTES.HOME} component={StackNavigator} />
        <Drawer.Screen name={ROUTES.DETAILS} component={DetailsScreen} />
      </Drawer.Navigator> */}
    </NavigationContainer>
  );
};

export default App;
