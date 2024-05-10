import React, { useState, useEffect, useCallback } from 'react';
import { router } from 'expo-router';
import {
    View,
    Text,
    Alert,
    Switch,
    FlatList,
    Platform,
    TextInput,
    StatusBar,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    Pressable,
} from 'react-native';

// stylesheet import
import AddProductStyle from './stylesheets/Stylesheet';

// global components import
import Header from '../../../components/header/Header';
import Buttton from '../../../components/buttton/Buttton';

const AddProduct = () => {
    
    // useState
    const [title, setTitle] = useState();
    const [brand, setBrand] = useState();
    const [price, setPrice] = useState();
    const [discountPrice, setDiscountPrice] = useState();
    const [isOffered, setIsOffered] = useState(false);
    const [quantity, setQuantity] = useState();
    const [isAvailable, setIsAvailable] = useState(true);
    const [category, setCategory] = useState();
    const [description, setDiscription] = useState();
    
    // functions
    const handleAddProduct = () => {
        // .........
        // only add if all data exist otherwise call the nonCompeletInputs alert
    }
    
    const nonCompeletInputs = () => {
        return Alert.alert('Non Complete Data','Please enter all product information.', [
            {
                text: 'Ok',
            },
        ])
    };
    
    
    return (
        <ScrollView style={AddProductStyle.container} >
            
            <Header title={'ADD PRODUCT'}></Header>
            
            <View style={{marginHorizontal: '6%', marginBottom: 30}} >
                
                <View style={AddProductStyle.Container} >
                    <Text style={AddProductStyle.h}>Basic Information</Text>
                    <TextInput
                        style={[AddProductStyle.textInput, AddProductStyle.inputContainer, Platform.OS === 'web' && AddProductStyle.webTextInput]}
                        placeholder="Title"
                        placeholderTextColor="#99a4b4"
                        onChangeText={setTitle}
                        value={title}
                    />
                    <TextInput
                        style={[AddProductStyle.textInput, AddProductStyle.inputContainer, Platform.OS === 'web' && AddProductStyle.webTextInput]}
                        placeholder="Brand"
                        placeholderTextColor="#99a4b4"
                        onChangeText={setBrand}
                        value={brand}
                    />
                    <TextInput
                        style={[AddProductStyle.textInput, AddProductStyle.inputContainer, Platform.OS === 'web' && AddProductStyle.webTextInput]}
                        placeholder="Category"
                        placeholderTextColor="#99a4b4"
                        onChangeText={setCategory}
                        value={category}
                    />
                </View>
                
                <View style={AddProductStyle.Container} >
                    <Text style={AddProductStyle.h} >Price</Text>
                    <TextInput
                        style={[AddProductStyle.textInput, AddProductStyle.inputContainer]}
                        placeholder="Price (EGP)"
                        placeholderTextColor="#99a4b4"
                        onChangeText={setPrice}
                        value={price}
                        inputMode="numeric"
                    />
                    <View style={AddProductStyle.switch}>
                        <Text style={AddProductStyle.h} >Discount Price</Text>
                        <Switch
                            trackColor={{false: '#999', true: '#999'}}
                            thumbColor={isOffered ? "#006cb7" : "#aaa"}
                            onValueChange={() => setIsOffered(!isOffered)}
                            value={isOffered}
                        />
                    </View>
                    {isOffered ? (
                        <View>
                            <TextInput
                                style={[AddProductStyle.textInput, AddProductStyle.inputContainer]}
                                placeholder="Discount Price"
                                placeholderTextColor="#99a4b4"
                                onChangeText={setDiscountPrice}
                                value={discountPrice}
                                inputMode="numeric"
                                />
                        </View>
                    ) : (
                        <></>
                    )}
                </View>
                
                <View style={AddProductStyle.Container} >
                    <Text style={AddProductStyle.h}>Stock</Text>
                    <TextInput
                        style={[AddProductStyle.textInput, AddProductStyle.inputContainer, Platform.OS === 'web' && AddProductStyle.webTextInput]}
                        placeholder="Quantity"
                        placeholderTextColor="#99a4b4"
                        onChangeText={setQuantity}
                        value={quantity}
                        inputMode="numeric"
                    />
                </View>
                
                <View style={AddProductStyle.Container} >
                    <Text style={AddProductStyle.h}>Descrition</Text>
                    <TextInput
                        style={[AddProductStyle.textInput, AddProductStyle.inputContainer, Platform.OS === 'web' && AddProductStyle.webTextInput]}
                        placeholder="Description"
                        placeholderTextColor="#99a4b4"
                        onChangeText={setDiscription}
                        value={description}
                        multiline
                    />
                </View>
                
                <Buttton title={'Add Product'} onPress={nonCompeletInputs} main={true}></Buttton>
            </View>
            
            <StatusBar backgroundColor="#001b46"/>
        </ScrollView>
    )
}

export default AddProduct;