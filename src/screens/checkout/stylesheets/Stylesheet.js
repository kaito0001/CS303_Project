import { StyleSheet } from "react-native";
const checkOutStyle = StyleSheet.create({
    page: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    pay: {
        flexDirection: 'row',
        borderColor: '#d8e9f3',
        justifyContent: 'space-between',
        borderWidth: 2,
        borderRadius: 20,
        padding: 15,
        marginVertical: 5,
        marginHorizontal: 15,
        width : '90%'
        
    },
    img: {
        width: 25,
        height: 25,
    
    },
    text: {
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        margin :15

    },
    details: {
        flex: 1,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#d8e9f3',
        borderRadius: 20, width: '90% '
    },
    detail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '95%',
        margin: 3
    },
    total: {
        flexDirection: 'row',
        justifyContent:'space-between',
        width: '95%',
        margin: 3,
        borderTopWidth: 1,
        borderRadius: 5 
    }


})
export default checkOutStyle;