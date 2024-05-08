import { StyleSheet } from 'react-native';

const AccountStyle = StyleSheet.create({
    choice: {
        paddingHorizontal: '6%',
    },
    info: {
        paddingVertical: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 2,
        borderBottomColor: '#d8e9f3',
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
    delete: {
        paddingVertical: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    deleteTxt: {
        marginLeft: 18,
        color: 'red'
    }
})

export default AccountStyle;