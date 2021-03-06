import React, {Component} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';

import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  TouchableRipple,
  Switch,
  Text,
} from 'react-native-paper';
import {EventRegister} from 'react-native-event-listeners';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

import styles from './style';
import {translate} from '../../utils/localize';
import images from '../../res/images';
import colors from '../../res/colors';
import {Button, Card} from 'native-base';
import {NORMAL_FONT} from '../../constants';

export default class DrawerContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDarkTheme: false,
    };
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    this.setState({isDarkTheme: !this.state.isDarkTheme});
    // DefaultTheme
    EventRegister.emit('darkTheme', !this.state.isDarkTheme);
  }

  render() {
    let This = this;
    return (
      <View style={{flex: 1}}>
        <DrawerContentScrollView {...This.props}>
          <View style={{padding: '3%'}}>
            <View style={styles.userInfoSection}>
              <View style={{flexDirection: 'row', margin: '3%'}}>
                <Avatar.Image source={images.foxy2} size={60} />
              </View>
              <View style={{marginHorizontal: '3%'}}>
                <Title>{translate('drawer.username')}</Title>
                <Caption>{translate('drawer.email')}</Caption>
              </View>
            </View>

            <Drawer.Section style={styles.section}>
              <Drawer.Item
                icon={({color, size}) => (
                  <Entypo color={color} size={size} name="home" />
                )}
                label={translate('drawer.home')}
                onPress={() => This.props.navigation.navigate('Home')}
              />
              <Drawer.Item
                icon={({color, size}) => (
                  <Ionicons
                    color={color}
                    size={size}
                    name="ios-person-circle-outline"
                  />
                )}
                label={translate('drawer.profile')}
                onPress={() => This.props.navigation.navigate('Profile')}
              />
            </Drawer.Section>
            <Drawer.Section
              style={styles.section}
              title={translate('drawer.preferences')}>
              <TouchableRipple
                onPress={() => {
                  this.toggleTheme();
                }}>
                <View>
                  <View style={styles.preference}>
                    <Text style={{marginLeft: '5%'}}>
                      {translate('drawer.dark-theme')}
                    </Text>
                    <View pointerEvents="none">
                      <Switch value={This.state.isDarkTheme} />
                    </View>
                  </View>
                </View>
              </TouchableRipple>
              <TouchableOpacity
                style={styles.preference}
                onPress={() => EventRegister.emit('languageModal', true)}>
                <Text style={{marginLeft: '5%'}}>
                  {translate('drawer.language')}
                </Text>
                <Ionicons
                  style={{marginHorizontal: '4%'}}
                  name="ios-language"
                  size={22}
                />
              </TouchableOpacity>
            </Drawer.Section>
          </View>
        </DrawerContentScrollView>

        <Drawer.Section style={styles.bottonDrawerSection}>
          <Drawer.Item
            icon="logout"
            label={translate('drawer.signout')}
            onPress={() => EventRegister.emit('auth', false)}></Drawer.Item>
        </Drawer.Section>
      </View>
    );
  }
}
