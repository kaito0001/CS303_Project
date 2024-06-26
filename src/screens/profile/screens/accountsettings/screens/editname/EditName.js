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

// firebase functions import
import { auth } from "../../../../../../firebase/config";
import { getUser, editUser } from '../../../../../../firebase/users';


const EditName = () => {
    
    // get current user
    let uid;
    if ( auth.currentUser ) {
        uid = auth.currentUser.uid;
    }
    
    // useStates
    const [name, setName] = useState('Sherif Omar');
    const [newName, setNewName] = useState();
    const [userData, setUserData] = useState();
    
    // icons import from library
    const UserIcon = IconLibrary['user'];
    
    // functions
    const handleUpdateName = () => {
        editUser(uid, {...userData, name: newName}).then(() => {
            setName(newName);
        })
        // ..........
    }

    // get user's data
    const getUserData = async () => {
        const userData = await getUser(uid);
        setUserData(userData)
        setName(userData.name);
        setNewName(userData.name)
    }
    useEffect(() => {
        getUserData();
    },[])
    
    
    return (
        <View>
            
            <Header title={'EDIT NAME'} onBackPress={() => router.replace(`account/settings`)}></Header>
            
            <Text style={EditStyle.h}>Current Name</Text>
            
            <View style={EditStyle.choice} >
                <Pressable style={EditStyle.info} >
                    <View style={{flexDirection: 'row', alignItems: 'center'}} >
                        <UserIcon/>
                        <Text style={EditStyle.txt}>Name</Text>
                        <Text style={EditStyle.txt}>{name}</Text>
                    </View>
                </Pressable>
            </View>
            
            <View style={EditStyle.line}></View>
            
            <Text style={EditStyle.h}>New Name</Text>
            
            <View style={EditStyle.inputContainer}>
                <UserIcon/>
                <TextInput
                    style={[EditStyle.textInput, Platform.OS === 'web' && EditStyle.webTextInput]}
                    placeholderTextColor="#99a4b4"
                    onChangeText={setNewName}
                    value={newName}
                />
            </View>
            
            <View style={{paddingHorizontal: '6%', paddingVertical: 30}}>
                <Buttton title={'Update Name'} main={true} onPress={handleUpdateName}></Buttton>
            </View>
            
            <StatusBar backgroundColor="#001b46"/>
            
            
        </View>
    )
}

export default EditName;