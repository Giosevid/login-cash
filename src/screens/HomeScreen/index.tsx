import React from 'react';
import {Text, View, Button} from 'react-native';
import styles from './styles';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title="Go to detail screen" onPress={() => {}} />
    </View>
  );
};

export default HomeScreen;
