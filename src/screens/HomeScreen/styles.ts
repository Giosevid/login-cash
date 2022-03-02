import {StyleSheet, ViewStyle} from 'react-native';

type StyleProps = {
  container: ViewStyle;
};

const styles = StyleSheet.create<StyleProps>({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default styles;
