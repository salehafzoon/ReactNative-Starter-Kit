// import {createSwitchNavigator, createStackNavigator} from 'react-navigation';

import React, {Component} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/home';
import LoginScreen from '../screens/login';
import ProfileScreen from '../screens/profile';
import DrawerContent from '../components/DrawerContent';
import {Left} from 'native-base';
import {StyleSheet} from 'react-native';
import TabItem from '../components/TabItem';
import {translate} from '../utils/localize';

const Stack = createStackNavigator();
const SignedOut = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};
const Tab = createBottomTabNavigator();
const TabScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showLabel: false,
        style: styles.bottonTab,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabItem
              name={translate('tab.home')}
              icon="ios-home"
              size={30}
              isFocused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabItem
              name={translate('tab.profile')}
              icon="person-circle"
              size={34}
              isFocused={focused}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Drawer = createDrawerNavigator();
const SignedIn = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Tabs"
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Tabs" component={TabScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

export const createRootNavigator = (isAuthenticated, isFirstTime) => {
  return isAuthenticated ? <>{SignedIn()}</> : <>{SignedOut()}</>;
};

const styles = StyleSheet.create({
  bottonTab: {
    position: 'absolute',
    bottom: '2%',
    marginHorizontal: '5%',
    borderRadius: 15,
    height: '9%',
  },
});
