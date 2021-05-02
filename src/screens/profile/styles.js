import {StyleSheet} from 'react-native';
import {BOLD_FONT, LIGHT_FONT, NORMAL_FONT} from '../../constants';
import colors from '../../res/colors';
import {localLang} from '../../utils/localize';

const styles = StyleSheet.create({
  cameraIconStyle: {
    borderRadius: 30,
    paddingVertical: '1.6%',
    padding: '1.2%',
    backgroundColor: colors.primary,
  },
  buttonCard: {
    width: '100%',
    height: '8%',
    position: 'absolute',
    bottom: '3%',
    alignSelf: 'center',
    borderRadius: 13,
    marginHorizontal: '16%',
    zIndex: -2,
  },
  editTitle: {
    fontFamily: BOLD_FONT,
    marginTop: '2%',
    marginHorizontal: '5%',
    marginBottom: '1%',
    fontSize: 16,
  },
  profImageCont: {
    borderWidth: 2,
    borderColor: 'white',
    shadowColor: colors.gray,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.9,
    shadowRadius: 3.84,
    elevation: 2,
    borderRadius: 50,
  },
  inputStyle: {
    fontFamily:LIGHT_FONT,
    borderWidth: 2,
    borderColor: colors.grayLight,
    borderRadius: 4,
    paddingVertical: '2.5%',
    paddingHorizontal: '5%',
    marginVertical: '2.5%',
    fontSize: 12,
  },
  titleStyle: {
    fontFamily: NORMAL_FONT,
    textAlign: 'left',
    marginHorizontal: '4%',
    marginBottom: '-4%',
    zIndex: 10,
    // backgroundColor: colors.grayDark,
    alignSelf: 'flex-start',
    paddingHorizontal: '2%',
    fontSize: 12,
    paddingVertical: '1.5%',
  },
  imageStyle: {
    borderWidth: 2,
    borderColor: colors.grayLight,
    padding: 7,
    borderRadius: 100,
    alignSelf: 'center',
    marginVertical: '2%',
  },
  backBtn: {
    marginHorizontal: '5%',
    marginTop: '5%',
    marginBottom: '2%',
    backgroundColor: colors.primary,
    paddingHorizontal: '2%',
    borderRadius: 10,
  },
});

export default styles;
