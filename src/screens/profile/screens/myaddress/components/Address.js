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

// firebase functions import
import { deleteAddress } from '../../../../../firebase/address';

const Address = ({address, userId ,admin}) => {
    
    // icons import from library
    const UserIcon = IconLibrary['user'];
    const PhoneIcon = IconLibrary['phone'];
    const LocationIcon = IconLibrary['location'];
    const EditIcon = IconLibrary['edit'];
    const DeleteIcon = IconLibrary['delete'];
    
    // functions
    const deleteHandler = () => {
        deleteAddress(userId, address.id).then(() => {
            router.replace("account/addresses")
        }) 
    }
    
    
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
                <Text style={{maxWidth: '60%'}} >{address.address.bullding + ' ' + address.address.street + ', ' + address.address.governorate + ', Floor' + address.address.floor + ' | Apartment' + address.address.apartment}</Text>
            </View>
            
            <View style={AddressStyle.buttons}>
                <Pressable style={AddressStyle.button} onPress={() => router.replace(`account/address/edit?addressId=${address.id}`)}>
                    <EditIcon/>
                    <Text style={{color:'#0041cf', marginLeft: 10}}>Edit Address</Text>
                </Pressable>

                <Pressable style={AddressStyle.button} onPress={deleteHandler}>
                    {
                        (admin) ? 
                            <View>
                                <DeleteIcon />
                                <Text style={{color:'red', marginLeft: 10}}>Delete Address</Text>
                            </View> : <View />
                        
                        
                    }
                    
                    
                </Pressable>
            </View>
            
        </View>
    )
}

export default Address;