import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

const styles = StyleSheet.create({
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  label: {
    color: colors.secondary,
    fontWeight: 'bold',
  },
  wrapper: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
});

export default styles;
