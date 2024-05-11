
import { StyleSheet } from 'react-native';
const ProductsStyle = StyleSheet.create({
    Container: {
        flex:1,
        backgroundColor: '#fafcfb'
    },
    list:{
        flex:1,
        backgroundColor: '#f8f8fa'
    },
    header: {
        backgroundColor: '#001b46',
        paddingVertical: 20,
        borderBottomStartRadius: 15,
        borderBottomEndRadius: 15,
        flexDirection:'row',
        alignItems: 'center',
    },
    box: {
        flexDirection: 'row',
        backgroundColor: 'white',
        width: '90%',
        borderRadius: 5,
        
        
    },
    
})

export default ProductsStyle;