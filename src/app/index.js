import { router } from 'expo-router';
import React, { useEffect } from 'react';
import Intro from '../screens/intro/Intro';

import { auth } from '../firebase/config';

const Page = () => {
    
    // get current user
    let uid;
    if ( auth.currentUser ) {
        uid = auth.currentUser.uid;
    }
    
    // functions
    const fetchAsyncStorage = () => {
        if ( uid === undefined ) {
            router.replace(`profile`);
        } else {
            router.replace(`profile${uid}`);
        }
    }
    
    useEffect(  () => {
        setTimeout( () => fetchAsyncStorage(),5000 );
    }, []);
    
    return (
        <Intro />
    );
}

export default Page;