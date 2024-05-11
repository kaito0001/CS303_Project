import React from 'react';
import { Image } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
export default function TabLayout() {
    return (
        <Tabs screenOptions={{ 
            headerShown: false,
            tabBarStyle: {
                position: "absolute",
                bottom: 0,
                right: 0,
                left: 0,
                height: 72,
                elevation: 0,
                backgroundColor:'white'
            }
        }}>
            <Tabs.Screen
            name="home"
            options={{
                title: 'Home',
                headerShown: false ,
                tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color="black" />,
            }}
            />
            
            <Tabs.Screen
            name="category"
            options={{
                title: 'category',
                headerShown: false ,
                tabBarIcon: ({ color }) => <MaterialIcons name="category" size={24} color="black" />,
            }}
            />
            <Tabs.Screen
            name="cart"
            options={{
                title: 'cart',
                headerShown: false ,
                tabBarIcon: ({ color }) => <Feather name="shopping-cart" size={24} color="black" />,
            }}
            />

            <Tabs.Screen
            name="profile"
            options={{
                title: 'Profile',
                headerShown: false ,
                tabBarIcon: ({ color }) => <AntDesign name="profile" size={24} color="black" />,
            }}
            />
    </Tabs>
  );
}
