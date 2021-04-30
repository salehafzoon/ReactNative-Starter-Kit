import React, {Component} from 'react';
import {View} from 'react-native';
import {DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  TouchableRipple,
  Switch,
} from 'react-native-paper';

import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';
import {translate} from '../../utils/localize';
import images from '../../res/images';

export default class DrawerContent extends Component {
  constructor(props) {
    super(props);
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
              <DrawerItem
                icon={({color, size}) => {
                  <MatIcon name="home" color={color} size={size} />;
                }}
                label={translate('drawer.home')}></DrawerItem>
            </Drawer.Section>
          </View>
        </DrawerContentScrollView>
        <Drawer.Section style={styles.bottonDrawerSection}>
          <DrawerItem
            icon={({color, size}) => {
              <MatIcon name="exit-to-app" color={color} size={size} />;
            }}
            label={translate('drawer.signout')}></DrawerItem>
        </Drawer.Section>
      </View>
    );
  }
}
