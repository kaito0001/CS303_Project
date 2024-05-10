import React, { useState, useEffect, useCallback } from 'react';
import { router } from 'expo-router';
import {
    View,
    StatusBar,
    StyleSheet,
    FlatList,
    Image,
    Text
} from 'react-native';

// import global component
import img from '../../../../assets/shopping-cart-with-cross-mark-wireless-paymant-icon-shopping-bag-failure-paymant-sign-online-shopping-vector_662353-912.jpg';
import Button from '../../../components/buttton/Buttton';

const EmptyCart = () => {


    return (
    <View>

        
        <View style={{ paddingHorizontal: '6%' , alignItems: 'center' ,marginTop : 25}}>
                <Image source={img} style={{height : 300 , width : 300}}></Image>
        </View>
        
        <View style={{padding: '3%', alignItems: 'center'}}>
                <Text style={ styles.text}>
                You haven't added any products to your cart yet ,
            </Text>
            <Text style={ styles.text}>
                browser products now, add products to cart and 
            </Text>
            <Text style={ styles.text}>
                checkout in a few steps
            </Text>
        </View>
        
        <View style={{paddingHorizontal: '6%'}}>
            <Button title={'Browser Products'} main={true}></Button>
        </View>
    </View>
   )}

export default EmptyCart;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: '5%',
        

    },
    text: {
        fontSize: 12,
        color : '#727272'
    }
})