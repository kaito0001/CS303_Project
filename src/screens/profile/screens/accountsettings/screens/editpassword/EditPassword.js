import React, { useState, useEffect } from 'react';
import { router } from 'expo-router';
import {
    View,
    Platform,
    TextInput,
    Pressable,
    StatusBar,
} from 'react-native';

// stylesheet import
import EditStyle from '../stylesheets/Stylesheet';

// global components import
import Header from '../../../../../../components/header/Header';
import Buttton from '../../../../../../components/buttton/Buttton';

// icons library import
import IconLibrary from "../../../../../../components/icons/icons";

// icons import
import { Ionicons } from '@expo/vector-icons';

// auth import from firebase
import { auth } from "../../../../../../firebase/config";


const EditPassword = () => {
    
    // get current user
    let uid;
    if ( auth.currentUser ) {
        uid = auth.currentUser.uid;
    }
    
    // useStates
    const [password,setPassword] = useState();
    const [hide, setHide] = useState(true);
    
    // icons import from library
    const PassIcon = IconLibrary['pass'];
    
    // functions
    const handleUpdatePass = () => {
        // ..........
    }
    
    
    return (
        <View>
            
            <Header title={'EDIT PASSWORD'} onBackPress={() => router.replace(`account/settings`)}></Header>

            <View style={EditStyle.inputContainer}>
                <PassIcon/>
                <TextInput
                    style={[EditStyle.textInput, Platform.OS === 'web' && EditStyle.webTextInput]}
                    placeholder="Current password"
                    placeholderTextColor="#99a4b4"
                    onChangeText={setPassword}
                    secureTextEntry={hide}
                />
                <Pressable onPress={() => setHide(!hide)}>
                    {hide ? (
                        <Ionicons style={{marginHorizontal: 18}} name="eye-off-outline" size={24} color="#006cb7"/>
                    ) : (
                        <Ionicons style={{marginHorizontal: 18}} name="eye-outline" size={24} color="#006cb7"/>
                    )}
                </Pressable>
            </View>

            <View style={EditStyle.inputContainer}>
                <PassIcon/>
                <TextInput
                    style={[EditStyle.textInput, Platform.OS === 'web' && EditStyle.webTextInput]}
                    placeholder="Current password"
                    placeholderTextColor="#99a4b4"
                    onChangeText={setPassword}
                    secureTextEntry={hide}
                />
                <Pressable onPress={() => setHide(!hide)}>
                    {hide ? (
                        <Ionicons style={{marginHorizontal: 18}} name="eye-off-outline" size={24} color="#006cb7"/>
                    ) : (
                        <Ionicons style={{marginHorizontal: 18}} name="eye-outline" size={24} color="#006cb7"/>
                    )}
                </Pressable>
            </View>
            
            <View style={{paddingHorizontal: '6%', paddingVertical: 30}}>
                <Buttton title={'Update Password'} main={true} onPress={handleUpdatePass}></Buttton>
            </View>
            
            <StatusBar backgroundColor="#001b46"/>
            
        </View>
    )
}

export default EditPassword;