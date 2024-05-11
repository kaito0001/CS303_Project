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
import { getCart } from '../../firebase/cart';
import { addOrder } from '../../firebase/order';

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
    
    const [address, setAddress] = useState([testAddress]);
    const [pressed, setPressed] = useState(false);


    const [cart, setCart] = useState([]);

    const [order, setOrder] = useState([]);

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
    const handleSubmit = () => {
        
    }
    

    return (
        <View style = {{flex : 1}}>
            <Header title={'checkout'} onBackPress={true}></Header>
            <ScrollView >
                <Address address={testAddress} />

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
                    <Pressable style={checkOutStyle.Button2} onPress={handleSubmit()}>
                <Text style={checkOutStyle.ButtonTxT2}> SUBMIT </Text>
                </Pressable>

                </View>
            </ScrollView>
        </View>
        )

}

export default Checkout;
