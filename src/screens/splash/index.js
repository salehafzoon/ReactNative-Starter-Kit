import React, { Component } from 'react';
import { Text, View, Image, ImageBackground } from 'react-native';
import images from '../../res/images';
import * as Animatable from 'react-native-animatable';
import colors from '../../res/colors';
import { translate } from '../../utils/localize';
import styles from './style';
import { Spinner, Header } from 'native-base';

export default class Splash extends Component {
  constructor(properties) {
    super(properties);
    this.state = {
      user: undefined,
    };
  }

  render() {
    return (
      <View
        style={{
          flex: 1,

          backgroundColor: colors.primary,
        }}>
        <ImageBackground source={images.smile_background} style={{
          flex: 1,
          justifyContent: "center",
          resizeMode: 'cover'
        }}>
          <View>
            <Animatable.Image
              animation="fadeIn"
              duration={3000}
              source={images.cat_footprint}
              style={{
                width: 220,
                height: 70,
                alignSelf: 'center',
                backgroundColor: 'white',
              }}
            />

            <Animatable.View animation="fadeIn" delay={500}>
              <Spinner color={'white'} />
            </Animatable.View>
          </View>
        </ImageBackground>

      </View>
    );
  }
}
