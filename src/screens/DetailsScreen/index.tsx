import React from 'react';
import {Text, View, Button} from 'react-native';
import {NavigationProps} from '../../navigation/interfaces/navigation';
import styles from './styles';

const DetailsScreen: React.FC<NavigationProps> = ({
  navigation,
}): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Button
        title="Go to home screen"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default DetailsScreen;
