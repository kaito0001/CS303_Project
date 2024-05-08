import React, { useState, useEffect } from 'react';
import { router } from 'expo-router';
import {
    View,
    Text,
    Pressable,
} from 'react-native';

// stylesheet import
import AddressStyle from "./stylesheets/Stylesheet";

// icons library import
import IconLibrary from "../../../../../components/icons/icons";

const Address = ({address}) => {
    
    // icons import from library
    const UserIcon = IconLibrary['user'];
    const PhoneIcon = IconLibrary['phone'];
    const LocationIcon = IconLibrary['location'];
    const EditIcon = IconLibrary['edit'];
    const DeleteIcon = IconLibrary['delete'];
    
    
    
    return (
        <View style={AddressStyle.container}>
            
            <View style={AddressStyle.title}>
                <Text style={AddressStyle.addressName}>{address.addressName}</Text>
                {address.default ? (
                    <Text style={AddressStyle.default}>Default Address</Text>
                ) : (
                    <></>
                )}
            </View>
            
            <View style={AddressStyle.line} >
                <UserIcon/>
                <Text style={AddressStyle.info}>Name</Text>
                <Text>{address.name}</Text>
            </View>
            
            <View style={AddressStyle.line}>
                <PhoneIcon/>
                <Text style={AddressStyle.info}>Phone Number</Text>
                <Text>{address.phoneNumber}</Text>
            </View>
            
            <View style={{paddingVertical: 5,flexDirection: 'row'}}>
                <LocationIcon/>
                <Text style={AddressStyle.info}>Address</Text>
                <Text>{address.address.bullding + ' ' + address.address.street + ', ' + address.address.governorate + ', Floor' + address.address.floor + ' | Apartment' + address.address.apartment}</Text>
            </View>
            
            <View style={AddressStyle.buttons}>
                <Pressable style={AddressStyle.button} onPress={() => router.replace(`account/address/edit`)}>
                    <EditIcon/>
                    <Text style={{color:'#0041cf', marginLeft: 10}}>Edit Address</Text>
                </Pressable>

                <Pressable style={AddressStyle.button}>
                    <DeleteIcon/>
                    <Text style={{color:'red', marginLeft: 10}}>Delete Address</Text>
                </Pressable>
            </View>
            
        </View>
    )
}

export default Address;