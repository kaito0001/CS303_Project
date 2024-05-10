import React, { useState, useEffect, useCallback } from 'react';
import { router } from 'expo-router';
import {
    View,
    StatusBar,
    StyleSheet,
    ScrollView,
} from 'react-native';

// import global component
import Header from '../../components/header/Header';
import Choice from '../../components/choice/Choice';

// import local component
import Login from './components/login/Login';
import Account from './components/account/Account';

// firebase functions import
import { auth } from "../../firebase/config";
import { getUser } from '../../firebase/users';

const Profile = () => {
    
    // get current user
    let uid;
    if ( auth.currentUser ) {
        uid = auth.currentUser.uid;
    }

    // useStates
    const [isLogin, setIsLogin] = useState(uid !== undefined);
    const [userData, setUserData] = useState();
    
    // functions
    const handleCallBack = useCallback( (bool) => {
       setIsLogin(bool);
    }, []);

    // get user's data
    useEffect(() => {
        const getUserData = async () => {
            const userData = await getUser(uid);
            setUserData(userData);
        }
        getUserData();
    },[])

    return (
        <View style={ProfileStyle.container}>

            <Header title={'PROFILE'}/>

            <ScrollView>
                <Account visible={isLogin} setIsLogin={handleCallBack}></Account>

                <Login visible={!isLogin}></Login>

                <View style={ProfileStyle.line}></View>

                <Choice title={'Help'} icon={'help'} onPress={() => router.replace(`help`)}></Choice>

                <Choice title={'About'} icon={'about'} onPress={() => router.replace(`about`)}></Choice>
            </ScrollView>

            <StatusBar backgroundColor="#001b46"/>

        </View>
    )
}

export default Profile;

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