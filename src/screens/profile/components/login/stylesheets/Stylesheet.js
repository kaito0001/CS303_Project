import { StyleSheet } from 'react-native';

const LoginStyle = StyleSheet.create({
    container: {
        paddingHorizontal: '6%',
        paddingVertical: 30,
    },
    txt1: {
        marginBottom: 20,
        color: '#001b46',
        fontSize: 25,
        fontWeight: '700',
    },
    txt2: {
        color: '#001b46',
        fontSize: 11,
    },
    googleLogin: {
        paddingVertical: 40,
    },
    googleButton: {
        flexDirection: 'row',
        padding: 10,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#006cb7',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    buttonTxT: {
        color: '#001b46',
        fontSize: 16,
        fontWeight: '700',
        fontFamily: 'sans-serif'
    },
    break: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
    line: {
        width: '40%',
        height: 1,
        borderBottomColor: '#000',
        borderBottomWidth: 2,
    },
})

export default LoginStyle;