import {TouchableOpacity, Text} from 'react-native';
import React from 'react';
import styles from './styles';

type Props = {
  label: string;
  onPress: () => void;
};

const Link = ({label, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Link;
