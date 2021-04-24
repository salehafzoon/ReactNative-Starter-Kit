import { StyleSheet } from 'react-native';
import colors from '../../res/colors';

const styles = StyleSheet.create({
    primaryBtn: {
        color: 'white',
        backgroundColor: colors.primary,
        alignContent: 'center',
        alignItems: 'center',
    },
    bigwhiteText: {
        color: colors.white,
        fontFamily: 'IRANSans',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default styles;
