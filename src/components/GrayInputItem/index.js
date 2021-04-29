import React, {Component} from 'react';
import {View, Input} from 'native-base';
import colors from '../../res/colors';
import styles from './styles';
import {translate} from '../../utils/localize';

export default class GrayInputItem extends Component {
  render() {
    return (
      <View style={[styles.input, {alignItems: 'baseline'}]}>
        <Input
          {...this.props}
          placeholder={translate(this.props.title)}
          style={{fontSize: 12.5, marginHorizontal: '6%'}}
          placeholderTextColor={colors.myGray}
          onChangeText={value => this.props.onChange(value)}
        />
        <View style={{alignSelf: 'center', marginHorizontal: '5%'}}>
          {this.props.icon != null && this.props.icon}
        </View>
      </View>
    );
  }
}
