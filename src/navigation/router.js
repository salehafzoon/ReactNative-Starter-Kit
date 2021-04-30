// import {createSwitchNavigator, createStackNavigator} from 'react-navigation';

import React, {Component} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/home';
import LoginScreen from '../screens/login';
import SecondScreen from '../screens/second';
import DrawerContent from '../components/DrawerContent';

const Stack = createStackNavigator();
const SignedOut = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

const Drawer = createDrawerNavigator();
const SignedIn = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Second" component={SecondScreen} />
    </Drawer.Navigator>
  );
};

export const createRootNavigator = (isAuthenticated, isFirstTime) => {
  return isAuthenticated ? <>{SignedIn()}</> : <>{SignedOut()}</>;
};
