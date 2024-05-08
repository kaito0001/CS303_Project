import React, { useState, useEffect } from 'react';
import { router } from 'expo-router';
import {
    View,
    Text,
} from 'react-native';

// global components import
import Header from '../../../../components/header/Header';
import Buttton from '../../../../components/buttton/Buttton';

// auth import from firebase
import { auth } from "../../../../firebase/config";

const MyOrders = () => {
    
    // get current user
    let uid;
    if ( auth.currentUser ) {
        uid = auth.currentUser.uid;
    }
    
    // useStates
    const [orders, setorders] = useState([]);
    
    
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
            </View>
        )
    }
}

export default MyOrders;