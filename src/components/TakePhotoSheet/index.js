import {useTheme} from 'react-native-paper';
import React, {Component} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';
import colors from '../../res/colors';
import {translate} from '../../utils/localize';
import styles from './styles';
export default class TakePhotoSheet extends Component {
  
    constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          paddingBottom: '50%',
          shadowColor: colors.gray,
          shadowOpacity: '0.4',
          shadowRadius: 30,
          shadowOffset: {
            width: -1,
            height: -2,
          },
        }}>
        <View
          style={{
            marginHorizontal: '40%',
            backgroundColor: colors.grayLight,
            marginTop: '6%',
            height: 4,
            borderRadius: 5,
            zIndex: 10,
          }}
        />
        <Text style={styles.title}>{translate('photo.edit-photo')}</Text>
        <Text style={styles.subtitle}>
          {translate('photo.choose-your-profile-photo')}
        </Text>
        <TouchableOpacity style={styles.primaryBtn} onPress={() => {}}>
          <Text style={styles.whiteText}>{translate('photo.take-photo')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.primaryBtn} onPress={() => {}}>
          <Text style={styles.whiteText}>
            {translate('photo.choose-from-album')}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
