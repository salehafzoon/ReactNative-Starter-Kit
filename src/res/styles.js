import {StyleSheet} from 'react-native';
import colors from './colors';

export default StyleSheet.create({
  grayText: {
    color: colors.gray,
    fontFamily: 'IRANSans',
    fontSize: 16,
    textAlign: 'center',
  },
  arialGrayText: {
    color: colors.myGrayIcon,
    fontFamily: 'Arial_Rounded_MT_Bold',
    fontSize: 15,
    textAlign: 'center',
  },
  arialDarkGrayText: {
    color: colors.myGray,
    fontFamily: 'Arial_Rounded_MT_Bold',
    fontSize: 15,
    textAlign: 'center',
  },

  backgroudnText: {
    fontSize: 32,
    color: colors.myLightGray2,
    alignSelf: 'stretch',
    fontFamily: 'Rubik-Medium',
  },
  arialDarkerGrayText: {
    color: colors.grayDarker,
    fontFamily: 'Arial_Rounded_MT_Bold',
    fontWeight: 'bold',
  },
  rubicMedium: {
    color: colors.myGray,
    fontFamily: 'Rubik-Medium',
    fontSize: 15,
  },
  rubicRegular: {
    color: colors.myGray,
    fontFamily: 'Rubik-Regular',
    fontSize: 15,
    textAlign: 'center',
  },
  rubicBold: {
    color: colors.myGray,
    fontFamily: 'Rubik-Bold',
    fontSize: 15,
  },
  rubicLight: {
    color: colors.myGray,
    fontFamily: 'Rubik-Light',
    fontSize: 15,
    textAlign: 'center',
  },
  smallgrayText: {
    color: colors.gray,
    fontFamily: 'IRANSans',
    fontSize: 13,
  },
  blackTitle: {
    color: 'black',
    fontFamily: 'IRANSans_Bold',
    fontSize: 15,
    textAlign: 'center',
    padding: 5,
    alignContent: 'center',
    alignItems: 'center',
  },
  titleCard: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: colors.primary,
    alignSelf: 'baseline',
  },
  whiteBigTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    padding: 5,
    alignContent: 'center',
    alignItems: 'center',
  },
  primaryBigTitle: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 18,
    padding: 5,
    alignContent: 'center',
    alignItems: 'center',
  },
  primaryText: {
    color: colors.primary,
    fontSize: 13,
    padding: 5,
    alignContent: 'center',
    alignItems: 'center',
  },
  blackBigTitle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },

  card: {
    backgroundColor: 'white',
    borderRadius: 5,
    shadowOffset: {width: 10, height: 10},
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 7,
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
  },
  primaryBtn: {
    color: 'white',
    backgroundColor: colors.primary,
  },
});
