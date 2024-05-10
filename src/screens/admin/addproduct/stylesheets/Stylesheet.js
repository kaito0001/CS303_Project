import { StyleSheet } from 'react-native';

const AddProductStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafcfb',
    },
    Container: {
        marginVertical: 20,
        backgroundColor: '#fff',
    },
    h: {
        fontSize: 16,
        fontWeight: '700',
    },
    inputContainer: {
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#99a4b4',
    },
    textInput: {
        width: '100%',
        padding: 12,
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
    
    switch: {
        paddingHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})

export default AddProductStyle;