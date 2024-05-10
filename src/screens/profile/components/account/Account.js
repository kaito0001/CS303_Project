import React, { useState, useEffect } from 'react';
import { router } from 'expo-router';
import {
    View,
    Text,
    Pressable,
} from 'react-native';

// stylesheet import
import AccountStyle from './stylesheets/Stylesheet';

// icons import
import { SimpleLineIcons } from '@expo/vector-icons';

// global components import
import Choice from '../../../../components/choice/Choice';

// firebase functions import
import { auth } from "../../../../firebase/config";
import { getUser } from '../../../../firebase/users';

const Account = ({ visible, setIsLogin }) => {
    
    // get current user
    let uid;
    if ( auth.currentUser ) {
        uid = auth.currentUser.uid;
    }
    
    // useStates
    const [name, setName] = useState();
    const [userData, setUserData] = useState();
    
    // functions
    const handleLogout = () => {
        // ..........
        setIsLogin(false);
    }

    // get user's data
    // ? needs optimization if we don't need the whole data
    useEffect(() => {
        const getUserData = async () => {
            const userData = await getUser(uid);
            setUserData(userData);
            setName(userData.name)
        }
        getUserData();
    },[])
    
    if ( !visible ) {
        return null;
    }
    
    return (
        <View style={AccountStyle.container} >
            
            <View style={AccountStyle.user} >
                <Text>Hello {name}</Text>
            </View>
            
            <Choice title="My Orders" icon="orders" onPress={() => router.replace(`account/orders`)}></Choice>
            
            <Choice title={'My Wishlist'} icon={'wishlist'} onPress={() => router.replace(`account/wishlist`)}></Choice>
            
            <Choice title={'My Address Book'} icon={'address'} onPress={() => router.replace(`account/addresses`)}></Choice>
            
            <Choice title={'Account Settings'} icon={'settings'} onPress={() => router.replace(`account/settings`)}></Choice>
            
            <View style={AccountStyle.choice} >
                <Pressable style={AccountStyle.logout} onPress={handleLogout}>
                    <SimpleLineIcons name="logout" size={24} color="red" />
                    <Text style={AccountStyle.logoutTxt}>Logout</Text>
                </Pressable>
            </View>
            
        </View>
    )
}

export default Account;