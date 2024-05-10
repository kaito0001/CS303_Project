import { StyleSheet } from 'react-native';

const ForgotPassStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafcfb',
    },
    resetContainer: {
        padding: '6%',
    },
    txt: {
        color: '#001b46',
        fontSize: 20,
        fontWeight: '700',
    },
    inputContainer: {
        marginTop: 50,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#99a4b4',
    },
    textInput: {
        width: '60%',
        height: '100%',
        marginTop: 2,
        borderRadius: 10,
        color: '#001b46',
        fontSize: 14,
        fontWeight: '700',
        fontFamily: 'sans-serif'
    },
    webTextInput: {
        width: '100%',
        outlineStyle: 'none',
        boxShadow: 'none',
    },
    txt1: {
        textAlign: 'center',
        marginBottom: 30,
    },
    emailAlert: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    }
})

export default ForgotPassStyle;