import { StyleSheet } from 'react-native';

const AddressStyle = StyleSheet.create({
    container: {
        marginHorizontal: '6%',
        marginVertical: 10,
        padding: 15,
        borderWidth: 2,
        borderColor: '#d8e9f3',
        borderRadius: 30,
    },
    title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    default: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#e5edfa',
        borderRadius: 10,
    },
    addressName: {
        fontSize: 16,
        fontWeight: '700',
    },
    line: {
        paddingVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    info: {
        marginHorizontal: 8,
        color: '#687887',
    },
    buttons: {
        paddingTop: 30,
        paddingHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})

export default AddressStyle;