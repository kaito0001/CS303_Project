import { StyleSheet } from "react-native"
const productStyle = StyleSheet.create({
    container: {
        
        flexDirection: 'row',
        justifyContent : 'space-between',
        backgroundColor :'#fafcfb',
        paddingBottom: 30,
        marginBottom: 5,
        // borderWidth: 1,
        borderRadius : 5,
        borderBottomWidth : 1,
        borderColor:'#cedcfb'
   
    },
    img: {
        height: 60,
        width: 60,
        borderRadius : 5
        
    },

    price: {
        color: '#1c6fff',
        fontWeight: "bold",
        fontSize : 15,
        marginRight : 5
        
    },
    oldPrice: {
        color: 'gray',
        fontSize: 8,
        textDecorationLine: 'line-through',
        
        
        
    },
    qty: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', width: "60%",
        marginLeft: 20,
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#abb8c1',
        // width : '50%'
    },
    op: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    like: {
        borderRadius: 15,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingTop: 10,

    },
    delete: {
        borderRadius: 15,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingTop: 10,
    }

})
export default productStyle;