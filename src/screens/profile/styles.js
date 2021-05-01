import {StyleSheet} from 'react-native';
import colors from '../../res/colors';
import basicStyles from '../../res/styles';

basicStyles;
const styles = StyleSheet.create({
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
    borderWidth: 2,
    borderColor: colors.grayLight,
    color: colors.myGray,
    borderRadius: 4,
    paddingVertical: '2.5%',
    paddingHorizontal: '5%',
    marginVertical: '2.5%',
    fontSize: 12,
  },
  titleStyle: {
    fontFamily: 'Rubik-Regular',
    fontWeight: 'bold',
    textAlign: 'left',
    // color: colors.myGray,
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
    marginVertical: '4.5%',
  },
});

export default styles;
