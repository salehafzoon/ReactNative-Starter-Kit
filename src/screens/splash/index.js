import React, {Component} from 'react';
import {Text, View, Image, ImageBackground} from 'react-native';
import images from '../../res/images';
import * as Animatable from 'react-native-animatable';
import colors from '../../res/colors';
import {translate} from '../../utils/localize';
import styles from './style';
import globalStyles from '../../res/styles';
import {Spinner, Header} from 'native-base';

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

          backgroundColor: colors.white,
        }}>
        <Header
          androidStatusBarColor={colors.primary}
          iosBarStyle={colors.primary}
          style={{display: 'none'}}
        />
        <ImageBackground
          // source={images.smile_background}
          style={{
            flex: 1,
            justifyContent: 'center',
            resizeMode: 'cover',
          }}>
          <View>
            <Animatable.Image
              animation="fadeIn"
              duration={3000}
              source={images.foxy2}
              style={{
                height: '50%',
                width: '50%',
                marginTop: '30%',
                alignSelf: 'center',
                backgroundColor: 'white',
              }}
            />

            <Animatable.View animation="fadeIn" delay={300}>
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
                {translate('login.app_title')}
              </Text>
              <Spinner color={colors.primary} />
            </Animatable.View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
