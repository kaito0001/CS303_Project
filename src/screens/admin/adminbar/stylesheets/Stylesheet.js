import { StyleSheet } from 'react-native';

const AdminBarStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa'
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
        borderTopColor: '#d8e9f3',
        borderTopWidth: 1,
    },
})

export default AdminBarStyle;