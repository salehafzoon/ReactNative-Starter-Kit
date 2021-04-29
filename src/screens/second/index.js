import globalStyles from '../../res/styles';
import React, {Component} from 'react';
import {Text, View, Image, ImageBackground} from 'react-native';
import images from '../../res/images';
import colors from '../../res/colors';
import {translate} from '../../utils/localize';
import styles from './style';
import globalStyles from '../../res/styles';
import {Header} from 'native-base';

export default class SecondScreen extends Component {
  render() {
    return (
      <View>
        <Text
          style={[
            globalStyles.rubicBold,
            {
              fontSize: 20,
              marginVertical: '1%',
              textAlign: 'center',
              color: colors.grayDark,
            },
          ]}>
          Second page
        </Text>
      </View>
    );
  }
}
