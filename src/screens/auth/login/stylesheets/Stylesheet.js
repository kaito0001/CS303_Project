import { StyleSheet } from 'react-native';

const LoginStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafcfb'
    },
    googleLogin: {
        paddingHorizontal: '6%',
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
        paddingHorizontal: '6%',
        alignItems: 'center',
    },
    line: {
        width: '44%',
        height: 1,
        borderBottomColor: '#99a4b4',
        borderBottomWidth: 1,
    },
    emailLogin: {
        paddingVertical: 30,
        paddingHorizontal: '6%'
    },
    txt1: {
        color: '#687887',
        fontSize: 12,
    },
    inputContainer: {
        paddingHorizontal: 18,
        justifyContent: 'space-between',
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#99a4b4',
    },
    textInput: {
        marginVertical: 18,
        width: 'inherit',
        height: '100%',
        paddingLeft: 20,
        borderRadius: 10,
        color: '#001b46',
        fontSize: 14,
        fontWeight: '700',
        fontFamily: 'sans-serif'
    },
    webTextInput: {
        outlineStyle: 'none',
        boxShadow: 'none',
    },
    forgotPass: {
        marginVertical: 30,
        alignSelf: 'flex-end',
        color: '#006cb7',
        fontSize: 12,
        fontWeight: '500',
    },
    txt2: {
        color: '#001b46',
        marginVertical: 30,
    },
})

export default LoginStyle;