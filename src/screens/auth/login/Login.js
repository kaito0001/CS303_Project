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

// firebase functions import
import { auth } from '../../../firebase/config';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// icons import
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { getUser } from '../../../firebase/users';

const Login = () => {
    
    // useStates
    const [hide, setHide] = useState(true);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [login, setLogin] = useState(false);
    const [isValid, setIsValid] = useState(true);
    
    // functions
    const handleLogin = () => {
        if(!email || !password){
            setIsValid(false);
            setLogin(false);
        }
        else{
            setLogin(!login);
            signInWithEmailAndPassword(auth, email, password).then(async (userCredentials) => {
                const user = await getUser(userCredentials.user.uid);
                if(!user.isAdmin){
                    // normal user routing...
                    router.replace("/profile")
                }
                else{
                    // admin routing...
                    router.replace('admin');
                }
            }).catch((error) => {
                setIsValid(false);
                setLogin(false);
                console.error(error);
            })
        }
        // ! error handling

        // ? finished or needs something else
    }
    
    const handleGoogleSignIn = async () => {
        // const provider = new GoogleAuthProvider();
        // return signInWithPopup(auth, provider).catch((error) => console.error(error))
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
                            style={[LoginStyle.textInput, { width: '100%'}]}
                            placeholder="Email"
                            placeholderTextColor="#99a4b4"
                            onChangeText={(text) => setEmail(text.trim())}
                            value={email}
                        />
                    </View>
                    <View style={[LoginStyle.inputContainer, {paddingRight: 18}]}>
                        <TextInput
                            style={[LoginStyle.textInput, {width: '80%'}]}
                            placeholder="Password"
                            placeholderTextColor="#99a4b4"
                            secureTextEntry={hide}
                            onChangeText={setPassword}
                            value={password}

                        />
                        <Pressable onPress={() => setHide(!hide)}>
                            {hide ? (
                                <Ionicons name="eye-off-outline" size={24} color="#006cb7"/>
                            ) : (
                                <Ionicons  name="eye-outline" size={24} color="#006cb7"/>
                            )}
                        </Pressable>
                    </View>
                    {!isValid &&
                        <View style={LoginStyle.emailAlert}>
                            <AntDesign name="warning" size={24} color="red"/>
                            <Text style={{color: 'red', marginLeft: 5}}>Invalid Email Address</Text>
                        </View>
                    }
                    <View style={LoginStyle.forgotPass}>
                        <Pressable onPress={() => router.replace('auth/forgotpassword')}>
                            <Text style={LoginStyle.forgotPassTxT}>Forgot password?</Text>
                        </Pressable>
                    </View>
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
                
                <View style={{marginHorizontal: '6%', marginBottom: 30}}>
                    <Text style={LoginStyle.txt2} >New to Rayashop? Create an account for quick and easy checkout experience.</Text>
                    <Buttton title={'Create Account'} main={false} onPress={() => router.replace('auth/register')}></Buttton>
                </View>
                
            </ScrollView>
            
            <StatusBar backgroundColor={'#001b46'}/>
            
        </View>
    )
}

export default Login;