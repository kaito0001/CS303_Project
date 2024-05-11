import { router } from 'expo-router';
import React, { useState, useEffect } from 'react';
import Intro from '../screens/intro/Intro';

import { auth } from '../firebase/config';
import Category from '../screens/categories/CategoryPage';
import Cart from '../screens/cart/Cart';
import Home from '../screens/home/Home';

import { getUser } from '../firebase/users';

const Page = () => {
    
    const [user, setUser] = useState();
    
    // get current user
     let uid;
     if ( auth.currentUser ) {
         uid = auth.currentUser.uid;
     }
    
    // functions
     const fetchCurrentUser = async () => {
         try {
             setUser(await getUser(uid));
             console.log(user)
         } catch (e) {
             console.error(e);
         } finally {
             if ( user && user.isAdmin) {
                 router.replace(`admin`);
            } else {
                 router.replace(`profile`);
            }
         }
     }
    
     useEffect(  () => {
         setTimeout( () => fetchCurrentUser(),5000 );
     }, []);
    
    return (
        <Intro/>
    );
}

export default Page;