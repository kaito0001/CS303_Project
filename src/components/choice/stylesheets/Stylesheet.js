import { StyleSheet } from 'react-native';

const ChoiceStyle = StyleSheet.create({
    choice: {
        paddingHorizontal: '6%',
    },
    info: {
        paddingVertical: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 2,
        borderBottomColor: '#d8e9f3',
    },
    txt: {
        marginLeft: 18,
        color: '#001b46',
    }
})

export default ChoiceStyle;