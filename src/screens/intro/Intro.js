import React from 'react';
import {
        Text,
        View,
        StatusBar,
        StyleSheet,
} from 'react-native';

const Intro = () => {
    return (
        <View style={IntroStyle.container}>
            <Text style={IntroStyle.text}>RAYA</Text>
            <StatusBar style="auto" backgroundColor="#006cb7"/>
        </View>
    );
}

export default Intro;

const IntroStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#006cb7',
    },
    text: {
        color: '#fff',
        fontSize: 50,
        fontWeight: '500',
    },
});