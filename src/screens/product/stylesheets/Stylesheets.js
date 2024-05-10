import { StyleSheet } from 'react-native';
const ProductStyle = StyleSheet.create({
    Container: {
        flex:1,
        backgroundColor: '#fafcfb'
    },
    box:{
        flex:1,
        margin:10,
        backgroundColor: '#f8f8fa'
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
        marginRight:10,
        fontSize: 15,
        color: '#0a4eee',
        fontWeight: 'bold',
    },
    discount_price:{
       textDecorationLine:'line-through',
        color:'#a2a3b8'
    },
    button:{
      marginTop:10
    }
})

export default ProductStyle;