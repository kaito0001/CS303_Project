import React, { useState, useEffect } from 'react';
import { router } from 'expo-router';
import {
    View,
    Text,
    FlatList,
    StatusBar,
    ScrollView,
} from 'react-native';

// global components import
import Header from '../../../../components/header/Header';
import Buttton from '../../../../components/buttton/Buttton';
import Order from '../../../../components/order/Order';

// auth import from firebase
import { auth } from "../../../../firebase/config";
import { getOrders } from '../../../../firebase/order';

// const fakeOrdersData = [
//     {
//         id: '1',
//         date: '9/5/2024',
//         time: '10:59 PM',
//         status: 'Delivered',
//         paymentStats: 'Paid',
//         bill: '6969',
//         phoneNumber: '01145902559',
//         address: {
//             bullding: '58',
//             street: 'Ebad El Rahman',
//             area: 'Mokkatam',
//             governorate: 'Cairo',
//             floor: '9',
//             apartment: '3'
//         },
//         quantity: 69,
//         items: [
//             {
//                 title: 'sherif',
//                 quantity: 69,
//             },
//             {
//                 title: 'sherifgdn',
//                 quantity: 69,
//             },
//             {
//                 title: 'ahmed',
//                 quantity: 69,
//             },
//             {
//                 title: 'ahmedkhales',
//                 quantity: 69,
//             },
//         ]
//     },
//     {
//         id: '2',
//         date: '9/5/2024',
//         time: '11:39 PM',
//         status: 'Awaiting Processing',
//         paymentStats: 'Not Paid',
//         bill: '6969',
//         phoneNumber: '01145902559',
//         address: {
//             bullding: '58',
//             street: 'Ebad El Rahman',
//             area: 'Mokkatam',
//             governorate: 'Cairo',
//             floor: '9',
//             apartment: '3'
//         },
//         quantity: 69
//     },
//     {
//         id: '3',
//         date: '10/5/2024',
//         time: '10:44 PM',
//         status: 'Delivering',
//         paymentStats: 'Not Paid',
//         bill: '6969',
//         phoneNumber: '01145902559',
//         address: {
//             bullding: '58',
//             street: 'Ebad El Rahman',
//             area: 'Mokkatam',
//             governorate: 'Cairo',
//             floor: '9',
//             apartment: '3'
//         },
//         quantity: 69
//     },
//     {
//         id: '4',
//         date: '10/5/2024',
//         time: '02:22 PM',
//         status: 'Delivered',
//         paymentStats: 'Not Paid',
//         bill: '6969',
//         phoneNumber: '01145902559',
//         address: {
//             bullding: '58',
//             street: 'Ebad El Rahman',
//             area: 'Mokkatam',
//             governorate: 'Cairo',
//             floor: '9',
//             apartment: '3'
//         },
//         quantity: 69
//     },
// ]

const MyOrders = () => {
    
    // get current user
    let uid;
    if ( auth.currentUser ) {
        uid = auth.currentUser.uid;
    }
    
    // useStates
    const [orders, setorders] = useState([]);

    // get user orders
    useEffect(() => {
        const fetchOrders = async () => {
            const orders = await getOrders(uid);
            console.log(orders);
            setorders(orders);
        }
        fetchOrders();
    },[])
    
    
    if (orders.length === 0) {
        return (
            <View>
                <Header title={'MY ORDERS' + ' ' + `(${orders.length})`} onBackPress={() => router.replace(`profile`)}></Header>
                
                <View style={{padding: '6%', alignItems: 'center'}}>
                    <Text>
                        You haven't ordered any products from Raya yet,
                    </Text>
                    <Text>
                        browser products now, enjoy a quick & easy checkout
                    </Text>
                    <Text>
                        and get your orders saved in your profile
                    </Text>
                </View>
                
                <View style={{paddingHorizontal: '6%'}}>
                    <Buttton title={'Browser Products'} main={true}></Buttton>
                </View>

                <StatusBar backgroundColor="#001b46"/>
            </View>
        )
    }  else {
        return (
            <View style={{flex: 1, backgroundColor: '#fafcfb'}} >

                <Header title={'MY ORDERS' + ' ' + `(${orders.length})`} onBackPress={() => router.replace(`profile`)}></Header>

                <ScrollView>
                    <FlatList
                        data={orders}
                        renderItem={({item}) =>
                            <Order order={item} who={'user'}/>
                        }
                    />
                </ScrollView>

                <StatusBar backgroundColor="#001b46"/>
            </View>
        )
    }
}

export default MyOrders;