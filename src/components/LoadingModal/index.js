import React, { Component } from 'react'
import { Text} from 'react-native'
import {
    Spinner,Card
} from 'native-base';

import strings from '../../res/strings'
import colors from '../../res/colors';
import styles from '../../res/styles';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Modal from "react-native-modal";
import { translate } from '../../utils/localize';

export default class LoadingModal extends Component {
    render() {
        return (
            <Modal isVisible={this.props.isLoading}
                animationIn="slideInUp"
                animationOut="slideOutDown"
                animationInTiming={0}
                animationOutTiming={0}
                style={{margin:60}}
            >
                <Card style={{ marginVertical: 5, marginHorizontal: 10, padding: 5 }}>
                    <Spinner color={colors.primary}/>
                    <Text style={[styles.grayText,{fontSize:15}]}>{translate("please_waite")}</Text>
                </Card>

            </Modal>
        )
    }
}
