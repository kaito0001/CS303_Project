import { router } from 'expo-router';
import React, { useEffect } from 'react';
import Intro from '../screens/intro/Intro';
import Product from '../../src/screens/product/Product';
import { auth } from '../firebase/config';
import CategoryPage from '../screens/categories/CategoryPage';
import Home from '../screens/home/Home';

const Page = () => {
    
    // get current user
    let uid;
    if ( auth.currentUser ) {
        uid = auth.currentUser.uid;
    }
    
   
    const fetchAsyncStorage = () => {
        if ( uid === undefined ) {
            router.replace(`auth/login`);
        } else {
            router.replace(`profile${uid}`);
        }
    }
    
    useEffect(  () => {
        setTimeout( () => fetchAsyncStorage(),5000 );
    }, []);
    
    return (
        <Intro />
        // <Product/>
        // <Home/>
    );
}

export default Page;