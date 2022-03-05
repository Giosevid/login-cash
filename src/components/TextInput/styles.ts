import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

type StyleProps = {
  container: ViewStyle;
  textFooter: TextStyle;
  action: ViewStyle;
  textInput: TextStyle;
};

const styles = StyleSheet.create<StyleProps>({
  container: {
    marginBottom: 16,
  },
  textFooter: {
    color: '#05375a',
    fontSize: 18,
    marginTop: 35,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: '#05375a',
  },
});

export default styles;
