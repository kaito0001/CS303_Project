import React, { useState, useEffect } from 'react';
import { router } from 'expo-router';
import {
    View,
    Text,
    Alert,
    Platform,
    StatusBar,
    TextInput,
} from 'react-native';

// stylesheet import
import ForgotPassStyle from './stylesheets/Stylesheet';

// global components import
import Header from '../../../components/header/Header';
import Buttton from '../../../components/buttton/Buttton';

// firebase functions import
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../firebase/config";
import { getUsers } from "../../../firebase/users";

// icons import
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const ForgotPassword = () => {
    
    // useStates
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(true);
    
    // functions
    const handleResetPassword = async () => {
        const usersList = await getUsers();
        const index = usersList.findIndex((user) => user.email === email);

        if(!email || index === -1){
            setIsValid(false);
            return;
        }
        else{
            sendPasswordResetEmail(auth, email)
            .then(() => {
                resetAlert();
            })
            .catch((error) => console.error(error))
        }
        // ..........
    }
    
    const emailValidation = () => {
        // if(!email || auth.currentUser.email !== email){
        //     setIsValid(false);
        // }
        // ..........
    }
    
    // use it at end of handleResetPassword
    const resetAlert = () => {
        return Alert.alert('Password Reset Email Sent!', 'Please check your email.', [
            {
                text: 'Ok',
                onPress: () => { router.replace('auth/login') },
            },
        ])
    }
    
    
    return (
        <View style={ForgotPassStyle.container} >
            
            <Header title={'RESET PASSWORD'} onBackPress={() => router.replace('auth/login')}></Header>
            
            <View style={ForgotPassStyle.resetContainer} >
                <Text style={ForgotPassStyle.txt}>Enter Your Email</Text>
                <View style={ForgotPassStyle.inputContainer}>
                    <MaterialCommunityIcons style={{padding: 20}} name="email-fast-outline" size={24} color="black" />
                    <TextInput
                        style={[ForgotPassStyle.textInput, Platform.OS === 'web' && ForgotPassStyle.webTextInput]}
                        placeholder="Email"
                        placeholderTextColor="#99a4b4"
                        onChangeText={(text) => setEmail(text.trim())}
                        value={email}
                        onBlur={emailValidation}
                    />
                </View>
                {isValid ? (
                    <Text style={ForgotPassStyle.txt1}>will send you reset email to reset your number</Text>
                ) : (
                    <View style={ForgotPassStyle.emailAlert}>
                        <AntDesign name="warning" size={24} color="red" />
                        <Text style={{color: 'red', marginLeft: 5}}>Invalid Email Address</Text>
                    </View>
                )}
                <Buttton title={'Send'} main={true} onPress={handleResetPassword}></Buttton>
            </View>
            
            <StatusBar backgroundColor="#001b46"/>
        </View>
    )
}

export default ForgotPassword;