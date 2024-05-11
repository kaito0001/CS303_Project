import React, { useState, useEffect, useCallback } from 'react';
import { router } from 'expo-router';
import {
    View,
    Text,
    Pressable,
    StatusBar,
    StyleSheet,
    ScrollView,
} from 'react-native';

import AdminBarStyle from './stylesheets/Stylesheet';

// import global component
import Header from '../../../components/header/Header';

// icons import
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

// import pages component
import Admin from '../admin/Admin'
import AddProduct from '../addproduct/AddProduct';
import Orders from '../orders/Orders';
const AdminBar = () => {

    // useStates
    const [component, setComponent] = useState('Admin');
    
    // functions
    const switchPages = () => {
        switch (component) {
            case 'Admin':
                return <Admin></Admin>
            case 'AddProduct':
                return  <AddProduct></AddProduct>
            case 'Orders':
                return <Orders></Orders>
        }
    }
    

    return (
        <View style={AdminBarStyle.container}>
            
            {switchPages()}
            
            <View style={AdminBarStyle.toolBar}>

                <Pressable onPress={() => setComponent('Orders')}>
                    <FontAwesome6 name="book-bookmark" size={30} color={component === 'Orders' ? '#006cb7' : '#000'}/>
                </Pressable>
                <Pressable onPress={() => setComponent('AddProduct')}>
                    <Entypo name="add-to-list" size={30}
                                            color={component === 'AddProduct' ? '#006cb7' : '#000'}/>
                </Pressable>
                <Pressable onPress={() => setComponent('Admin')}>
                    <MaterialCommunityIcons name="shield-account-outline" size={30}
                                            color={component === 'Admin' ? '#006cb7' : '#000'}/>
                </Pressable>
                
            </View>
            <StatusBar backgroundColor="#001b46"/>

        </View>
    )
}

export default AdminBar;