import React, { useState, useEffect, useCallback } from 'react';
import { router } from 'expo-router';
import {
    View,
    Text,
    FlatList,
    Pressable,
    StatusBar,
    StyleSheet,
    ScrollView,
    SafeAreaView,
} from 'react-native';

// stylesheet import
import HandleOrderStyle from './stylesheets/Styelsheet';

const HandleOrder = ({order, who}) => {
    
    // useState
    const [status, setStatus] = useState('');
    const [paymentStats, setPaymentStats] = useState('');
    
    // functions
    const updateStatus = (status) => {
        // .........
    }
    
    const updatePaymentStatus = (paymentStatus) => {
        // .........
    }
    
    const deleteOrder = () => {
        // .........
    }
    
    useEffect(() => {
        if (order && order.status && order.paymentStats) {
            setStatus(order.status);
            setPaymentStats(order.paymentStats)
        }
    }, [order]);
    
    
    if (who === 'admin') {
        return (
            <View style={HandleOrderStyle.container} >
                {status === 'Awaiting Processing' ? (
                    <Pressable style={HandleOrderStyle.button} onPress={updateStatus('Delivering')} >
                        <Text style={HandleOrderStyle.buttonTxT}>Delivering</Text>
                    </Pressable>
                ) : (
                    <></>
                )}
                {paymentStats !== 'Paid' && status === 'Delivered' ? (
                    <Pressable style={HandleOrderStyle.button} onPress={updatePaymentStatus('Paid')}>
                        <Text style={HandleOrderStyle.buttonTxT}>Paid</Text>
                    </Pressable>
                ) : (
                    <></>
                )}
                {status === 'Awaiting Processing' ? (
                    <Pressable style={[HandleOrderStyle.button, {backgroundColor: 'red'}]} onPress={deleteOrder}>
                        <Text style={HandleOrderStyle.buttonTxT}>Cancle</Text>
                    </Pressable>
                ) : (
                    <></>
                )}
                {status !== 'Delivered' ? (
                    <></>
                ) : (
                    <Pressable style={[HandleOrderStyle.button, {backgroundColor: 'red'}]} onPress={deleteOrder}>
                        <Text style={HandleOrderStyle.buttonTxT}>Delete</Text>
                    </Pressable>
                )}
            </View>
        )
    } else {
        return (
            <View style={HandleOrderStyle.container} >
                {status === 'Delivering' ? (
                    <Pressable style={HandleOrderStyle.button} onPress={updateStatus('Delivered')} >
                        <Text style={HandleOrderStyle.buttonTxT}>Received</Text>
                    </Pressable>
                ) : (
                    <></>
                )}
                {status === 'Awaiting Processing' ? (
                    <Pressable style={[HandleOrderStyle.button, {backgroundColor: 'red'}]} onPress={deleteOrder} >
                        <Text style={HandleOrderStyle.buttonTxT}>Cancle</Text>
                    </Pressable>
                ) : (
                    <></>
                )}
                
            </View>
        )
    }
}

export default HandleOrder;