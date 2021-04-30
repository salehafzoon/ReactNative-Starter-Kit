import {createSwitchNavigator, createStackNavigator} from 'react-navigation';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import Home from '../screens/home';
import Login from '../screens/login';
import Second from '../screens/second';

export const SignedOut = createStackNavigator({
  LoginScreen: {
    screen: Login,
    navigationOptions: {
      header: null,
    },
  },
});

const SignedIn = createStackNavigator(
  {
    HomeScreen: {
      screen: Home,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'HomeScreen',
  },
);

const SignedIn = createDrawerNavigator(
  {
    HomeScreen: {
      screen: Home,
      navigationOptions: {
        header: null,
      },
    },
    SecondScreen: {
      screen: Second,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'HomeScreen',
  },
);

const Authenticating = isAuthenticated => {
  return createSwitchNavigator(
    {
      SignedIn: {
        screen: SignedIn,
      },
      SignedOut: {
        screen: SignedOut,
      },
    },
    {
      initialRouteName: isAuthenticated ? 'SignedIn' : 'SignedOut',
    },
  );
};

export const createRootNavigator = (isAuthenticated, isFirstTime) => {
  return createSwitchNavigator(
    {
      AuthenticatingScreen: {
        screen: Authenticating(isAuthenticated),
      },
    },
  );
};
