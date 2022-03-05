import {StyleSheet, ViewStyle} from 'react-native';

type StyleProps = {
  container: ViewStyle;
  wrapper: ViewStyle;
  text: ViewStyle;
};

const styles = StyleSheet.create<StyleProps>({
  container: {
    flex: 1,
  },
  wrapper: {
    flexDirection: 'row',
    padding: 8,
  },
  text: {
    marginLeft: 16,
  },
});

export default styles;
