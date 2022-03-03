import React from 'react';
import {Text, View, Button} from 'react-native';
import {NavigationProps} from '../../navigation/interfaces/navigation';
import {ROUTES} from '../../navigation/routes';
import styles from './styles';

const HomeScreen: React.FC<NavigationProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to detail screen"
        onPress={() => navigation.navigate(ROUTES.DETAILS)}
      />
    </View>
  );
};

export default HomeScreen;
