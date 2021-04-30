import {StyleSheet} from 'react-native';
import colors from '../../res/colors';

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: '2%',
  },
  row: {
    marginTop: '5%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: '4%',
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: '2%',
  },
  bottonDrawerSection: {
    marginBottom: '5%',
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '2%',
    paddingVertical: '4%',
  },
});

export default styles;
