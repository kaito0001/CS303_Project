import React, { useState, useEffect } from 'react';
import { router } from 'expo-router';
import {
    View,
    Text,
    Pressable,
} from 'react-native';

// stylesheet import
import ChoiceStyle from './stylesheets/Stylesheet';

// icons import
import { Ionicons } from '@expo/vector-icons';

// icons library import
import IconLibrary from '../icons/icons';

const Choice = ({title, icon, onPress}) => {
    
    // icons import from icons library
    const IconComponent = IconLibrary[icon];
    
    return (
        <View style={ChoiceStyle.choice} >
            <Pressable style={ChoiceStyle.info} onPress={onPress} >
                <View style={{flexDirection: 'row', alignItems: 'center'}} >
                    <IconComponent/>
                    <Text style={ChoiceStyle.txt}>{title}</Text>
                </View>
                <Ionicons style={{ transform: [{ scaleX: -1 }] }} name="chevron-back" size={30} color="#001b46" />
            </Pressable>
        </View>
    )
}

export default Choice;