import { StyleSheet } from 'react-native';

const categoryStyle = StyleSheet.create({
    inputContainer: {
        flex: 1 ,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent: 'space-between',
        marginVertical: 20,
        backgroundColor: '#e5f0f7',
        padding: '1%',
        borderRadius: 25,
        
    },
    img: {
        width: 75,
        height: 75,
        
    },
    text: {
        fontWeight: "bold",
        fontSize: 15,
        margin: 5,
        padding : 5
        
    }
})

export default categoryStyle;