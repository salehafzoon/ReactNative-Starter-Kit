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
  title: {
    margin: 7,
    color: colors.primary,
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'IRANSans_Bold',
  },
  card: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 5,
    padding: 5,
    shadowOffset: {width: 10, height: 10},
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 8,
  },
  closetBtn: {
    padding: 5,
    borderRadius: 50,
    backgroundColor: 'white',
    shadowColor: colors.gray,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.9,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default styles;
