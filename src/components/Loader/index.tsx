import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import styles from './styles';
import color from '../../assets/colors';

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={color.primary} />
      <Text>Cargando...</Text>
    </View>
  );
};

export default Loader;
