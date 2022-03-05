import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import colors from '../../assets/colors';

type Props = {
  label: string;
  secondary?: true;
  onPress: () => void;
};

const Button = ({label, secondary, onPress}: Props) => {
  const styleColor = secondary
    ? colors.gradientButtonSecondary
    : colors.gradientButtonPrimary;
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={styleColor}
        style={styles.wrapper}>
        <Text style={styles.label}>{label}</Text>
        <MaterialIcons
          name="navigate-next"
          color={colors.secondary}
          size={20}
        />
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;
