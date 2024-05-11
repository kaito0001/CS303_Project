import React from 'react';
import { Image, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { height, width } from '@fortawesome/free-solid-svg-icons/fa0';
import category1 from '../../../assets/category (1).png';
import category2 from '../../../assets/category.png';

import blackhome from '../../../assets/Home_icon_black.png';
import bluehome from '../../../assets/Home_icon_blue-1.png';
import cart1 from '../../../assets/shopping-cart-2029.png';
import cart2 from '../../../assets/shopping-cart-1989.png';
import profile1 from '../../../assets/user (4).png';
import profile2 from '../../../assets/user (3).png';

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
                backgroundColor: 'white',
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                borderColor: 'black',
                borderWidth : 1
            }
        }}>
            <Tabs.Screen
            name="home"
            options={{
                title: 'home',
                tabBarIcon: ({ focused }) => {
                    return (
                        <View style={{
                            alignItems: 'center',
                            paddingTop: 16,
                            borderTopColor: focused ? '#d8e9f3' : 'white',
                            borderTopWidth: 2,
                            
                        }}>
                            <Image
                            source= {focused? bluehome : blackhome }
                                style ={{height : 30 , width : 30 ,}}
                            >
                                
                            </Image>

                        </View>
                    )
                },
                headerShown: false ,
            }}
            />

            
            <Tabs.Screen
            name="category"
            options={{
                title: 'category',
                tabBarIcon: ({ focused }) => {
                    return (
                        <View style={{
                            alignItems: 'center',
                            paddingTop: 16,
                            borderTopColor: focused ? '#d8e9f3' : 'white',
                            borderTopWidth : 2
                        }}>
                            <Image
                            source={ focused ? category1 : category2 }
                                style ={{height : 22 , width : 22}}
                            >
                                
                            </Image>

                        </View>
                    )
                },
                headerShown: false ,
            }}
            />
            <Tabs.Screen
            name="cart"
            options={{
                title: 'cart',
                tabBarIcon: ({ focused }) => {
                    return (
                        <View style={{
                            alignItems: 'center',
                            paddingTop: 16,
                            borderTopColor: focused ? '#d8e9f3' : 'white',
                            borderTopWidth : 2
                        }}>
                            <Image
                            source={ focused ? cart1 : cart2 }
                                style ={{height : 24 , width : 24}}
                            >
                                
                            </Image>

                        </View>
                    )
                },
                headerShown: false ,
            }}
            />

            <Tabs.Screen
            name="profile"
            options={{
                title: 'profile',
                tabBarIcon: ({ focused }) => {
                    return (
                        <View style={{
                            alignItems: 'center',
                            paddingTop: 16,
                            borderTopColor: focused ? '#d8e9f3' : 'white',
                            borderTopWidth: 2,
                            
                        }}>
                            <Image
                            source={ focused ? profile1 : profile2 }
                                style ={{height : 22 , width : 22}}
                            >
                                
                            </Image>

                        </View>
                    )
                },
                headerShown: false ,
            }}
            />
    </Tabs>
  );
}
