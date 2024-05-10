import React, { useState, useEffect, useCallback } from 'react';
import { router } from 'expo-router';
import {
    View,
    Text,
    FlatList,
    StatusBar,
    StyleSheet,
    ScrollView,
    SafeAreaView, Pressable,
} from 'react-native';

// stylesheet import
import OrderStyle from './styelsheets/Stylesheet';

// local components import
import HandleOrder from './components/handleorder/HandleOrder'

const Order = ({order, who}) => {
    
    // useStates
    const [statusColor, setStatesColor] = useState('black');
    const [view, setView] = useState(false);
    
    useEffect(() => {
        switch (order.status) {
            case 'Delivering':
                setStatesColor('red');
                break;
            case 'Awaiting Processing':
                setStatesColor('blue');
                break;
            case 'Delivered':
                setStatesColor('green');
                break;
        }
    }, [])
    
    return (
        <>
            <Pressable style={OrderStyle.order} onPress={() => setView(!view)} >
                <View style={[OrderStyle.infoContainer, OrderStyle.line]} >
                    <View style={OrderStyle.info} >
                        <Text>#{order.id}</Text>
                        <Text style={{marginHorizontal: 10}} >{order.date}</Text>
                        <Text>{order.time}</Text>
                    </View>
                    <Text style={OrderStyle.bill} >{order.bill} EGP</Text>
                </View>
                <View style={[OrderStyle.statusContainer, OrderStyle.line]} >
                    <Text>{order.paymentStats}</Text>
                    <Text style={{marginHorizontal: 5, color: statusColor}} >{order.status}</Text>
                </View>
                <View styel={[OrderStyle.addressContainer, OrderStyle.line]} >
                    <Text>{order.address.bullding + ' ' + order.address.street + ', ' + order.address.governorate + ', Floor' + order.address.floor + ' | Apartment' + order.address.apartment}</Text>
                </View>
                <View style={[OrderStyle.line]}>
                    <Text>{order.phoneNumber}</Text>
                </View>
                <View style={[OrderStyle.lastLine, OrderStyle.line]} >
                    <Text>{order.quantity} item</Text>
                    {order.status === 'Delivered' && order.paymentStats === 'Paid' ? (
                            <Text style={OrderStyle.delivered}>Done</Text>
                        ) : (
                            <></>
                        )}
                </View>
                {view ? (
                    <View>
                        <Text style={OrderStyle.h}>Items:</Text>
                        <FlatList
                            data={order.items}
                            renderItem={({item}) =>
                                <View style={OrderStyle.item}>
                                    <Text>{item.title}</Text>
                                    <Text>{item.quantity}</Text>
                                </View>
                            }
                        />
                    </View>
                ) : (
                    <></>
                )}
            </Pressable>
            
            {view ? (
                    <HandleOrder order={order} who={who}></HandleOrder>
                ) : (
                <></>
            )}
        </>
    )
}

export default Order;