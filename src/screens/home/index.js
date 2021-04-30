import React, {Component} from 'react';
import {View, Image, NativeModules, Text} from 'react-native';
import {Content, Button, Header, Toast} from 'native-base';

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

let theme;

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
      <Content
      //  style={{backgroundColor: theme.colors.background}}
      >
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
          style={{
            flex: 1,
          }}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.dispatch(DrawerActions.openDrawer());
            }}>
            <Text style={globalStyles.blackTitle}>{translate('home.hi')}</Text>
          </TouchableOpacity>
        </View>
      </Content>
    );
  }
}
