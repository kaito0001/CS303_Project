import React, { useState, useEffect, useCallback } from 'react';
import { router } from 'expo-router';
import {
    View,
    Text,
    FlatList,
    StatusBar,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    Pressable,
} from 'react-native';

// stylesheet import
import OrdersStyle from './stylesheets/Stylesheet';

// global components import
import Header from '../../../components/header/Header';

// local components import
import Order from '../../../components/order/Order';

const fakeOrdersData = [
    {
        id: '1',
        date: '9/5/2024',
        time: '10:59 PM',
        status: 'Delivered',
        paymentStats: 'Paid',
        bill: '6969',
        phoneNumber: '01145902559',
        address: {
            bullding: '58',
            street: 'Ebad El Rahman',
            area: 'Mokkatam',
            governorate: 'Cairo',
            floor: '9',
            apartment: '3'
        },
        quantity: 69,
        items: [
            {
                title: 'dsflkdsfkljds',
                quantity: 69,
            },
        ]
    },
    {
        id: '2',
        date: '9/5/2024',
        time: '11:39 PM',
        status: 'Awaiting Processing',
        paymentStats: 'Not Paid',
        bill: '6969',
        phoneNumber: '01145902559',
        address: {
            bullding: '58',
            street: 'Ebad El Rahman',
            area: 'Mokkatam',
            governorate: 'Cairo',
            floor: '9',
            apartment: '3'
        },
        quantity: 69
    },
    {
        id: '3',
        date: '10/5/2024',
        time: '10:44 PM',
        status: 'Delivering',
        paymentStats: 'Not Paid',
        bill: '6969',
        phoneNumber: '01145902559',
        address: {
            bullding: '58',
            street: 'Ebad El Rahman',
            area: 'Mokkatam',
            governorate: 'Cairo',
            floor: '9',
            apartment: '3'
        },
        quantity: 69
    },
    {
        id: '4',
        date: '10/5/2024',
        time: '02:22 PM',
        status: 'Delivered',
        paymentStats: 'Not Paid',
        bill: '6969',
        phoneNumber: '01145902559',
        address: {
            bullding: '58',
            street: 'Ebad El Rahman',
            area: 'Mokkatam',
            governorate: 'Cairo',
            floor: '9',
            apartment: '3'
        },
        quantity: 69
    },
]

const Orders = () => {
    
    // useStates
    const [orders, setOrders] = useState(fakeOrdersData);
    
    
    return (
        <View style={OrdersStyle.container} >
            
            <Header title={'Orders'}></Header>
            
            <ScrollView>
                <FlatList
                    data={orders}
                    renderItem={({item}) =>
                        <Order order={item} who={'admin'}/>
                    }
                />
            </ScrollView>
            
            <StatusBar backgroundColor="#001b46"/>
        </View>
    )
}

export default Orders;