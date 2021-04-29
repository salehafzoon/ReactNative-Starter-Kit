import React, {Component} from 'react';
import {Text} from 'react-native';
import {Spinner, Card} from 'native-base';

import colors from '../../res/colors';
import styles from '../../res/styles';
import Modal from 'react-native-modal';
import {translate} from '../../utils/localize';

export default class LoadingModal extends Component {
  render() {
    return (
      <Modal
        isVisible={this.props.isLoading}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        animationInTiming={0}
        animationOutTiming={0}
        style={{margin: 60}}>
        <Card
          style={{marginVertical: '2%', marginHorizontal: '5%', padding: 5}}>
          <Spinner color={colors.primary} />
          <Text style={[styles.grayText, {fontSize: 15, marginBottom: '4%'}]}>
            {translate('loading.please_waite')}
          </Text>
        </Card>
      </Modal>
    );
  }
}
