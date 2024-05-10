import { StyleSheet } from 'react-native';

const OrderStyle = StyleSheet.create({
    line: {
        marginVertical: 5,
    },
    order: {
        marginHorizontal: '6%',
        marginVertical: 10,
        padding: 15,
        borderWidth: 2,
        borderColor: '#d8e9f3',
        borderRadius: 30,
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    info: {
        flexDirection: 'row',
    },
    bill: {
        
    },
    statusContainer: {
        flexDirection: 'row',
    },
    addressContainer: {
        
    },
    lastLine: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    delivered: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#e5edfa',
        borderRadius: 10,
    },
    h: {
        fontSize: 16,
        fontWeight: '700',
    },
    item: {
        paddingRight: 20,
        paddingVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})

export default OrderStyle;