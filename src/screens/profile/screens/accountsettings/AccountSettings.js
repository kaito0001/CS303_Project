import React, { useState, useEffect } from 'react';
import { router } from 'expo-router';
import {
    View,
    Text,
    Pressable,
    StyleSheet, StatusBar,
} from 'react-native';

// stylesheet import
import AccountStyle from './stylesheets/Stylesheet';

// global components import
import Header from '../../../../components/header/Header';

// icons library import
import IconLibrary from "../../../../components/icons/icons";

// firebase functions import
import { auth } from "../../../../firebase/config";
import { getUser, deleteUserFS } from '../../../../firebase/users';
import { deleteUser } from 'firebase/auth';

// fake data
const testAddress = {
    name: 'Sherif Omar',
    phoneNumber: '01145902559',
    email: 'ana@ana.com',
}

const AccountSettings = () => {
    
    // get current user
    let uid;
    if ( auth.currentUser ) {
        uid = auth.currentUser.uid;
    }
    
    // useStates
    const [user, setUser] = useState(testAddress);
    
    // icons import from library
    const UserIcon = IconLibrary['user'];
    const PhoneIcon = IconLibrary['phone'];
    const EmailIcon = IconLibrary['email'];
    const PassIcon = IconLibrary['pass'];
    const EditIcon = IconLibrary['edit'];
    const DeleteIcon = IconLibrary['delete'];
    
    // functions
    const handleDeleteAccount = async () => {
        // delete user from authentication
        await deleteUser(auth.currentUser).then(() => {
            // delete user from firestore
            deleteUserFS(uid);
            router.replace('auth/login')
        }).catch((error) => console.error(error))
        // ..........
    }

    // get user's data
    const getUserData = async () => {
        const userData = await getUser(uid);
        setUser(userData);
    }
    useEffect(() => {
        getUserData();
    },[])
    
    return (
        <View>
            
            <Header title={'ACCOUNT SETTINGS'} onBackPress={() => router.replace(`profile`)}></Header>
            
            <View style={AccountStyle.choice} >
                <View style={AccountStyle.info} >
                    <View style={{flexDirection: 'row', alignItems: 'center'}} >
                        <UserIcon/>
                        <Text style={AccountStyle.txt}>Name</Text>
                        <Text style={AccountStyle.txt}>{user.name}</Text>
                    </View>
                   <Pressable onPress={() => router.replace(`account/edit/name`)}>
                        <EditIcon/>
                   </Pressable>
                </View>
            </View>
            
            <View style={AccountStyle.choice} >
                <Pressable style={AccountStyle.info} >
                    <View style={{flexDirection: 'row', alignItems: 'center'}} >
                        <PhoneIcon/>
                        <Text style={AccountStyle.txt}>Phone</Text>
                        <Text style={AccountStyle.txt}>{user.phoneNumber}</Text>
                    </View>
                </Pressable>
            </View>
            
            <View style={AccountStyle.choice} >
                <View style={AccountStyle.info} >
                    <View style={{flexDirection: 'row', alignItems: 'center'}} >
                        <EmailIcon/>
                        <Text style={AccountStyle.txt}>Email</Text>
                        <Text style={AccountStyle.txt}>{user.email}</Text>
                    </View>
                    <Pressable onPress={() => router.replace(`account/edit/email`)}>
                        <EditIcon/>
                    </Pressable>
                </View>
            </View>
            
            <View style={AccountStyle.choice} >
                <View style={[AccountStyle.info, {borderWidth: 0}]} >
                    <View style={{flexDirection: 'row', alignItems: 'center'}} >
                        <PassIcon/>
                        <Text style={AccountStyle.txt}>Password</Text>
                        <Text style={AccountStyle.txt}>******</Text>
                    </View>
                    <Pressable onPress={() => router.replace(`account/edit/password`)}>
                        <EditIcon/>
                    </Pressable>
                </View>
            </View>
            
            <View style={AccountStyle.line}></View>
            
            <View style={AccountStyle.choice} >
                <Pressable style={AccountStyle.delete} onPress={handleDeleteAccount}>
                    <DeleteIcon/>
                    <Text style={AccountStyle.deleteTxt}>Delete Account</Text>
                </Pressable>
            </View>
            
            <StatusBar backgroundColor="#001b46"/>
            
        </View>
    )
}

export default AccountSettings;

