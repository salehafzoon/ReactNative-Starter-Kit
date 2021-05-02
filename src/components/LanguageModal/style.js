import {StyleSheet} from 'react-native';
import { BOLD_FONT } from '../../constants';
import colors from '../../res/colors';

const styles = StyleSheet.create({
  titleStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '9%',
    paddingVertical: '4%',
    borderBottomWidth: 2,
    borderBottomColor: colors.accent,
    fontFamily:BOLD_FONT
  },
  primaryBtn: {
    color: 'white',
    backgroundColor: colors.primary,
    alignContent: 'center',
    alignItems: 'center',
  },
  whiteText: {
    color: colors.white,
    fontFamily: 'IRANSans',
    fontSize: 13,
    textAlign: 'center',
  },
});

export default styles;
