import {StyleSheet, ViewStyle} from 'react-native';
import colors from '../../assets/colors';

type StyleProps = {
  container: ViewStyle;
};

const styles = StyleSheet.create<StyleProps>({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
});

export default styles;
