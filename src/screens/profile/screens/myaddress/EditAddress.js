import React, { useState, useEffect } from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import {
    View,
    Text,
    Platform,
    Pressable,
    TextInput,
    Alert,
} from 'react-native';

// import stylesheet
import MainAddress from './stylesheets/Stylesheet';

// import global component
import Header from '../../../../components/header/Header';
import Buttton from '../../../../components/buttton/Buttton';

// auth import from firebase
import { auth } from "../../../../firebase/config";
import { editAddress, setAllNotDefault } from '../../../../firebase/address';
import { getUser } from '../../../../firebase/users';

const EditAddress = () => {
    
    // get current user
    let uid;
    if ( auth.currentUser ) {
        uid = auth.currentUser.uid;
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
    const [name, setName] = useState('');

    const { addressId } = useLocalSearchParams();
    // functions

    useEffect(() => {
        const fetchUserName = async () => {
            const userData = await getUser(uid);
            setName(userData.name);
            console.log("name",userData.name);
        }

        fetchUserName();
    },[]);

    const editAddressHandler = async () => {
        if(!phoneNumber || !building || !street || !area || !government || !floor || !apartment || !addressName){
            return Alert.alert('Non Complete Data','Please enter all address information.', [
                {
                    text: 'Ok',
                },
            ])
        }

        const newAddress = {
            // id: Math.random().toString(),
            name: name,
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
        console.log(addressId);


        await editAddress(uid, addressId, newAddress).then(() => {
            router.replace("account/addresses")
        })
    }
    
    return (
        <View>
            <Header title={'EDIT ADDRESS'} onBackPress={() => router.replace(`account/addresses`)}></Header>
            
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
                    placeholder="Governorate"
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
                    placeholder="Streat"
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
            
            <View style={{paddingHorizontal: '6%'}}>
                <Buttton title={'Edit Address'} main={true} onPress={editAddressHandler}></Buttton>
            </View>
        </View>
    )
}

export default EditAddress;