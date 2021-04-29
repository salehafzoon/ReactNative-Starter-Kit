import { StyleSheet } from "react-native";
import colors from "../../res/colors";

export default StyleSheet.create({

    input: {
        flexDirection: 'row',
        alignItems: 'baseline',
        backgroundColor: colors.inputGray,
        marginVertical: '3%',
        borderRadius: 25,
        shadowOffset: { width: 5, height: 5 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 2,
    },
})