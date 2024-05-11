import { StyleSheet } from "react-native";
const homeStyle = StyleSheet.create({
    header: {
        backgroundColor: '#001b46',
        paddingVertical: 20,
        borderBottomStartRadius: 15,
        borderBottomEndRadius: 15,
        alignItems: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'sans-serif'
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
    box: {
        flexDirection: 'row',
        backgroundColor: 'white',
        width: '90%',
        borderRadius: 5
        
    },
    logo: {
        width: 120,
        height: 40,
        marginBottom : 10
    },
        list: {
            // flexDirection: 'row',
            padding: 35, 
            margin : 10,
            backgroundColor: '#fafcfb',
            borderRadius: 10,
            borderWidth: 1,
            borderColor : '#a5a8c0'
    
    },
    txt: {
        color: '#3d3d3d',
        fontSize : 10
    },
    title: {
        marginTop: 20,
        fontSize: 25,
        fontWeight: 'bold',
        color:'#325fc8'
    }
})
export default homeStyle;