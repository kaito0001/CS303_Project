import { StyleSheet } from 'react-native';

const MainAddress = StyleSheet.create({
    inputContainer: {
        marginHorizontal: '6%',
        // padding: 18,
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#99a4b4',
    },
    textInput: {
        borderRadius: 10,
        marginVertical: 18,
        paddingHorizontal: 18,
        width: "100%",
        height: "100%",
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