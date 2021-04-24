import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { createAppContainer } from 'react-navigation';
import { Container, Root, Toast } from 'native-base';
import { createRootNavigator } from './navigation/router';
import Splash from './screens/splash';
import LoadingModal from './components/LoadingModal';
import NetInfo from '@react-native-community/netinfo';
import { EventRegister } from 'react-native-event-listeners';
import {
  ACCESS_TOKEN,
  FIRST_TIME,
  API_BASE_URL,
} from './constants';

import _ from 'lodash';
import RNFS from 'react-native-fs';
import RNApkInstallerN from 'react-native-apk-installer-n';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      isLoading: true,
      message: "massage", 
      isMessageModalOpen: false
      };
  }

  performTimeConsumingTask = async () => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve('result');
      }, 2500),
    );
  };

  async componentDidMount() {
    this.loadingListener = EventRegister.addEventListener(
      'loading',
      (loading) => {
        this.setState({ loading: loading });
      },
    );

    this.messageDialogListener = EventRegister.addEventListener(
      'messageDialog',
      (msg) => {
        this.setState({ message: msg, isMessageModalOpen: true });
      },
    );

    
    // try {
    //   // await AsyncStorage.clear();
    //   let token = await AsyncStorage.getItem(ACCESS_TOKEN);
    //   if (token != null) console.warn('app token:' + token);

    
    //   this.setState({
    //     isAuthenticated: token == undefined || token == null ? false : true,

    //     isFirstTime: firstTime == undefined || firstTime == null ? true : false,
    //   });

    //   await this.getUser();
    // } catch (err) {
    //   console.error(err);
    // }

  }

  componentWillUnmount() {
    EventRegister.removeEventListener(this.loadingListener);
    EventRegister.removeEventListener(this.messageDialogListener);
  }

  handleLocalizationChange = () => {
    setI18nConfig();
    this.forceUpdate();
  };


  render() {
    if (this.state.isLoading) {
      return (
        <Container>
          <Splash />
        </Container>
      );
    }

    const rootNavigator = createRootNavigator(
      this.state.isAuthenticated,
    );

    const AppContainer = createAppContainer(rootNavigator);

    return (
      <Root>
        <Container>
        
          <LoadingModal isLoading={this.state.loading} />

          <MessageModal
            isVisible={this.state.isMessageModalOpen}
            message={this.state.message}
            close={() => this.setState({ isMessageModalOpen: false })}
          />

          <AppContainer {...this.props} />
        </Container>
      </Root>
    );
  }
}
