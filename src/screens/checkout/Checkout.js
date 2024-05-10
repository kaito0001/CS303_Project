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

const DATA = [
    { id : 1,name: "mobile and tablet ", price : 5000   },
    { id : 2,name: "televisions ",       price : 5000   },
    { id : 3,name: "large appliances ",  price : 5000  },
    { id : 4,name: "small appliances ",  price : 5000  },
    { id : 5,name: "Kitchen Appliances ",price : 5000   },
];
const pressed = false;
const Checkout = () => {
    
    const [address, setAddress] = useState([testAddress]);



    // get current user
    let uid;
    if ( auth.currentUser ) {
        uid = auth.currentUser.uid;
    }
    
    

    return (
        <View style = {{flex : 1}}>
            <Header title={'checkout'} onBackPress={true}></Header>
            <ScrollView >
                <Address address={testAddress} />

                <View style={checkOutStyle.page}> 
                    
                    <View style={{ alignItems: 'center' }}>
                        
                            <Text style={checkOutStyle.text} > Pay with </Text>
                            <View style={checkOutStyle.pay}>
                                <AntDesign name="pluscircleo" size={20} color="black" />
                                <Text> Cash </Text>{
                                    (!pressed) ?
                                        <Image source={unchecked} style={checkOutStyle.img}></Image>
                                        :<Image source={checked} style={checkOutStyle.img}></Image>
                                        }
                                
                            </View>
                        
                        </View>
                        
                        <Text style={checkOutStyle.text} > Payment Summary </Text>
                        <View style = {checkOutStyle.details}>
                            
                            
                            <FlatList
                                data={DATA}
                                renderItem={({ item }) => (
                                    <View style ={checkOutStyle.detail}>
                                        <Text style = {{fontSize : 10 ,margin : 5}}> {item.name}</Text>
                                        <Text style = {{fontSize : 10,margin : 5}}>{item.price }</Text>
                                    </View>
                                )}
                                // keyExtractor={(item) => item.id.toString()} // Convert id to string
                            />
                            <View style={checkOutStyle.total}>
                                    
                                            <Text style = {{fontSize : 15,margin : 5}}> Total Amount</Text>
                                            <Text style = {{fontSize : 15,margin : 5}}>25000</Text>
                            </View>
                                
                        </View>

                </View>
            </ScrollView>
        </View>
        )

}

export default Checkout;
