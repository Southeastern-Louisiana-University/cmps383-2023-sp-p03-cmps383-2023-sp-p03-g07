import { StyleSheet } from "react-native";
import Colors from "./styles";

const STYLES = StyleSheet.create({
    inputContainer: {flexDirection: 'row', marginTop: 20},
    inputIcon: {
        marginTop: 0,
        position: 'absolute',
    },
    input: {
        color: Colors.tertiary,
        paddingLeft: 30,
        borderBottomWidth: 0.5,
        flex: 1,
        fontSize: 18,

    },
    btnPrimary: {
        backgroundColor: Colors.secondary,
        height: 50,
        marginTop: 70,
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 5,
    },
    line2: {
        height: 1,
        width: 30,
        backgroundColor: Colors.light,
    },
    btnSecondary: {
        height: 50,
        borderWidth: 1,
        borderColor: Colors.light,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        flexDirection: 'row',
    },
    btnImage: {
        width: 20,
        height: 20,
        marginLeft: 5,
    },
    btnImage2: {
        width: 40,
        height: 40,
        marginLeft: 5,
    },

});

export default STYLES;