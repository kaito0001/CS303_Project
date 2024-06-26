import React, { useState, useEffect } from 'react';
import { router } from 'expo-router';
import {
    View,
    StatusBar
} from 'react-native';

// global components import
import Header from '../../components/header/Header';
import Choice from '../../components/choice/Choice';

const Help = () => {
    return (
        <View>
            
            <Header title={'HELP'} onBackPress={() => router.replace(`profile`)}></Header>
            
            <Choice title={'FAQs'} icon={'FAQs'}></Choice>
            
            <Choice title={'Contact Us'} icon={'contactUs'}></Choice>
            
            <StatusBar backgroundColor="#001b46"/>

        </View>
    )
}

export default Help;