import React, { useState, useEffect } from 'react';
import { router } from 'expo-router';
import {
    View,
    Text,
    FlatList,
} from 'react-native';

// global components import
import Header from '../../../../components/header/Header';
import Buttton from '../../../../components/buttton/Buttton';

// local components import
import Address from "./components/Address";

// auth import from firebase
import { auth } from "../../../../firebase/config";

// fake data
const testAddress = {
    name: 'Sherif Omar',
    phoneNumber: '01145902559',
    address: {
        bullding: '58',
        street: 'Ebad El Rahman',
        area: 'Mokkatam',
        governorate: 'Cairo',
        floor: '9',
        apartment: '3'
    },
    default: true,
    addressName: 'Home',
}

const MyAddress = () => {
    
    // get current user
    let uid;
    if ( auth.currentUser ) {
        uid = auth.currentUser.uid;
    }
    
    // useStates
    const [address, setAddress] = useState([testAddress]);
    
    
    if (address.length === 0) {
        return (
            <View>
                <Header title={'MY ADDRESS BOOK' + ' ' + `(${address.length})`} onBackPress={() => router.replace(`profile`)}></Header>
                
                <View style={{padding: '6%', alignItems: 'center'}}>
                    <Text>
                        You don't have any saved address yet,
                    </Text>
                    <Text>
                        Add your address to have a quick & easy checkout process
                    </Text>
                </View>
                
                <View style={{paddingHorizontal: '6%'}}>
                    <Buttton title={'Add Address'} main={true} onPress={() => router.replace(`account/address/new`)}></Buttton>
                </View>
            </View>
        )
    } else {
        return (
            <View>
                <Header title={'MY ADDRESS BOOK' + ' ' + `(${address.length})`} onBackPress={() => router.replace(`profile`)}></Header>
                <FlatList
                    data={address}
                    renderItem={({item}) =>
                            <Address address={item}/>
                    }
                />
                <View style={{paddingHorizontal: '6%', paddingVertical: 30}}>
                    <Buttton title={'Add Address'} main={true} onPress={() => router.replace(`account/address/new`)}></Buttton>
                </View>
            </View>
        )
    }
}

export default MyAddress;