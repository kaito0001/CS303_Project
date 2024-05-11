import { StyleSheet } from 'react-native';

const AccountStyle = StyleSheet.create({
    container: {
        paddingVertical: 30,
    },
    user: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: '6%',
        backgroundColor: '#f2f7fb',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 20,
    },
    image: {
        width: 60,
        height: 60,
        borderWidth: 1,
        borderRadius: 60,
        borderColor: '#f2f7fb'
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