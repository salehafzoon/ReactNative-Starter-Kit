import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Button,
  Toast,
} from 'native-base';

import firebaseM from '@react-native-firebase/messaging';
import { firebase } from '@react-native-firebase/crashlytics';
import colors from '../../res/colors';
import MatComIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';


import { translate } from '../../utils/localize';
import { EventRegister } from 'react-native-event-listeners';
// import { login } from '../../utils/APIUtils';
import { ACCESS_TOKEN } from '../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GrayInputItem from '../../components/GrayInputItem';

import globalStyles from '../../res/styles';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      userId: undefined,
      loading: true,
    };
    this.doLogin = this.doLogin.bind(this);
  }


  doLogin = async () => {
    console.warn("doing login");
    EventRegister.emit('loading', false);
    let getToken = null;
    try {
      getToken = await firebaseM().getToken();  
    } catch (error) {
      console.log("[firebaseToken]")
      console.log(error)
    }
    
    let data = {
      username: this.state.email,
      password: this.state.password,
      userId: this.state.userId
    };
    console.log(data)
    if (getToken != null && getToken != undefined) {
      data.token = getToken;
    }
    console.warn(data);
    // login(data)
    //   .then(async res => {
    //     console.log(res);
    //     EventRegister.emit('loading', false);
    //     if (res.access_token !== undefined) {
    //       await AsyncStorage.setItem(ACCESS_TOKEN, res.access_token);
    //       EventRegister.emit('auth', true);
    //     } else {
    //       console.log(res);
    //     }
    //   })
    //   .catch(e => {
    //     EventRegister.emit('loading', false);
    //     Toast.show({ text: translate('login.wrong_username_or_password') });
    //     console.log(e);
    //   });
  };

  render() {
    return (
      <Container style={{ flex: 1, backgroundColor: colors.backGray }}>
        <Header
          androidStatusBarColor={colors.primary2}
          iosBarStyle={colors.primary2}
          style={{ display: 'none' }}
        />
        <Content style={{}}>
          <View
            style={{
              marginTop: '30%',
              marginBottom: '10%',
            }}>
            <Text
              style={[
                globalStyles.rubicMedium,
                {
                  fontSize: 19,
                  marginVertical: '1%',
                  textAlign: 'center',
                  color: colors.myGrayDark,
                },
              ]}>
              {translate('login.join_delinternet')}
            </Text>
            <Text
              style={[
                globalStyles.rubicRegular,
                ,
                { fontSize: 12, marginTop: '1%' },
              ]}>
              {translate('welcome.arbitrary_donation_part1')}
            </Text>
            <Text style={[globalStyles.rubicRegular, , { fontSize: 12 }]}>
              {translate('welcome.arbitrary_donation_part2')}
            </Text>
            <Text style={[globalStyles.rubicRegular, , { fontSize: 12 }]}>
              {translate('welcome.arbitrary_donation_part3')}
            </Text>
          </View>
          <Form style={{ marginHorizontal: '8%' }}>
            <GrayInputItem
              title={'email'}
              keyboardType={'email-address'}
              onChange={value => {
                this.setState({ email: value });
              }}
              placeholder={'enter_you_username'}
              icon={null}
            />
            <GrayInputItem
              secureTextEntry={true}
              title={'password'}
              onChange={value => {
                this.setState({ password: value });
              }}
              placeholder={'enter_you_password'}
              icon={
                <View style={{}}>
                  <MatComIcons
                    color={colors.myGrayIcon}
                    name="lock"
                    size={20}
                  />
                </View>
              }
            />
            <Button
              block
              onPress={this.doLogin}
              style={{
                backgroundColor: colors.primary2,
                marginTop: '4%',
                borderRadius: 3,
              }}>
              <Text
                style={[
                  globalStyles.arialDarkGrayText,
                  {
                    color: colors.white,
                    fontSize: 14,
                    textAlign: 'center',
                  },
                ]}>
                {translate('login.login')}
              </Text>
            </Button>
            <TouchableOpacity
              style={{
                backgroundColor: 'transparent',
                marginTop: '6%',
                borderRadius: 3,
              }}>
              <Text
                style={[
                  globalStyles.rubicMedium,
                  {
                    fontSize: 12,
                    textAlign: 'center',
                    color: colors.myGrayIcon,
                    margin: '1%',
                  },
                ]}>
                {translate('login.forgot_password')}
              </Text>
            </TouchableOpacity>
            
            
           
          </Form>
        </Content>
      </Container>
    );
  }
}
