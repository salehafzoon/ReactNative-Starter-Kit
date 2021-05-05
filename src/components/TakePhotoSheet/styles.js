import {StyleSheet} from 'react-native';
import { BOLD_FONT, MEDUM_FONT, NORMAL_FONT } from '../../constants';
import colors from '../../res/colors';

const styles = StyleSheet.create({
  primaryBtn: {
    color: 'white',
    backgroundColor: colors.primary,
    alignContent: 'center',
    alignItems: 'center',
    marginHorizontal: '10%',
    marginVertical: '3%',
    borderRadius: 15,
    padding: '3.2%',
  },
  whiteText: {
    color: colors.white,
    fontFamily: MEDUM_FONT,
    fontSize: 14,
    textAlign: 'center',
  },
  title: {
    // color: 'black',
    fontFamily: BOLD_FONT,
    fontWeight: 'bold',
    fontSize: 19,
    textAlign: 'center',
    paddingTop: '5%',
  },
  subtitle: {
    color: colors.gray,
    fontFamily: NORMAL_FONT,
    fontSize: 14,
    textAlign: 'center',
    paddingTop: '1%',
    paddingBottom: '3%',
  },
});

export default styles;
