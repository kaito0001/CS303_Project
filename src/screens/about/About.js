import React, { useState, useEffect } from 'react';
import { router } from 'expo-router';
import {
    View,
} from 'react-native';

// global components import
import Header from '../../components/header/Header';
import Choice from '../../components/choice/Choice';

const About = () => {
    return (
        <View>
            
            <Header title={'ABOUT'} onBackPress={() => router.replace(`profile`)}></Header>
            
            <Choice title={'Who we are'} icon={'aboutUs'}></Choice>
            
            <Choice title={'Terms & Conditions'} icon={'terms'}></Choice>
            
            <Choice title={'Privacy Policy'} icon={'privacy'} onPress={() => router.replace('privacy')}></Choice>
            
        </View>
    )
}

export default About;