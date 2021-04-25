import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

import Home from '../screens/home';

// export const SignedOut = createStackNavigator({
//   LoginScreen: {
//     screen: Login,
//     navigationOptions: {
//       header: null,
//     },
//   },
// });


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

const Authenticating = isAuthenticated => {
  return createSwitchNavigator(
    {
      SignedIn: {
        screen: SignedIn,
      }
      // ,SignedOut: {
      //   screen: SignedOut,
      // },
    },
    // {
    //   initialRouteName: isAuthenticated ? 'SignedIn' : 'SignedOut',
    // },
  );
};

export const createRootNavigator = (isAuthenticated, isFirstTime) => {
  return createSwitchNavigator(
    {
      AuthenticatingScreen: {
        screen: Authenticating(isAuthenticated),
      },
    },
    // {
    //   initialRouteName: isFirstTime
    //     ? 'welcomingScreen'
    //     : 'AuthenticatingScreen',
    // },
  );
};
