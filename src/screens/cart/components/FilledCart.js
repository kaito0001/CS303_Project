import React, { useState, useEffect, useCallback } from 'react';
import { router } from 'expo-router';
import {
    View,
    StatusBar,
    StyleSheet,
    FlatList,
    Image,
    Text,
    Pressable
} from 'react-native';

// import global component
import Button from '../../../components/buttton/Buttton';
import CartProduct from '../../../components/cart-product/CartProduct'
import masterCard from '../../../../assets/Mastercard-Logo.png';
import visa from '../../../../assets/pngegg.png';
import filledStyles from './stylesheets/Stylesheet';
import { auth } from "../../../firebase/config"; 
import { getCart } from '../../../firebase/cart';



const FilledCart = () => {
    const [cart, setCart] = useState([]);

    let uid;
    if ( auth.currentUser ) {
        uid = auth.currentUser.uid;
    }

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

    return (
        <View style={ filledStyles.container}>
            <FlatList
                style={filledStyles.list}
                data={cart}
                renderItem={({item}) => (
                    <CartProduct item={item}></CartProduct>
                )}
            />

            <View style={ filledStyles.pay}>
            <Pressable style={filledStyles.Button} >
                <Text style={filledStyles.ButtonTxT}>Pay with raya installments </Text>
                </Pressable>
            <Text style={{}}>OR </Text>
                 <Pressable style={filledStyles.Button2} >
                <Text style={filledStyles.ButtonTxT2}>Proceed to checkout </Text>
                </Pressable>

                <View style = {{flexDirection : 'row' ,justifyContent: 'spaceBetween' ,alignItems : 'center' }}>
                    <Image source={masterCard} style={filledStyles.img}></Image>
                    <Image source={visa} style ={filledStyles.img2}></Image>
                </View>
            </View>
    </View>
   )}

export default FilledCart;

