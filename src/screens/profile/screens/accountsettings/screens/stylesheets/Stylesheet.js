import { StyleSheet } from 'react-native';

const EditStyle = StyleSheet.create({
    choice: {
        paddingHorizontal: '6%',
    },
    h: {
        paddingHorizontal: '6%',
        paddingTop: 20,
        fontSize: 16,
        fontWeight: '700',
    },
    info: {
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    txt: {
        marginHorizontal: 6,
        color: '#687887',
    },
    line: {
        flexDirection: 'row',
        width: '100%',
        height: 1,
        borderBottomColor: '#d8e9f3',
        borderBottomWidth: 5,
    },
    inputContainer: {
        padding: 18,
        marginHorizontal: '6%',
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
        marginLeft: 10,
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
})

export default EditStyle;