import React, { useState, useEffect } from 'react';
import { router } from 'expo-router';
import {
    View,
    Text,
    Platform,
    Pressable,
    TextInput,
} from 'react-native';

// stylesheet import
import MainAddress from './stylesheets/Stylesheet';

// global components import
import Header from '../../../../components/header/Header';
import Buttton from '../../../../components/buttton/Buttton';

// auth import from firebase
import { auth } from "../../../../firebase/config";

const AddAddress = () => {
    
    // get current user
    let uid;
    if ( auth.currentUser ) {
        uid = auth.currentUser.uid;
    }
    
    // useStates
    const [check, setCheck] = useState(false);
    
    
    return (
        <View>
            <Header title={'ADD ADDRESS'} onBackPress={() => router.replace(`account/addresses`)}></Header>
            
            <View style={MainAddress.inputContainer}>
                <TextInput
                    style={[MainAddress.textInput, Platform.OS === 'web' && MainAddress.webTextInput]}
                    placeholder="Phone Number"
                    placeholderTextColor="#99a4b4"
                />
            </View>
            
            <View style={MainAddress.inputContainer}>
                <TextInput
                    style={[MainAddress.textInput, Platform.OS === 'web' && MainAddress.webTextInput]}
                    placeholder="Governorate"
                    placeholderTextColor="#99a4b4"
                />
            </View>
            <View style={MainAddress.inputContainer}>
                <TextInput
                    style={[MainAddress.textInput, Platform.OS === 'web' && MainAddress.webTextInput]}
                    placeholder="Area"
                    placeholderTextColor="#99a4b4"
                />
            </View>
            <View style={MainAddress.inputContainer}>
                <TextInput
                    style={[MainAddress.textInput, Platform.OS === 'web' && MainAddress.webTextInput]}
                    placeholder="Streat"
                    placeholderTextColor="#99a4b4"
                />
            </View>
            <View style={MainAddress.inputContainer}>
                <TextInput
                    style={[MainAddress.textInput, Platform.OS === 'web' && MainAddress.webTextInput]}
                    placeholder="Bulding"
                    placeholderTextColor="#99a4b4"
                />
            </View>
            <View style={MainAddress.inputContainer}>
                <TextInput
                    style={[MainAddress.textInput, Platform.OS === 'web' && MainAddress.webTextInput]}
                    placeholder="Floor"
                    placeholderTextColor="#99a4b4"
                />
            </View>
            <View style={MainAddress.inputContainer}>
                <TextInput
                    style={[MainAddress.textInput, Platform.OS === 'web' && MainAddress.webTextInput]}
                    placeholder="Apartment"
                    placeholderTextColor="#99a4b4"
                />
            </View>
            <View style={MainAddress.inputContainer}>
                <TextInput
                    style={[MainAddress.textInput, Platform.OS === 'web' && MainAddress.webTextInput]}
                    placeholder="Address Name"
                    placeholderTextColor="#99a4b4"
                />
            </View>
            
            <View style={{flexDirection: 'row', paddingHorizontal: '6%', paddingVertical: 30}}>
                <Pressable style={[MainAddress.checkBox, {backgroundColor: check ? '#0041cf' : '#fff'}]} onPress={() => setCheck(!check)}></Pressable>
                <Text>Make as Default Address</Text>
            </View>
            
            <View style={{paddingHorizontal: '6%'}}>
                <Buttton title={'Add Address'} main={true} ></Buttton>
            </View>
        </View>
    )
}

export default AddAddress;