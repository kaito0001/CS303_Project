import React, { useState, useEffect } from 'react';
import { router } from 'expo-router';
import {
    View,
    Text,
    Pressable,
} from 'react-native';

// stylesheet import
import LoginStyle from './stylesheets/Stylesheet';

// global components import
import Buttton from '../../../../components/buttton/Buttton';

// icons import
import { AntDesign } from '@expo/vector-icons';

const Login = ({ visible }) => {
    
    // functions
    const handleGoogleSignIn =() => {
        // ..........
    }
    
    if (!visible) {
        return null;
    }
    
    return (
        <View style={LoginStyle.container} >
            
            <Text style={LoginStyle.txt1} >Hello!</Text>
            <Text style={LoginStyle.txt2}>Login to track your orders, access your wishlist and addresses</Text>
            
            <View style={LoginStyle.googleLogin} >
                <Pressable style={LoginStyle.googleButton} onPress={handleGoogleSignIn}>
                    <AntDesign name="google" size={30} color="black" />
                    <Text style={LoginStyle.buttonTxT}>Continue with google</Text>
                    <View style={{width: 30, height: 30}} ></View>
                </Pressable>
            </View>
            
            <View style={LoginStyle.break}>
                <View style={LoginStyle.line}></View>
                <Text style={{marginHorizontal: 20, fontSize: 20}}>OR</Text>
                <View style={LoginStyle.line}></View>
            </View>
            
            <Buttton title={'Login to My Account'} main={true} onPress={() => router.push('auth/login')}></Buttton>
            
            <View style={{marginVertical: 15}}></View>
            
            <Buttton title={'Create Account'} main={false} onPress={() => router.push('auth/register')}></Buttton>
        </View>
    )
}

export default Login;