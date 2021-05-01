import {StyleSheet} from 'react-native';
import colors from '../../res/colors';

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: '2%',
    marginBottom: '5%',
  },
  row: {
    marginTop: '5%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    marginTop: '5%',
    marginRight: '4%',
    borderBottomColor: '#f4f4f4',
    borderBottomWidth: 1,
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
    marginTop: '2%',
  },
  button: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    // shadowOffset: {
    //   width: 2,
    //   height: 2,
    // },
    borderColor: 'white',
    shadowOpacity: 0.9,
    shadowRadius: 2,
    elevation: 2,
    borderRadius: 30,
  },
});

export default styles;
