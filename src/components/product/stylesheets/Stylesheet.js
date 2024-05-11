import { StyleSheet } from 'react-native';
const ProductStyle = StyleSheet.create({
    Container: {
        // flex:1,
        backgroundColor:'#ffffff',
        margin:10,
        borderRadius: 50,
        borderWidth: 1,
        borderColor :'#0f86cf',
        width : 200
        
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
        margin:10,
    },
    like:{
        width:50,
        padding:10,
        paddingTop:15,
        marginLeft:100,
        // margin:10,
        borderCurve:10,
        backgroundColor:'#f0f4fe',
    },
})

export default ProductStyle;