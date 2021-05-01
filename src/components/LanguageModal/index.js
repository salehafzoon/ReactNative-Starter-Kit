import React, {Component} from 'react';
import {View, FlatList, ScrollView, TouchableOpacity} from 'react-native';

import colors from '../../res/colors';
import basicStyles from '../../res/styles';

import {List, Button, Card} from 'native-base';

import Modal from 'react-native-modal';
import {translate, changeLanguage} from '../../utils/localize';
import styles from './style';

import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import {Text, Title} from 'react-native-paper';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {EventRegister} from 'react-native-event-listeners';
export default class LanguageModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {label: 'English', value: 'en'},
        {label: 'Persian', value: 'pr'},
      ],
      selected: 0,
    };
  }
  render() {
    return (
      <Modal
        isVisible={this.props.isOpen}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        animationInTiming={1000}
        animationOutTiming={1000}
        style={{margin: '10%'}}>
        <Card
          style={{
            marginVertical: '2%',
            borderRadius: 15,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: '6%',
              paddingVertical: '4%',
              borderBottomWidth: 2,
              borderBottomColor: colors.grayLight,
            }}>
            <Title>{translate('languageModal.selectLanguage')}</Title>
            <TouchableOpacity
              style={[
                {
                  padding: '2%',
                  backgroundColor: colors.primary,
                  borderRadius: 10,
                },
              ]}
              onPress={() => EventRegister.emit('languageModal', false)}>
              <AntDesign
                style={{}}
                color={colors.white}
                name="close"
                size={20}
              />
            </TouchableOpacity>
          </View>

          <ScrollView style={{margin: 0}}>
            <RadioForm>
              {this.state.data.map((obj, i) => (
                <View style={{margin: '2%'}}>
                  <RadioButton key={i}>
                    <RadioButtonInput
                      obj={obj}
                      index={i}
                      isSelected={this.state.selected === i}
                      borderWidth={2}
                      buttonInnerColor={colors.primary}
                      buttonOuterColor={colors.primary}
                      onPress={async value => {
                        this.setState({selected: i});
                        await changeLanguage(value);
                      }}
                      buttonSize={10}
                      buttonOuterSize={20}
                      buttonStyle={{}}
                      buttonWrapStyle={{marginLeft: '5%'}}
                    />
                    <RadioButtonLabel
                      obj={obj}
                      index={i}
                      onPress={async value => {
                        this.setState({selected: i});
                        await changeLanguage(value);
                      }}
                      labelHorizontal={true}
                      labelStyle={[
                        basicStyles.rubicMedium,
                        {color: colors.myGray, fontSize: 13, padding: '2%'},
                      ]}
                    />
                  </RadioButton>
                </View>
              ))}
            </RadioForm>
          </ScrollView>
        </Card>
      </Modal>
    );
  }
}
