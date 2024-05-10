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

const DATA = [
    { name: "mobile and tablet ", img: "https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/f/x/fxpswrq_f3sxmwnvbnt97g2o.png?format=webp&width=368",price : 5000},
    { name: "televisions ", img: "https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/f/x/fxpswrq_f3sxmwnvbnt97g2o.png?format=webp&width=368" ,price : 5000},
    { name: "large appliances ", img: "https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/f/x/fxpswrq_f3sxmwnvbnt97g2o.png?format=webp&width=368",price : 5000 },
    { name: "small appliances ", img: "https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/f/x/fxpswrq_f3sxmwnvbnt97g2o.png?format=webp&width=368" ,price : 5000},
    { name: "Kitchen Appliances ", img:"https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/f/x/fxpswrq_f3sxmwnvbnt97g2o.png?format=webp&width=368",price : 5000 },
];

const FilledCart = () => {


    return (
        <View style={ filledStyles.container}>
            <FlatList
                style={filledStyles.list}
                data={DATA}
                renderItem={({item}) => (
                    <CartProduct discription={item.name} img={item.img} price={item.price }></CartProduct>
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

