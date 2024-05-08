import { StyleSheet } from 'react-native';

const AccountStyle = StyleSheet.create({
    container: {
        paddingVertical: 30,
    },
    user: {
        marginHorizontal: '6%',
        backgroundColor: '#f2f7fb',
        padding: 30,
        borderRadius: 20,
    },
    choice: {
        paddingHorizontal: '6%',
    },
    logout: {
        paddingVertical: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    logoutTxt: {
        marginLeft: 18,
        color: 'red'
    }
})

export default AccountStyle;