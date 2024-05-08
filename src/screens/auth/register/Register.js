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
import RegisterStyle from './stylesheets/Stylesheet';

// global components import
import Header from '../../../components/header/Header';
import Buttton from '../../../components/buttton/Buttton';

// icons import
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Register = () => {
    
    // useStates
    const [hide, setHide] = useState(true);
    const [register, setRegister] = useState();
    
    // functions
    const handleRegister = () => {
        setRegister(!register)
        // ..........
    }
    
    return (
        <View style={RegisterStyle.container} >
            
            <Header title={'CREATE ACCOUNT'}></Header>
            
            <ScrollView>
                
                <View style={RegisterStyle.emailRegister} >
                    <Text style={RegisterStyle.txt1} >Login to your account for a quick checkout process</Text>
                    <View style={RegisterStyle.inputContainer}>
                        <FontAwesome style={{padding: 18}} name="user-o" size={24} color="black" />
                        <TextInput
                            style={[RegisterStyle.textInput, Platform.OS === 'web' && RegisterStyle.webTextInput]}
                            placeholder="Full Name"
                            placeholderTextColor="#99a4b4"
                        />
                    </View>
                    <View style={RegisterStyle.inputContainer}>
                        <MaterialCommunityIcons style={{padding: 20}} name="email-fast-outline" size={24} color="black" />
                        <TextInput
                            style={[RegisterStyle.textInput, Platform.OS === 'web' && RegisterStyle.webTextInput]}
                            placeholder="Email"
                            placeholderTextColor="#99a4b4"
                        />
                    </View>
                    <View style={RegisterStyle.inputContainer}>
                        <Feather style={{padding: 18}} name="phone" size={24} color="black" />
                        <TextInput
                            style={[RegisterStyle.textInput, Platform.OS === 'web' && RegisterStyle.webTextInput]}
                            placeholder="Phone Number"
                            placeholderTextColor="#99a4b4"
                        />
                    </View>
                    <View style={[RegisterStyle.inputContainer, {marginBottom: 30}]}>
                        <MaterialIcons style={{padding: 18}} name="password" size={24} color="black" />
                        <TextInput
                            style={[RegisterStyle.textInput, Platform.OS === 'web' && RegisterStyle.webTextInput]}
                            placeholder="Password"
                            placeholderTextColor="#99a4b4"
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
                    {register ? (
                        <ActivityIndicator style={{marginTop: 20}} size="large" color="#001b46"/>
                    ) : (
                        <Buttton title={'Create Account'} main={true} onPress={handleRegister}></Buttton>
                    )}
                </View>
                
                <View style={RegisterStyle.break} >
                    <View style={RegisterStyle.line} ></View>
                    <Text style={{ marginHorizontal: 5 }}>OR</Text>
                    <View style={RegisterStyle.line} ></View>
                </View>
                
                <View style={{marginHorizontal: '6%'}}>
                    <Text style={RegisterStyle.txt2} >Already have an account? Login to your account for quick and easy cheackout experience.</Text>
                    <Buttton title={'Login to My Account'} main={false} onPress={() => router.replace('auth/login')}></Buttton>
                </View>
                
            </ScrollView>
            
            <StatusBar backgroundColor={'#001b46'}/>
            
        </View>
    )
}

export default Register;