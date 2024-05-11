import React, { useState, useEffect, useCallback } from 'react';
import { router } from 'expo-router';
import {
    View,
    Text,
    Pressable,
    StatusBar,
    StyleSheet,
    ScrollView,
} from 'react-native';

import AdminStyle from './stylesheets/Stylesheet';

// import global component
import Header from '../../../components/header/Header';

// firebase functions import
import { auth } from "../../../firebase/config";
import { getUser } from '../../../firebase/users';

// icons library import
import IconLibrary from "../../../components/icons/icons";

// icons import
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Admin = () => {
    
    const UserIcon = IconLibrary['user'];
    const PhoneIcon = IconLibrary['phone'];
    const EmailIcon = IconLibrary['email'];
    const EditIcon = IconLibrary['edit'];
    
    // get current user
    let uid;
    if ( auth.currentUser ) {
        uid = auth.currentUser.uid;
    }

    // useStates
    const [userData, setUserData] = useState();
    const [component, setComponent] = useState('Admin');
    
    // functions
    const handleLogout = () => {
        auth.signOut().then(() => {
        }).catch((error) => {
        console.error(error);
        });
        router.replace('home');
    }

    // get user's data
    useEffect(() => {
        const getUserData = async () => {
            const userData = await getUser(uid);
            if (userData) {
                setUserData(userData);
            }
        }
        getUserData();
    },[])


    return (
        <View style={AdminStyle.container}>

            <Header title={'ADMIN'}/>

            <ScrollView>

                <View style={AdminStyle.choice} >
                    <View style={AdminStyle.info} >
                        <View style={{flexDirection: 'row', alignItems: 'center'}} >
                            <UserIcon/>
                            <Text style={AdminStyle.txt}>Name</Text>
                            <Text style={AdminStyle.txt}>{userData ? userData.name : 'Admin'}</Text>
                        </View>
                    </View>
                </View>
                
                <View style={AdminStyle.choice} >
                    <Pressable style={AdminStyle.info} >
                        <View style={{flexDirection: 'row', alignItems: 'center'}} >
                            <PhoneIcon/>
                            <Text style={AdminStyle.txt}>Phone</Text>
                            <Text style={AdminStyle.txt}>{userData ? userData.phoneNumber : '00000000000'}</Text>
                        </View>
                    </Pressable>
                </View>
                
                <View style={AdminStyle.choice} >
                    <View style={[AdminStyle.info, {borderWidth: 0}]} >
                        <View style={{flexDirection: 'row', alignItems: 'center'}} >
                            <EmailIcon/>
                            <Text style={AdminStyle.txt}>Email</Text>
                            <Text style={AdminStyle.txt}>{userData ? userData.email : ''}</Text>
                        </View>
                    </View>
                </View>
                
                <View style={AdminStyle.line}></View>
                
                <View style={AdminStyle.choice} >
                    <Pressable style={AdminStyle.delete} onPress={handleLogout}>
                        <SimpleLineIcons name="logout" size={24} color="red" />
                        <Text style={AdminStyle.deleteTxt}>Logout</Text>
                    </Pressable>
                </View>
                
            </ScrollView>

            <StatusBar backgroundColor="#001b46"/>

        </View>
    )
}

export default Admin;

const ProfileStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafcfb'
    },
    line: {
        flexDirection: 'row',
        width: '100%',
        height: 1,
        borderBottomColor: '#d8e9f3',
        borderBottomWidth: 10,
    },
})