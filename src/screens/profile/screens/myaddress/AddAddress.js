import React, { useState, useEffect } from 'react';
import { router } from 'expo-router';
import {
    View,
    Text,
    Platform,
    Pressable,
    StatusBar,
    TextInput,
    ScrollView,
} from 'react-native';

// stylesheet import
import MainAddress from './stylesheets/Stylesheet';

// global components import
import Header from '../../../../components/header/Header';
import Buttton from '../../../../components/buttton/Buttton';

// auth import from firebase
import { auth } from "../../../../firebase/config";
import { addAddress, setAllNotDefault } from '../../../../firebase/address';

const AddAddress = () => {
    
    // get current user
    let uid;
    if ( auth.currentUser ) {
        uid = auth.currentUser.uid;
    }
    
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
    // useStates
    const [check, setCheck] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [building, setBuilding] = useState('');
    const [street, setStreet] = useState('');
    const [area, setArea] = useState('');
    const [government, setGovernment] = useState('');
    const [floor, setFloor] = useState('');
    const [apartment, setApartment] = useState('');
    const [addressName, setAddressName] = useState('');

    // functions
    const addAddressHandler = async () => {
        const newAddress = {
            id: Math.random().toString(),
            name: 'Sherif Omar',
            phoneNumber: phoneNumber,
            address: {
                bullding: building,
                street: street,
                area: area,
                governorate: government,
                floor: floor,
                apartment: apartment
            },
            default: check,
            addressName: addressName,
        }

        if(check === true){
           await setAllNotDefault(uid);
        }

        await addAddress(uid, newAddress).then(() => {
            router.replace("account/addresses")
        })

    }
    
    return (
        <View style={MainAddress.container} >
            
            <Header title={'ADD ADDRESS'} onBackPress={() => router.replace(`account/addresses`)}></Header>

            <ScrollView>
                <View style={MainAddress.inputContainer}>
                    <TextInput
                        style={[MainAddress.textInput, Platform.OS === 'web' && MainAddress.webTextInput]}
                        placeholder="Phone Number"
                        placeholderTextColor="#99a4b4"
                        onChangeText={setPhoneNumber}
                        value={phoneNumber}
                    />
                </View>
            
                <View style={MainAddress.inputContainer}>
                    <TextInput
                        style={[MainAddress.textInput, Platform.OS === 'web' && MainAddress.webTextInput]}
                        placeholder="Government"
                        placeholderTextColor="#99a4b4"
                        onChangeText={setGovernment}
                        value={government}
                    />
                </View>
                <View style={MainAddress.inputContainer}>
                    <TextInput
                        style={[MainAddress.textInput, Platform.OS === 'web' && MainAddress.webTextInput]}
                        placeholder="Area"
                        placeholderTextColor="#99a4b4"
                        onChangeText={setArea}
                        value={area}
                    />
                </View>
                <View style={MainAddress.inputContainer}>
                    <TextInput
                        style={[MainAddress.textInput, Platform.OS === 'web' && MainAddress.webTextInput]}
                        placeholder="Street"
                        placeholderTextColor="#99a4b4"
                        onChangeText={setStreet}
                        value={street}
                    />
                </View>
                <View style={MainAddress.inputContainer}>
                    <TextInput
                        style={[MainAddress.textInput, Platform.OS === 'web' && MainAddress.webTextInput]}
                        placeholder="Bulding"
                        placeholderTextColor="#99a4b4"
                        onChangeText={setBuilding}
                        value={building}
                    />
                </View>
                <View style={MainAddress.inputContainer}>
                    <TextInput
                        style={[MainAddress.textInput, Platform.OS === 'web' && MainAddress.webTextInput]}
                        placeholder="Floor"
                        placeholderTextColor="#99a4b4"
                        onChangeText={setFloor}
                        value={floor}
                    />
                </View>
                <View style={MainAddress.inputContainer}>
                    <TextInput
                        style={[MainAddress.textInput, Platform.OS === 'web' && MainAddress.webTextInput]}
                        placeholder="Apartment"
                        placeholderTextColor="#99a4b4"
                        onChangeText={setApartment}
                        value={apartment}
                    />
                </View>
                <View style={MainAddress.inputContainer}>
                    <TextInput
                        style={[MainAddress.textInput, Platform.OS === 'web' && MainAddress.webTextInput]}
                        placeholder="Address Name"
                        placeholderTextColor="#99a4b4"
                        onChangeText={setAddressName}
                        value={addressName}
                    />
                </View>
            
                <View style={{flexDirection: 'row', paddingHorizontal: '6%', paddingVertical: 30}}>
                    <Pressable style={[MainAddress.checkBox, {backgroundColor: check ? '#0041cf' : '#fff'}]} onPress={() => setCheck(!check)}></Pressable>
                    <Text>Make as Default Address</Text>
                </View>
            
                <View style={{paddingHorizontal: '6%', paddingBottom: 30}}>
                    <Buttton title={'Add Address'} main={true} onPress={addAddressHandler}></Buttton>
                </View>
            </ScrollView>

            <StatusBar backgroundColor="#001b46"/>
        </View>
    )
}

export default AddAddress;