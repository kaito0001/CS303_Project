import React, { useState, useEffect } from 'react';
import { router } from 'expo-router';
import {
    View,
    Text,
    Platform,
    StatusBar,
    Pressable,
    TextInput,
    ScrollView,
    ActivityIndicator,
} from 'react-native';

// stylesheet import
import LoginStyle from './stylesheets/Stylesheet';

// global components import
import Header from '../../../components/header/Header';
import Buttton from '../../../components/buttton/Buttton';

// icons import
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Login = () => {
    
    // useStates
    const [hide, setHide] = useState(true);
    const [email, setEmail] = useState();
    const [login, setLogin] = useState(false);
    
    // functions
    const handleLogin = () => {
        // ..........
    }
    
    const handleGoogleSignIn =() => {
        // ..........
    }
    
    return (
        <View style={LoginStyle.container} >
            
            <Header title={'LOGIN'}></Header>
            
            <ScrollView>
                
                <View style={LoginStyle.googleLogin} >
                    <Pressable style={LoginStyle.googleButton} onPress={handleGoogleSignIn}>
                        <AntDesign name="google" size={30} color="black" />
                        <Text style={LoginStyle.buttonTxT}>Continue with google</Text>
                        <View style={{width: 30, height: 30}} ></View>
                    </Pressable>
                </View>
                
                <View style={LoginStyle.break}>
                    <View style={LoginStyle.line}></View>
                    <Text style={{ marginHorizontal: 5 }}>OR</Text>
                    <View style={LoginStyle.line}></View>
                </View>
                
                <View style={LoginStyle.emailLogin} >
                    <Text style={LoginStyle.txt1} >Login to your account for a quick checkout process</Text>
                    <View style={[LoginStyle.inputContainer, {marginBottom: 15}]}>
                        <TextInput
                            style={[LoginStyle.textInput, Platform.OS === 'web' && LoginStyle.webTextInput, { width: '100%'}]}
                            placeholder="Email"
                            placeholderTextColor="#99a4b4"
                            onTextChange={setEmail}
                            value={email}
                        />
                    </View>
                    <View style={LoginStyle.inputContainer}>
                        <TextInput
                            style={[LoginStyle.textInput, Platform.OS === 'web' && LoginStyle.webTextInput, {width: '80%'}]}
                            placeholder="Password"
                            placeholderTextColor="#99a4b4"
                            secureTextEntry={hide}
                        />
                        <Pressable onPress={() => setHide(!hide)}>
                            {hide ? (
                                <Ionicons name="eye-off-outline" size={24} color="#006cb7"/>
                            ) : (
                                <Ionicons  name="eye-outline" size={24} color="#006cb7"/>
                            )}
                        </Pressable>
                    </View>
                    <Pressable onPress={() => router.replace('auth/forgotpassword')}>
                        <Text style={LoginStyle.forgotPass} >Forgot password?</Text>
                    </Pressable>
                    {login ? (
                        <ActivityIndicator style={{marginTop: 25}} size="large" color="#001b46"/>
                    ) : (
                        <Buttton title={'Login to My Account'} main={true} onPress={handleLogin}></Buttton>
                    )}
                </View>
                
                <View style={LoginStyle.break} >
                    <View style={LoginStyle.line} ></View>
                    <Text style={{ marginHorizontal: 5 }}>OR</Text>
                    <View style={LoginStyle.line} ></View>
                </View>
                
                <View style={{marginHorizontal: '6%'}}>
                    <Text style={LoginStyle.txt2} >New to Rayashop? Create an account for quick and easy checkout experience.</Text>
                    <Buttton title={'Create Account'} main={false} onPress={() => router.replace('auth/register')}></Buttton>
                </View>
                
            </ScrollView>
            
            <StatusBar backgroundColor={'#001b46'}/>
            
        </View>
    )
}

export default Login;