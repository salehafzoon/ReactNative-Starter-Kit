import React, {Component} from 'react';
import {View, Image, NativeModules, Dimensions} from 'react-native';
import {Content, Button, Header, Toast, Right, Left, Body} from 'native-base';

import colors from '../../res/colors';
import images from '../../res/images';

import {translate} from '../../utils/localize';
import LanguageModal from '../../components/LanguageModal';
import {EventRegister} from 'react-native-event-listeners';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ACCESS_TOKEN} from '../../constants';

import AntDesign from 'react-native-vector-icons/AntDesign';
import globalStyles from '../../res/styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';

import {DrawerActions, useTheme} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Text} from 'react-native-paper';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      asyncStorageKey: 'watch_ids',
      isLoading: false,
      languageModalOpen: false,
      user: {
        firstname: '',
      },
      theme: null,
    };
  }

  async componentWillUnmount() {
    theme = useTheme();
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <LanguageModal
          isOpen={this.state.languageModalOpen}
          close={() => this.setState({languageModalOpen: false})}
        />
        <Header
          androidStatusBarColor={colors.primary}
          iosBarStyle={colors.primary}
          style={{display: 'none'}}
        />

        <View
          style={styles.content}>
          <Button
            style={styles.menuBtn}
            onPress={() =>
              this.props.navigation.dispatch(DrawerActions.openDrawer())
            }>
            <Ionicons name="menu" size={30} color="white" />
          </Button>

          <View style={{marginTop: '30%'}}>
            <Image
              source={images.foxy1}
              style={{alignSelf: 'center', width: 150, height: 150}}
            />
            <Text
              style={styles.appTitle}>
              {translate('home.welcom')}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
