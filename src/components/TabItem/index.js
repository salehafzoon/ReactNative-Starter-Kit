import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../res/colors';

export default class TabItem extends Component {
  render() {
    let This = this;
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        //   marginTop: '2%',
        }}>
        <Ionicons
          name={this.props.icon}
          size={this.props.size}
          color={This.props.isFocused ? colors.primary : colors.grayDark}
        />
        <Text
          style={{
            color: This.props.isFocused ? colors.primary : colors.grayDark,
            fontSize: 11,
          }}>
          {this.props.name}
        </Text>
      </View>
    );
  }
}
