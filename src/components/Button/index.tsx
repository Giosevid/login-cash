import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  NavigationDrawerProps,
  RootStackParamList,
} from '../../navigation/interfaces/navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import colors from '../../assets/colors';

type Props = {
  label: string;
  route: keyof RootStackParamList;
};

const Button = ({label, route}: Props) => {
  const navigation = useNavigation<NavigationDrawerProps>();
  return (
    <View style={styles.button}>
      <TouchableOpacity onPress={() => navigation.navigate(route)}>
        <LinearGradient colors={['#031f34', '#123c38']} style={styles.wrapper}>
          <Text style={styles.label}>{label}</Text>
          <MaterialIcons
            name="navigate-next"
            color={colors.secondary}
            size={20}
          />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
