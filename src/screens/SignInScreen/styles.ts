import {StyleSheet, ViewStyle} from 'react-native';
import colors from '../../assets/colors';

type StyleProps = {
  container: ViewStyle;
  header: ViewStyle;
  textHeader: ViewStyle;
  footer: ViewStyle;
};

const styles = StyleSheet.create<StyleProps>({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  textHeader: {
    color: colors.white,
    fontSize: 30,
  },
  footer: {
    flex: 3,
    backgroundColor: colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
});

export default styles;

/* ,
text_header: {
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 30,
},,
actionError: {
  flexDirection: 'row',
  marginTop: 10,
  borderBottomWidth: 1,
  borderBottomColor: '#FF0000',
  paddingBottom: 5,
},
,
errorMsg: {
  color: '#FF0000',
  fontSize: 14,
},
button: {
  alignItems: 'center',
  marginTop: 50,
},
signIn: {
  width: '100%',
  height: 50,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 10,
},
textSign: {
  fontSize: 18,
  fontWeight: 'bold',
  color: colors.white,
}, */
