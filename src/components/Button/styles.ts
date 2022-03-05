import {StyleSheet, ViewStyle} from 'react-native';
import colors from '../../assets/colors';

type StyleProps = {
  container: ViewStyle;
  label: ViewStyle;
  wrapper: ViewStyle;
};

const styles = StyleSheet.create<StyleProps>({
  container: {
    marginBottom: 16,
    width: '100%',
  },
  label: {
    color: colors.secondary,
    fontWeight: 'bold',
  },
  wrapper: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
});

export default styles;
