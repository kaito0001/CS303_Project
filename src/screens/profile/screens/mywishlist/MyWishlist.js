import React, { useState, useEffect } from 'react';
import { router } from 'expo-router';
import {
    View,
    Text,
    StatusBar
} from 'react-native';

// global components import
import Header from '../../../../components/header/Header';
import Buttton from '../../../../components/buttton/Buttton';

// auth import from firebase
import { auth } from "../../../../firebase/config";

const MyWishlist = () => {
    
    // get current user
    let uid;
    if ( auth.currentUser ) {
        uid = auth.currentUser.uid;
    }
    
    // useStates
    const [wishlist, setWishlist] = useState([]);
    
    
    if (wishlist.length === 0) {
        return (
            <View>
                <Header title={'WISHLIST' + ' ' + `(${wishlist.length})`} onBackPress={() => router.replace(`profile`)}></Header>
                
                <View style={{padding: '6%', alignItems: 'center'}}>
                    <Text>
                        You haven't saved any products to your wishlist yet,
                    </Text>
                    <Text>
                        browser products now and get them saved in your profile
                    </Text>
                </View>
                
                <View style={{paddingHorizontal: '6%'}}>
                    <Buttton title={'Browser Products'} main={true}></Buttton>
                </View>

                <StatusBar backgroundColor="#001b46"/>
            </View>
        )
    }
}

export default MyWishlist;