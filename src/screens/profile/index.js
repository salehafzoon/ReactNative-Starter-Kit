import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {Text} from 'react-native-paper';
import {
  Container,
  Content,
  Toast,
  Icon,
  Header,
  Button,
  Footer,
} from 'native-base';
import colors from '../../res/colors';
import images from '../../res/images';
import {
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native-gesture-handler';
import {translate} from '../../utils/localize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import {EventRegister} from 'react-native-event-listeners';

import basicStyles from '../../res/styles';
import styles from './styles';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      isConnect: true,
      statusColor: 'green',
      user: {
        name: 'sample',
        email: 'mail@gmail.com',
        username: 'username',
      },
      newPassword: '',
      confirmPassword: '',
      edited: false,
      avatar: null,
    };
    this.logout = this.logout.bind(this);
    this.getProfile = this.getProfile.bind(this);
  }

  componentWillMount() {
    // this.getProfile();
  }

  logout = () => {
    EventRegister.emit('logout');
  };

  getProfile = () => {};

  render() {
    let THIS = this;
    return (
      <View style={{flex: 1}}>
        <Header
          androidStatusBarColor={colors.primary}
          iosBarStyle={colors.primary}
          style={{display: 'none'}}
        />
        <Content style={{flex: 1}}>
          <View
            style={{
              backgroundColor: colors.primary,
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
            }}>
            <TouchableOpacity
              transparent
              style={{marginHorizontal: '5%', marginVertical: '2%'}}
              onPress={() => this.props.navigation.goBack(null)}>
              <Ionicons
                name="ios-arrow-back-circle-outline"
                size={40}
                color={colors.white}
              />
            </TouchableOpacity>

            <View style={{flex: 1}}>
              <Text
                style={[
                  basicStyles.backgroudnText,
                  {
                    marginHorizontal: '4%',
                    marginBottom: '3%',
                  },
                ]}>
                {translate('profile.editProfile')}
              </Text>
            </View>
          </View>
          <View>
            <View
              style={[
                styles.imageStyle,
                {
                  alignSelf: 'center',
                  marginVertical: '4%',
                },
              ]}>
              <View style={styles.profImageCont}>
                <Image
                  source={images.foxy3}
                  style={{
                    borderRadius: 100,
                    width: 100,
                    height: 100,
                    alignSelf: 'center',
                  }}
                />
              </View>
            </View>

            <View
              style={[
                styles.profImageCont,
                {
                  flex: 1,
                  alignSelf: 'center',
                  alignItems: 'center',
                  marginTop: '-15%',
                  marginLeft: '18%',
                },
              ]}>
              <EvilIcons
                name="camera"
                size={22}
                color="white"
                style={{
                  borderRadius: 30,
                  paddingVertical: '0.9%',
                  padding: '0.6%',
                  backgroundColor: colors.primary,
                }}
              />
            </View>
            <ScrollView style={{margin: '5%'}}>
              <View style={{}}>
                <Text style={styles.titleStyle}>
                  {translate('profile.firstName')}
                </Text>
                <TextInput
                  style={styles.inputStyle}
                  editable={false}
                  value={this.state.user.firstname}
                  placeholder={'First name'}
                  onChangeText={text => this.setState({'user.firstname': text})}
                />
              </View>
              <View style={{}}>
                <Text style={styles.titleStyle}>
                  {translate('profile.lastName')}
                </Text>
                <TextInput
                  style={styles.inputStyle}
                  editable={false}
                  value={this.state.user.lastname}
                  placeholder={translate('profile.lastName')}
                  onChangeText={text => this.setState({'user.lastname': text})}
                />
              </View>
              <View>
                <Text style={styles.titleStyle}>
                  {translate('profile.username')}
                </Text>
                <TextInput
                  editable={false}
                  style={styles.inputStyle}
                  value={this.state.user.username}
                  placeholder={this.state.user.username}
                  onChangeText={text => this.setState({'user.username': text})}
                />
              </View>
            </ScrollView>
          </View>
        </Content>

        <Footer style={{}}>
          <Button
            full
            success
            disabled={!this.state.edited}
            style={{
              height: '100%',
              width: '100%',
            }}
            backgroundColor={colors.primary}
            onPress={this.saveChanges}>
            <Text
              style={[
                basicStyles.rubicMedium,
                {justifyContent: 'center', color: 'white', fontSize: 15},
              ]}>
              {translate('profile.saveChanges')}
            </Text>
          </Button>
        </Footer>
      </View>
    );
  }
}
