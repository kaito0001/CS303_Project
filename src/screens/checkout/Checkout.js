import React, { useState, useEffect, useCallback } from 'react';
import { router } from 'expo-router';
import {
    View,
    StatusBar,
    Image,
    Text,
    TextInput,
    Pressable,
    FlatList,
    ScrollView
} from 'react-native';


// import global component
import { auth } from "../../firebase/config"; 
import Header from '../../components/header/Header';
import Address from '../profile/screens/myaddress/components/Address';
import checkOutStyle from './stylesheets/Stylesheet';
import { AntDesign } from '@expo/vector-icons';
import checked from '../../../assets/checked.png';
import unchecked from '../../../assets/unchecked.png';
import { deleteCart, getCart } from '../../firebase/cart';
import { addOrder, deleteOrder } from '../../firebase/order';
import { getAddresses } from '../../firebase/address';

const testAddress = {
    name: 'Sherif Omar',
    phoneNumber: '01145902559',
    address: {
        bullding: '58',
        street: 'Ebad El Rahman',
        area: 'Mokkatam',
        governorate: 'Cairo',
        floor: '9',
        apartment: '3'
    },
    default: true,
    addressName: 'Home',
}


const Checkout = () => {

    // get user
    let uid;
    if ( auth.currentUser ) {
        uid = auth.currentUser.uid;
    }
    
    const [address, setAddress] = useState(null);
    const [pressed, setPressed] = useState(false);


    const [cart, setCart] = useState([]);

    const [order, setOrder] = useState();
    const ORDER = [{ }];

    useEffect(() => {
        // console.log(uid);
        fetchcart();
    }, []);

    // get default address
    useEffect(() => {
        const fetchDefaultAddress = async () => {
            const addresses = await getAddresses(uid);
            const address = addresses.find((address) => 
                address.default
            )
            
            setAddress(address);
        }

        fetchDefaultAddress();
    },[])

    const fetchcart = async () => {
        try {
            const cartData = await getCart(uid);
            setCart(cartData);
        } catch (error) {
            console.error(error);
        }
    }

    const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
    const day = ('0' + currentDate.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
};

const getCurrentTime = () => {
    const date = new Date();
    return `${date.getHours() > 12 ? date.getHours() - 12 : date.getHours()}:${('0' + date.getMinutes()).slice(-2)} ${date.getHours() > 12 ? 'PM' : 'AM'}`;
};

const getBill = () => {
    let sum = 0;
    cart.map((item) => {
        sum += item.numericPrice;
    });
    return sum; // Return the total bill
}

    const submitHandler = async () => {
        const items = cart.map((item) => {
            return {title: item.title, quantity: item.quantity}
        })
        const order = {
            id: Math.random().toString(),
            date: getCurrentDate(),
            time: getCurrentTime(),
            status: 'Awaiting Processing',
            paymentStats: 'Not Paid',
            bill: getBill(),
            phoneNumber: address.phoneNumber,
            address: address.address,
            quantity: cart.length,
            items: items,
        }
        setOrder(order);
        
        await addOrder(uid, order).then( async () => {
            await deleteCart(uid);
            router.replace('home')
        }).catch((error) => console.error(error))
    }

    // use it on deleting order
    const deleteOrderHandler = async () => {
        await deleteOrder(uid, order.id);
    }

    return (
        <View style = {{flex : 1}}>
            <Header title={'checkout'} onBackPress={() => router.replace('cart')}></Header>
            <ScrollView >
                {address && 
                    <Address address={address} />
                }

                <View style={checkOutStyle.page}> 
                    
                    <View style={{ alignItems: 'center' }}>
                        
                            <Text style={checkOutStyle.text} > Pay with </Text>
                            <Pressable style={checkOutStyle.pay} >
                                <AntDesign name="pluscircleo" size={20} color="black" />
                                <Text> Cash </Text>{
                                    (!pressed) ?
                                        <Image source={unchecked} style={checkOutStyle.img}></Image>
                                        :<Image source={checked} style={checkOutStyle.img}></Image>
                                        }
                                
                            </Pressable>
                        
                        </View>
                        
                        <Text style={checkOutStyle.text} > Payment Summary </Text>
                        <View style = {checkOutStyle.details}>
                            
                            
                            <FlatList
                                data={cart}
                                renderItem={({ item }) => (
                                    <View style ={checkOutStyle.detail}>
                                        <Text style = {{fontSize : 10 ,margin : 5 ,width :'75%'}}> {item.title}</Text>
                                        <Text style = {{fontSize : 10,margin : 5,width :'25%'}}>{item.discount_price }</Text>
                                    </View>
                                )}
                                // keyExtractor={(item) => item.id.toString()} // Convert id to string
                            />
                            <View style={checkOutStyle.total}>
                                    
                                            <Text style = {{fontSize : 15,margin : 5 ,width : '75%'}}> Total Amount</Text>
                                            <Text style = {{fontSize : 15,margin : 5,width : '25%'}}>25000</Text>
                            </View>
                                
                    </View>
                    <Pressable style={checkOutStyle.Button2} onPress={submitHandler}>
                        <Text style={checkOutStyle.ButtonTxT2}> SUBMIT </Text>
                    </Pressable>

                </View>
            </ScrollView>
        </View>
        )

}

export default Checkout;
