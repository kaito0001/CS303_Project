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
        Button2: {
        padding: 18,
        borderRadius: 20,
        alignItems: 'center',
            width: '80%',
            borderWidth: 1,
            borderColor: '#3c43a2',
            marginTop : 20
        
        
    },
        ButtonTxT2: {
        color: '#4a52c8',
        fontSize: 16,
        fontWeight: '700',
        fontFamily: 'sans-serif'
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