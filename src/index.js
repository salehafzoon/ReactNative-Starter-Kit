import React, {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Container, Root, Toast} from 'native-base';
import {createRootNavigator} from './navigation/router';
import Splash from './screens/splash';
import LoadingModal from './components/LoadingModal';
import {EventRegister} from 'react-native-event-listeners';
import {ACCESS_TOKEN, FIRST_TIME, API_BASE_URL} from './constants';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './screens/home';
import LoginScreen from './screens/login';
import SecondScreen from './screens/second';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: true,
      isLoading: true,
      loading: false,
      message: 'massage',
      isMessageModalOpen: false,
      isFirstTime: false,
    };
  }

  performTimeConsumingTask = async () => {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve('result');
        warn('timeout');
        this.setState({isLoading: false});
      }, 2000),
    );
  };

  async componentDidMount() {
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 1500);

    this.loadingListener = EventRegister.addEventListener(
      'loading',
      loading => {
        this.setState({loading: loading});
      },
    );

    this.messageDialogListener = EventRegister.addEventListener(
      'messageDialog',
      msg => {
        this.setState({message: msg, isMessageModalOpen: true});
      },
    );
    this.authListener = EventRegister.addEventListener('auth', isAuth => {
      this.setState({isAuthenticated: isAuth, isLoading: false});
    });

    try {
      // await AsyncStorage.clear();
      // let token = await AsyncStorage.getItem(ACCESS_TOKEN);
      // let firstTime = await AsyncStorage.getItem(FIRST_TIME);
      // if (token != null) console.warn('app token:' + token);
      // this.setState({
      //   isAuthenticated: token == undefined || token == null ? false : true,
      //   isFirstTime: firstTime == undefined || firstTime == null ? true : false,
      // });
      // await this.getUser();
    } catch (err) {
      console.error(err);
    }
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
      this.state.isFirstTime,
    );
    const Drawer = createDrawerNavigator();

    // createAppContainer;
    // const AppContainer = createAppContainer(rootNavigator);

    if (this.state.isLoading) {
      return (
        <Container>
          <Splash />
        </Container>
      );
    } else {
      return (
        <Root>
          <Container>
            <LoadingModal isLoading={this.state.loading} />

            {/* <AppContainer {...this.props} /> */}
            <NavigationContainer>
              {/* <rootNavigator {...this.props} /> */}
              <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Second" component={SecondScreen} />
              </Drawer.Navigator>
            </NavigationContainer>
          </Container>
        </Root>
      );
    }
  }
}
