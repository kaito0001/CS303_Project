import React, { useState, useEffect, useCallback } from 'react';
import { router, useFocusEffect } from 'expo-router';
import {
    View,
    Text,
    FlatList,
    StatusBar,
} from 'react-native';

// global components import
import Header from '../../../../components/header/Header';
import Buttton from '../../../../components/buttton/Buttton';

// local components import
import Address from "./components/Address";

// firebase functions import
import { auth } from "../../../../firebase/config";
import { deleteAddress, getAddresses } from '../../../../firebase/address';

// fake data
const testAddress = {
    id: Math.random().toString(),
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
    const [addresses, setAddresses] = useState([testAddress]);
    
    // functions
    useEffect(() => {
        const fetchAddresses = async () => {
            const addressesList = await getAddresses(uid);
            if(addressesList){
                setAddresses(addressesList);
            }
        }
        fetchAddresses();
    },[]);
    // const fetchAddresses = async () => {
    //     const addressesList = await getAddresses(uid);
    //     if(addressesList){
    //         setAddresses(addressesList);
    //     }
    // }
    // useFocusEffect(
    //     useCallback(() => {
    //         fetchAddresses();
    //     }, [])
    //   );

    // const onDeleteHandler = async (addressId) => {
    //     deleteAddress(uid, addressId);
    //     fetchAddresses();
    // }
   
    
    if (addresses.length === 0) {
        return (
            <View>
                <Header title={'MY ADDRESS BOOK' + ' ' + `(${addresses.length})`} onBackPress={() => router.replace(`profile`)}></Header>
                
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
                <Header title={'MY ADDRESS BOOK' + ' ' + `(${addresses.length})`} onBackPress={() => router.replace(`profile`)}></Header>
                <FlatList
                    data={addresses}
                    renderItem={({item}) =>
                            <Address address={item} userId={uid}/>
                    }
                />
                <View style={{paddingHorizontal: '6%', paddingVertical: 30}}>
                    <Buttton title={'Add Address'} main={true} onPress={() => router.replace(`account/address/new`)}></Buttton>
                </View>

                <StatusBar backgroundColor="#001b46"/>
            </View>
        )
    }
}

export default MyAddress;