import { StyleSheet } from 'react-native';

const categoryStyle = StyleSheet.create({
    inputContainer: {
        flex: 1,
        backgroundColor: '#f5f7fa',

    },
    header: {
        backgroundColor: '#001b46',
        paddingVertical: 20,
        borderBottomStartRadius: 15,
        borderBottomEndRadius: 15,
        alignItems: 'center',
    },
    box: {
        flexDirection: 'row',
        backgroundColor: 'white',
        width: '90%', borderRadius: 5
        
    },
    input: {
        flex: 1,
        height: 40,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        marginRight: 10,
        padding: 10,

    },
    list: {
        flex: 1,
        padding: '5%', 
    
    }
})

export default categoryStyle;