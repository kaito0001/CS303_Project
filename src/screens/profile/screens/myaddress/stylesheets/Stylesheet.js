import { StyleSheet } from 'react-native';

const MainAddress = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputContainer: {
        marginHorizontal: '6%',
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#99a4b4',
    },
    textInput: {
        width: '100%',
        height: '100%',
        paddingVertical: 18,
        marginHorizontal: 18,
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
    checkBox: {
        marginRight: 10,
        width: 20,
        height: 20,
        borderWidth: 3,
        borderRadius: 3,
        borderColor: '#0041cf',
    }
})

export default MainAddress;