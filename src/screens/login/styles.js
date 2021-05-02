import {StyleSheet} from 'react-native';
import {BOLD_FONT, MEDUM_FONT, NORMAL_FONT} from '../../constants';
import colors from '../../res/colors';

const styles = StyleSheet.create({
  loginTxt: {
    fontFamily:MEDUM_FONT,
    color: colors.white,
    fontSize: 17,
    textAlign: 'center',
  },
  loginBtn: {
    backgroundColor: colors.primary,
    marginTop: '4%',
    borderRadius: 25,
  },
  welcom: {
    fontFamily: NORMAL_FONT,
    fontSize: 14,
    marginTop: '2%',
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },

  content: {
    alignContent: 'center',
    alignSelf: 'stretch',
    textAlign: 'center',
    flex: 1,
  },
  form: {
    alignContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  title: {
    margin: 7,
    color: colors.primary,
    textAlign: 'center',
    fontSize: 24,
    fontFamily: BOLD_FONT,
  },
  darkGrayText: {
    color: colors.myGrayDark,
    fontFamily: 'Arial_Rounded_MT_Bold',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default styles;
