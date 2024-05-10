import { router } from 'expo-router';
import React, { useEffect } from 'react';
import Intro from '../screens/intro/Intro';

import { auth } from '../firebase/config';
import Category from '../screens/categories/CategoryPage';
import Cart from '../screens/cart/Cart';
import Home from '../screens/home/Home';

const Page = () => {
    
    // get current user
    // let uid;
    // if ( auth.currentUser ) {
    //     uid = auth.currentUser.uid;
    // }
    
//    functions
    // const fetchAsyncStorage = () => {
    //     if ( uid === undefined ) {
    //         router.replace(`cart`);
    //     } else {
    //         router.replace(`cart${uid}`);
    //     }
    // }
    
    // useEffect(  () => {
    //     setTimeout( () => fetchAsyncStorage(),5000 );
    // }, []);
    
    return (
        <Category/>
    );
}

export default Page;