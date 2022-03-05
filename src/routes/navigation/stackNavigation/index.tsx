import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../../screens/HomeScreen';
import DetailsScreen from '../../../screens/DetailsScreen';
import {stackNavigationOptions} from '../constants';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../../assets/colors';
import {useNavigation} from '@react-navigation/native';
import {NavigationDrawerProps} from '../interfaces/navigation';

const Stack = createStackNavigator();

const StackNavigator = () => {
  const navigation = useNavigation<NavigationDrawerProps>();
  return (
    <Stack.Navigator screenOptions={stackNavigationOptions}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor={colors.primary}
              onPress={() => {
                navigation.openDrawer();
              }}
            />
          ),
        }}
      />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
