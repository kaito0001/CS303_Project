import { StyleSheet } from 'react-native';

const AdminStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa'
    },
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
        marginHorizontal: 6,
        color: '#687887',
    },
    line: {
        flexDirection: 'row',
        width: '100%',
        height: 1,
        borderBottomColor: '#d8e9f3',
        borderBottomWidth: 5,
    },
    delete: {
        paddingVertical: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    deleteTxt: {
        marginLeft: 18,
        color: 'red'
    },
    toolBar: {
        width: '100%',
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0,
        paddingHorizontal: '5%',
        paddingVertical: 15,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
})

export default AdminStyle;