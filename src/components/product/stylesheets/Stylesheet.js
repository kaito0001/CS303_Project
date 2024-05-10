import { StyleSheet } from 'react-native';
const ProductStyle = StyleSheet.create({
    Container: {
        flex:1,
        backgroundColor:'#ffffff',
        margin:10,
        borderRadius:50,
        
    },
    image: {
        alignSelf:'center',
        marginBottom:50,
        marginTop:10,
        width: 100,
        height: 100
        
    },
      title: {
        fontSize:15,
        marginTop: 5,
    },
      price: {
        marginTop: 10,
        fontSize: 15,
        color: '#0a4eee',
        fontWeight: 'bold',
    },
    discount_price:{
       textDecorationLine:'line-through',
        color:'#a2a3b8'
    },
    box:{
        margin:"10%",
    },
    like:{
        width:'21%',
        padding:10,
        paddingTop:15,
        marginLeft:'70%',
        // margin:10,
        borderCurve:10,
        backgroundColor:'#f0f4fe',
    },
})

export default ProductStyle;