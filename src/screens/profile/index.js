import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {Text, Card} from 'react-native-paper';
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
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

import basicStyles from '../../res/styles';
import styles from './styles';
import TakePhotoSheet from '../../components/TakePhotoSheet';
import {useTheme} from '@react-navigation/native';

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
        imageSrc: null,
      },
      imageSrc: null,
      newPassword: '',
      confirmPassword: '',
      edited: false,
      avatar: null,
    };
    this.pickImageListener = EventRegister.addEventListener(
      'pickImage',
      source => {
        console.warn(source);
        this.setState({imageSrc: source});
        this.sheetRef.current.snapTo(1);
      },
    );
    this.sheetRef = React.createRef();
    this.fall = new Animated.Value(1);

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
    let This = this;
    return (
      <View style={{flex: 1, height: '100%'}}>
        <Header
          androidStatusBarColor={colors.primary}
          iosBarStyle={colors.primary}
          style={{display: 'none'}}
        />
        <View style={{flex: 1, height: '100%'}}>
          <View
            style={{
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
            }}>
            <Button
              transparent
              style={{
                marginHorizontal: '5%',
                marginTop: '5%',
                marginBottom: '2%',
                backgroundColor: colors.primary,
                paddingHorizontal: '2%',
                borderRadius: 10,
              }}
              onPress={() => this.props.navigation.goBack(null)}>
              <Ionicons
                name="ios-arrow-back-circle-outline"
                size={30}
                color={colors.white}
              />
            </Button>

            <View style={{flex: 1}}>
              <Text
                style={[
                  basicStyles.backgroudnText,
                  {
                    marginTop: '2%',
                    marginHorizontal: '5%',
                    marginBottom: '1%',
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
                  source={
                    This.state.imageSrc == null
                      ? images.foxy3
                      : {
                          uri: This.state.imageSrc,
                        }
                  }
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
                  alignSelf: 'center',
                  alignItems: 'center',
                  marginTop: '-14%',
                  marginLeft: '18%',
                },
              ]}>
              <TouchableOpacity
                onPress={() => {
                  // Toast.show({text: 'hi'});
                  This.sheetRef.current.snapTo(0);
                }}>
                <EvilIcons
                  name="camera"
                  size={22}
                  color="white"
                  style={{
                    borderRadius: 30,
                    paddingVertical: '1.4%',
                    padding: '1%',
                    backgroundColor: colors.primary,
                  }}
                />
              </TouchableOpacity>
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
                  placeholder={translate('profile.firstName')}
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
                  placeholder={translate('profile.username')}
                  onChangeText={text => this.setState({'user.username': text})}
                />
              </View>
            </ScrollView>
          </View>

          <Card
            style={{
              width: '100%',
              height: '8%',
              position: 'absolute',
              bottom: '3%',
              alignSelf: 'center',
              borderRadius: 13,
              marginHorizontal: '16%',
              zIndex: -2,
              // backgroundColor: colors.somkeWhite,
            }}>
            <Button
              full
              transparent
              style={{justifyContent: 'center'}}
              disabled={!this.state.edited}
              onPress={this.saveChanges}>
              <Text
                style={[
                  basicStyles.rubicMedium,
                  {
                    justifyContent: 'center',
                    color:
                      This.state.edited == true ? colors.primary : colors.gray,
                    fontSize: 15,
                  },
                ]}>
                {translate('profile.saveChanges')}
              </Text>
            </Button>
          </Card>
        </View>

        <BottomSheet
          style={{
            position: 'absolute',
            bottom: 0,
            zIndex: 10,
          }}
          ref={This.sheetRef}
          snapPoints={[330, 0]}
          initialSnap={1}
          borderRadius={10}
          callbackNode={This.fall}
          enabledGestureInteraction={true}
          renderContent={() => <TakePhotoSheet />}
        />
      </View>
    );
  }
}
