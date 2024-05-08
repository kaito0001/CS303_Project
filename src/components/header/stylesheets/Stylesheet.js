import { StyleSheet } from 'react-native'

const headerStyle = StyleSheet.create({
    header: {
        backgroundColor: '#001b46',
        paddingVertical: 20,
        borderBottomStartRadius: 15,
        borderBottomEndRadius: 15,
        alignItems: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '700',
        fontFamily: 'sans-serif'
    },
    headerWithBack: {
        backgroundColor: '#001b46',
        padding: 20,
        borderBottomStartRadius: 15,
        borderBottomEndRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})

export default headerStyle;