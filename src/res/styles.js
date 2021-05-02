import {useTheme} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import colors from './colors';
import {BOLD_FONT, LIGHT_FONT, MEDUM_FONT, NORMAL_FONT} from '../constants';

export default StyleSheet.create({
  normalTXT: {
    fontFamily: NORMAL_FONT,
    textAlign: 'center',
  },
  mediumTXT: {
    fontFamily: MEDUM_FONT,
    textAlign: 'center',
  },
  boldTxt: {
    fontFamily: BOLD_FONT,
    textAlign: 'center',
  },
  lightTxt: {
    fontFamily: LIGHT_FONT,
    textAlign: 'center',
  },
  blackBigTitle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center',
    fontFamily: NORMAL_FONT,
  },

  card: {
    backgroundColor: 'white',
    borderRadius: 5,
    shadowOffset: {width: 10, height: 10},
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 7,
    fontFamily: NORMAL_FONT,
  },
  chips: {
    color: 'white',
    borderWidth: 1,
    borderColor: 'white',
    fontSize: 10.5,
    borderRadius: 9,
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    fontFamily: NORMAL_FONT,
  },
  primaryBtn: {
    color: 'white',
    backgroundColor: colors.primary,
    fontFamily: NORMAL_FONT,
  },
});
