import React, { useState, useEffect, useCallback } from 'react';
import { router } from 'expo-router';
import {
    View,
    StatusBar,
    StyleSheet,

} from 'react-native';

// import global component
import Header from '../../components/header/Header';
import { auth } from "../../firebase/config"; 
import { getCart } from '../../firebase/cart';

// import cart components
import FilledCart from './components/FilledCart';
import EmptyCart from './components/EmptyCart';

const Cart = () => {
    

    // get current user
    let uid;
    if ( auth.currentUser ) {
        uid = auth.currentUser.uid;
    }
    
    // useStates
    const [cart, setCart] = useState([]);



    useEffect(() => {
        console.log(uid);
        fetchcart();
    }, []);
    


    const fetchcart = async () => {
        try {
            const cartData = await getCart(uid);

            setCart(cartData);

        } catch (error) {
            console.error(error);
        }
        
    }
    

    if (cart && cart.length === 0 ||cart ===null ) {
        return (
            <View style={ {flex : 1} }>

                <Header title={'MY CART' + ' ' + `( 0 )`}></Header>

                <EmptyCart></EmptyCart>
                <StatusBar backgroundColor="#001b46" />
                
            </View>
        )
    } else { 
        return (
            <View style={ {flex : 1} }>

                <Header title={'MY CART' + ' ' + `(${cart&&cart.length})`} showSearch={true} ></Header>

                <FilledCart></FilledCart>
                <StatusBar backgroundColor="#001b46" />
                
            </View>
        )
    }
}

export default Cart;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: '5%',
        backgroundColor: '#fafcfb',

    },
    list: {
        flex: 1,
        padding: '5%',

    }
})