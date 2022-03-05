import {StyleSheet, ViewStyle} from 'react-native';

type StyleProps = {
  regular: ViewStyle;
  bold: ViewStyle;
  light: ViewStyle;
};

const styles = StyleSheet.create<StyleProps>({
  regular: {
    fontWeight: 'normal',
  },
  bold: {
    fontWeight: 'bold',
  },
  light: {
    fontWeight: '100',
  },
});

export default styles;
