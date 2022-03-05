import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {ROUTES} from '../routes';
import DrawerContentNavigation from './content';
import StackNavigator from '../stackNavigation';
import DetailsScreen from '../../../screens/DetailsScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName={ROUTES.HOME}
      drawerContent={props => <DrawerContentNavigation {...props} />}>
      <Drawer.Screen name={ROUTES.HOME} component={StackNavigator} />
      <Drawer.Screen name={ROUTES.DETAILS} component={DetailsScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
