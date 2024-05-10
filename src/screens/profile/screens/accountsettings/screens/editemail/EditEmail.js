import React, { useState, useEffect } from 'react';
import { router } from 'expo-router';
import {
    View,
    Text,
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

// firebase functions import
import { signInWithEmailAndPassword, updateEmail } from "firebase/auth";
import { auth } from "../../../../../../firebase/config";
import { getUser, editUser } from '../../../../../../firebase/users';


const EditEmail = () => {
    
    // get current user
    let uid;
    if ( auth.currentUser ) {
        uid = auth.currentUser.uid;
    }
    
    // useStates
    const [email, setEmail] = useState('ana@ana.com');
    const [password,setPassword] = useState();
    const [newEmail, setNewEmail] = useState();
    const [userData, setUserData] = useState();
    const [hide, setHide] = useState(true);
    
    // icons import from library
    const EmailIcon = IconLibrary['email'];
    const PassIcon = IconLibrary['pass'];
    
    // functions
    const handleUpdateEmail = async () => {
        console.log(email, password);
        signInWithEmailAndPassword(auth, email, password).then(() => {
            editUser(uid, {...userData, email: newEmail}).catch((error) => console.error(error));
            updateEmail(auth.currentUser, newEmail).catch((error) => console.error(error));
        }).catch((error) => console.error(error))
        // ..........
    }

    // get user's data
    const getUserData = async () => {
        const userData = await getUser(uid);
        setUserData(userData);
        setEmail(userData.email);
        setNewEmail(userData.email)
    }
    useEffect(() => {
        getUserData();
    },[])
    
    
    return (
        <View>
            
            <Header title={'EDIT EMAIL'} onBackPress={() => router.replace(`account/settings`)}></Header>
            
            <Text style={EditStyle.h}>Current Email</Text>
            
            <View style={EditStyle.choice} >
                <Pressable style={EditStyle.info} >
                    <View style={{flexDirection: 'row', alignItems: 'center'}} >
                        <EmailIcon/>
                        <Text style={EditStyle.txt}>Email</Text>
                        <Text style={EditStyle.txt}>{email}</Text>
                    </View>
                </Pressable>
            </View>
            
            <View style={EditStyle.line}></View>
            
            <Text style={EditStyle.h}>New email</Text>
            
            <View style={EditStyle.inputContainer}>
                <EmailIcon/>
                <TextInput
                    style={[EditStyle.textInput, Platform.OS === 'web' && EditStyle.webTextInput]}
                    placeholderTextColor="#99a4b4"
                    onChangeText={(text) => setNewEmail(text.trim())}
                    value={newEmail}
                />
            </View>
            <View style={EditStyle.inputContainer}>
                <PassIcon/>
                <TextInput
                    style={[EditStyle.textInput, Platform.OS === 'web' && EditStyle.webTextInput]}
                    placeholder="Confirm password"
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
                <Buttton title={'Update Email'} main={true} onPress={handleUpdateEmail}></Buttton>
            </View>
            
            <StatusBar backgroundColor="#001b46"/>
            
        </View>
    )
}

export default EditEmail;