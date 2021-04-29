import {StyleSheet} from 'react-native';
import colors from '../../res/colors';

const styles = StyleSheet.create({
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
    fontSize: 18,
    fontFamily: 'IRANSans_Bold',
  },
  darkGrayText: {
    color: colors.myGrayDark,
    fontFamily: 'Arial_Rounded_MT_Bold',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default styles;
