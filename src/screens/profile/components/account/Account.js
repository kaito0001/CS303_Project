import React, { useState, useEffect } from 'react';
import { router } from 'expo-router';
import {
    View,
    Text,
    Image,
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

// image picker import
import * as ImagePicker from 'expo-image-picker';

// storage functions import
import { uploadUserImage } from '../../../../firebase/storage';

// firestore functions import
import { addDocFunc } from '../../../../firebase/firestore';

const Account = ({ visible, setIsLogin }) => {
    
    // get current user
    let uid;
    if ( auth.currentUser ) {
        uid = auth.currentUser.uid;
    }
    
    // useStates
    const [name, setName] = useState();
    const [userData, setUserData] = useState();
    const [img, setImg] = useState('');
    
    // functions
    const handleLogout = () => {
        // ..........
        setIsLogin(false);
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
        });
        const pickerResult = result.assets[0];
        try {
            if (!pickerResult.cancelled) {
                const uploadUrl = await uploadUserImage(pickerResult.uri, uid);
                setImg(uploadUrl)
            }
        } catch (e) {
            console.log(e);
            alert("Upload failed, Please try later.");
        }
    };

    // get user's data
    // ? needs optimization if we don't need the whole data
    useEffect(() => {
        const getUserData = async () => {
            const userData = await getUser(uid);
            setUserData(userData);
            setName(userData.name);
            setImg(userData.image);
        }
        getUserData();
    },[])
    
    if ( !visible ) {
        return null;
    }
    
    return (
        <View style={AccountStyle.container} >
            
            <View style={AccountStyle.user} >
                <Text>Hello  {userData ? userData.name : 'My Dear'}</Text>
                <View>
                    {!img ? (
                        <Pressable onPress={pickImage}>
                            <Text style={{color: '#006cb7'}}>Add Image</Text>
                        </Pressable>
                    ) : (
                        <View>
                            <Image source={{ uri: img }} style={AccountStyle.image}></Image>
                        </View>
                    )}
                </View>
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