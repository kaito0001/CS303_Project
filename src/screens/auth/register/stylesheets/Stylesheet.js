import { StyleSheet } from 'react-native';

const RegisterStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafcfb'
    },
    break: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: '6%',
        alignItems: 'center',
    },
    line: {
        width: '47%',
        height: 1,
        borderBottomColor: '#99a4b4',
        borderBottomWidth: 1,
    },
    emailRegister: {
        paddingVertical: 30,
        paddingHorizontal: '6%'
    },
    txt1: {
        marginBottom: 20,
        alignSelf: 'center',
        color: '#687887',
        fontSize: 12,
    },
    inputContainer: {
        marginTop: 30,
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
    txt2: {
        color: '#001b46',
        marginVertical: 30,
    },
    emailAlert: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        
    }
})

export default RegisterStyle;