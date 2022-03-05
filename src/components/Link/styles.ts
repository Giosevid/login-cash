import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import colors from '../../assets/colors';

type StyleProps = {
  text: TextStyle;
  container: ViewStyle;
};

const styles = StyleSheet.create<StyleProps>({
  container: {
    marginBottom: 16,
  },
  text: {
    color: colors.primary,
    marginTop: 15,
  },
});

export default styles;
