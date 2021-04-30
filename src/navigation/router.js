// import {createSwitchNavigator, createStackNavigator} from 'react-navigation';

import React, {Component} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/home';
import LoginScreen from '../screens/login';
import SecondScreen from '../screens/second';

export const createRootNavigator = (isAuthenticated, isFirstTime) => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Second" component={SecondScreen} />
    </Drawer.Navigator>
  );
};
