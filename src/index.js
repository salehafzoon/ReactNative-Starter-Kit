import React, { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAppContainer } from "react-navigation";
import { Container, Root, Toast } from 'native-base';
import { createRootNavigator } from './navigation/router';
import Splash from './screens/splash';
import LoadingModal from './components/LoadingModal';
import { EventRegister } from 'react-native-event-listeners';
import {
  ACCESS_TOKEN,
  FIRST_TIME,
  API_BASE_URL,
} from './constants';


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      isLoading: false,
      loading: false,
      message: "massage", 
      isMessageModalOpen: false,
      isFirstTime: false
      };
  }

  performTimeConsumingTask = async () => {
    return new Promise((resolve) =>
      setTimeout(() => {
        
        resolve('result');
        this.setState({ isLoading: false})
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

    const rootNavigator = createRootNavigator(
      this.state.isAuthenticated,
      this.state.isFirstTime
    );

    createAppContainer
    const AppContainer = createAppContainer(rootNavigator);
    if (this.state.isLoading) {
      return (
        <Container>
          <Splash />
          <UpdateModal
            isVisible={this.state.isUpdateModalOpen}
            showProgress={this.state.showProgress}
            progressValue={this.state.progressValue}
            onDownload={() => this.downloadApk()}
          />
        </Container>
      );
    }
    return (
      <Root>
        <Container>
        
          <LoadingModal isLoading={this.state.loading} />

          {/* <MessageModal
            isVisible={this.state.isMessageModalOpen}
            message={this.state.message}
            close={() => this.setState({ isMessageModalOpen: false })}
          /> */}

          <AppContainer {...this.props} />
        </Container>
      </Root>
    );
  }
}
