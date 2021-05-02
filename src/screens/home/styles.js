import {StyleSheet} from 'react-native';
import {BOLD_FONT} from '../../constants';
import colors from '../../res/colors';

const styles = StyleSheet.create({
  appTitle: {
    fontFamily: BOLD_FONT,
    fontSize: 20,
    marginVertical: '1%',
    textAlign: 'center',
  },
  menuBtn: {
    backgroundColor: colors.primary,
    margin: '5%',
    paddingHorizontal: '2%',
    borderRadius: 10,
  },
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },

  content: {
    alignContent: 'center',
    flex: 1,
  },
});

export default styles;
