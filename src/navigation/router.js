import {createStackNavigator, createSwitchNavigator} from 'react-navigation';

import Home from '../screens/home';
import Login from '../screens/login';
import Profile from '../screens/profile';
import Events from '../screens/events';
import AddEvent from '../screens/addEvent';
import Notifications from '../screens/notifications';
import AddNotification from '../screens/addNotification';
import Leaves from '../screens/leaves';
import AddLeave from '../screens/addLeave';
import TimeRecords from '../screens/timeRecords';
import Resignations from '../screens/resignations';
import AddResignation from '../screens/addResignation';
import LocTracker from '../screens/locationTracker';
import UsersMap from '../screens/usersMap';
import VehiclesMap from '../screens/vehiclesMap';
import LeaveRequests from '../screens/leaveRequests';
import UsersTimeclocks from '../screens/usersTimeclocks';
import welcome from '../screens/welcome';
import Welcome from '../screens/welcome';

export const SignedOut = createStackNavigator({
  LoginScreen: {
    screen: Login,
    navigationOptions: {
      header: null,
    },
  },
});

const EventsAndAdding = createStackNavigator(
  {
    EventScreen: {
      screen: Events,
      navigationOptions: {
        header: null,
      },
    },
    AddEventScreen: {
      screen: AddEvent,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'EventScreen',
  },
);

const NotifsAndAdding = createStackNavigator(
  {
    NotifisScreen: {
      screen: Notifications,
      navigationOptions: {
        header: null,
      },
    },
    AddNotifiScreen: {
      screen: AddNotification,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'NotifisScreen',
  },
);

const LeavesAndAdding = createStackNavigator(
  {
    LeavesScreen: {
      screen: Leaves,
      navigationOptions: {
        header: null,
      },
    },
    AddLeaveScreen: {
      screen: AddLeave,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'LeavesScreen',
  },
);

const ResignationsAndAdding = createStackNavigator(
  {
    ResignationsScreen: {
      screen: Resignations,
      navigationOptions: {
        header: null,
      },
    },
    AddResignationScreen: {
      screen: AddResignation,
      navigationOptions: {
        header: null,
      },
    },
  },

  {
    initialRouteName: 'ResignationsScreen',
  },
);

const SignedIn = createStackNavigator(
  {
    HomeScreen: {
      screen: Home,
      navigationOptions: {
        header: null,
      },
    },
    ProfileScreen: {
      screen: Profile,
      navigationOptions: {
        header: null,
      },
    },
    EventsAndAddignScreen: {
      screen: EventsAndAdding,
      navigationOptions: {
        header: null,
      },
    },
    NotifsAndAddignScreen: {
      screen: NotifsAndAdding,
      navigationOptions: {
        header: null,
      },
    },
    LeavesAndAddingScreen: {
      screen: LeavesAndAdding,
      navigationOptions: {
        header: null,
      },
    },
    TimeRecordsScreen: {
      screen: TimeRecords,
      navigationOptions: {
        header: null,
      },
    },
    ResignsAndAddingScreen: {
      screen: ResignationsAndAdding,
      navigationOptions: {
        header: null,
      },
    },
    LocTrackerScreen: {
      screen: LocTracker,
      navigationOptions: {
        header: null,
      },
    },
    UsersMap: {
      screen: UsersMap,
      navigationOptions: {
        header: null,
      },
    },
    VehiclesMap: {
      screen: VehiclesMap,
      navigationOptions: {
        header: null,
      },
    },
    LeaveRequest: {
      screen: AddLeave,
      navigationOptions: {
        header: null,
      },
    },
    UsersTimeclocks: {
      screen: UsersTimeclocks,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'HomeScreen',
  },
);

const Welcoming = createStackNavigator({
  WelcomScreen: {
    screen: Welcome,
    navigationOptions: {
      header: null,
    },
  },
  initialRouteName: 'WelcomScreen',
});

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
      welcomingScreen: {
        screen: Welcoming,
      },
      AuthenticatingScreen: {
        screen: Authenticating(isAuthenticated),
      },
    },
    {
      initialRouteName: isFirstTime
        ? 'welcomingScreen'
        : 'AuthenticatingScreen',
    },
  );
};
