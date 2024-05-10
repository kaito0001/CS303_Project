import { StyleSheet } from 'react-native';
const ProductStyle = StyleSheet.create({
    Container: {
        flex:1,
        backgroundColor: '#fafcfb'
    },
    header: {
        backgroundColor: '#001b46',
        paddingVertical: 10,
        borderBottomStartRadius: 15,
        borderBottomEndRadius: 15,
        alignItems: 'center',
        flexDirection:'row'
    },
    like:{
        marginLeft:'70%',
    },
    back:{
        marginLeft:'10%'
    },
    box:{
        flex:1,
        margin:15,
        backgroundColor: '#f8f8fa'
    },
    listImage:{
        alignItems:'center'
    },
    image: {
        marginTop:10,
        width: 100,
        height: 100,
        marginBottom:50,
        
    },
    title: {
        fontSize:15,
        marginTop: 5,
        fontWeight:'bold'
    },
      price: {
        marginRight:20,
        fontSize: 16,
        color: '#0a4eee',
        fontWeight: 'bold',
    },
    discount_price:{
       textDecorationLine:'line-through',
        color:'#a2a3b8',
        fontSize: 13,
    },
    priceField:{
        flexDirection:'row' , 
        alignItems:'center',
        marginVertical:15
    },
    button:{
    //   marginTop:10
    },
    descriptionField:{
        margin:15,
        marginTop:'20%',
        padding:10,
        borderBottomWidth:1,
        borderBottomColor:'#d9e9f4'

    },
    textDescription:{
        fontSize:20,
        fontWeight:'bold',
        color:'#00155f'
    },
    descriptionBox:{
        margin:10,
        
    },
    description:{
        color:'#00155f'
    },
    
    list:{
        flex:1,
        backgroundColor: '#f8f8fa'
    },

})

export default ProductStyle;