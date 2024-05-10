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

// icons import
import { EvilIcons } from '@expo/vector-icons';

// image picker import
import * as ImagePicker from 'expo-image-picker';

// storage functions import
import { uploadImageAsync } from '../../../firebase/storage';

// firestore functions import
import { addDocFunc } from '../../../firebase/firestore';

const AddProduct = () => {
    
    // useState
    const [title, setTitle] = useState();
    const [brand, setBrand] = useState();
    const [price, setPrice] = useState();
    const [discountPrice, setDiscountPrice] = useState('');
    const [isOffered, setIsOffered] = useState(false);
    const [quantity, setQuantity] = useState();
    const [category, setCategory] = useState();
    const [description, setDiscription] = useState();
    
    const [images, setImages] = useState([]);
    
    // functions
    const handleAddProduct = async () => {
        if (title && brand && category && quantity && description && price) {
            try {
                const prodData = {
                    title: title,
                    brand: brand,
                    category: category,
                    images: images,
                    isAvailable: true,
                    price: price,
                    discountPrice: discountPrice,
                    description: description,
                    quantity: quantity
                }
                const collection = 'products';
                await addDocFunc(collection, prodData);
            } catch (e) {
                console.error(e);
            }
        } else {
            nonCompeletInputs();
        }
    }
    
    const nonCompeletInputs = () => {
        return Alert.alert('Non Complete Data','Please enter all product information.', [
            {
                text: 'Ok',
            },
        ])
    };

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
        });
        const pickerResult = result.assets[0];
        try {
            if (!pickerResult.cancelled) {
                const uploadUrl = await uploadImageAsync(pickerResult.uri);
                const imgs = [...images, uploadUrl];
                setImages(imgs)
            }
        } catch (e) {
            console.log(e);
            alert("Upload failed, Please try later.");
        }
    };
    
    return (
        <View style={AddProductStyle.container} >
            
            <Header title={'ADD PRODUCT'}></Header>
            
            <ScrollView style={{paddingHorizontal: '6%'}} >
                
                <View style={[AddProductStyle.Container, {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}]} >
                    <Text style={AddProductStyle.h}>Upload Image ({images.length})</Text>
                    <Pressable onPress={pickImage} >
                        <EvilIcons name="image" size={40} color="black" />
                    </Pressable>
                </View>
                
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
                
                <View style={{marginBottom: 30}} >
                    <Buttton title={'Add Product'} onPress={handleAddProduct} main={true}></Buttton>
                </View>
            </ScrollView>
            
            <StatusBar backgroundColor="#001b46"/>
        </View>
    )
}

export default AddProduct;