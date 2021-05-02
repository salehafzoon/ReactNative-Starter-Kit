import {useTheme} from 'react-native-paper';
import React, {Component} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text, Card} from 'react-native-paper';
import colors from '../../res/colors';
import {translate} from '../../utils/localize';
import styles from './styles';
import ImagePicker from 'react-native-image-crop-picker';
import {EventRegister} from 'react-native-event-listeners';

export default class TakePhotoSheet extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.takePhoto = this.takePhoto.bind(this);
    this.takePhoto = this.takePhoto.bind(this);
  }
  takePhoto() {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      EventRegister.emit('pickImage', image.path);
    });
  }
  choosePhoto() {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      EventRegister.emit('pickImage', image.path);
    });
  }

  render() {
    return (
      <Card
        style={{
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          paddingBottom: '50%',
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
        <TouchableOpacity style={styles.primaryBtn} onPress={this.takePhoto}>
          <Text style={styles.whiteText}>{translate('photo.take-photo')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.primaryBtn} onPress={this.choosePhoto}>
          <Text style={styles.whiteText}>
            {translate('photo.choose-from-album')}
          </Text>
        </TouchableOpacity>
      </Card>
    );
  }
}
