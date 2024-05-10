import { StyleSheet } from "react-native";
const filledStyles = StyleSheet.create({
    container: {
        flex: 1,

    },
    list: {
        flex: 1,
        padding: '5%',
        marginTop: 10,
        backgroundColor: 'white'

    },
    pay: {
        flex: 1,
        justifyContent: 'center',
        alignItems : 'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: '#f0f4fe',
        height : '50%'
        
    },
    Button: {
        padding: 18,
        borderRadius: 20,
        backgroundColor: '#868878',
        alignItems: 'center',
        width: '80%',
        
    },
        Button2: {
        padding: 18,
        borderRadius: 20,
        alignItems: 'center',
            width: '80%',
            borderWidth: 1,
            borderColor :'#3c43a2' 
        
        
    },
        ButtonTxT: {
        color: 'white',
        fontSize: 16,
        fontWeight: '700',
        fontFamily: 'sans-serif'
    },
        ButtonTxT2: {
        color: '#4a52c8',
        fontSize: 16,
        fontWeight: '700',
        fontFamily: 'sans-serif'
    },
    img: {
        width: 100,
        height: 60,
        padding: 10,
        margin : 10
    },
        img2: {
        width: 120,
        height: 40,
        padding: 10,
        margin : 10
    }
})
export default filledStyles;