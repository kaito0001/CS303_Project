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
import { getDocsFunc } from '../../firebase/firestore';

// import images
import tablet from '../../../assets/tablet-716.png';
import logo from '../../../assets/rayashop_coupon_code.png';
import img1 from '../../../assets/1714395540744.png';
import img2 from '../../../assets/1714470708786.png';
import img3 from '../../../assets/171447050982.png';
import img4 from '../../../assets/1714470993568.png';
import img5 from '../../../assets/1714397650490.png';
const offers = [
    { img: img2 },
    { img: img3 },
];
const DATA = [
    { id : 1,name: "mobile and tablet ", img:  tablet},
    { id : 2,name: "televisions ", img:tablet },
    { id : 3,name: "large appliances ", img:tablet},
    { id : 4,name: "small appliances ", img:  tablet},
    { id : 5,name: "Kitchen Appliances ", img:tablet},
];

// import global component
import { auth } from "../../firebase/config"; 


import homeStyle from './styleSheets/homeStyle';
import { Ionicons } from '@expo/vector-icons';
import Product from '../../components/product/Product';

const Cart = () => {
    const [pressed, setPressed] = useState(false);
    const [categories, setCategories] = useState([]);
    const [allProducts, setallProducts] = useState([]);
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [isSearching, setIsSearch] = useState(false);

       // useEffect
       useEffect(() => {
        fetchCategories();
    }, []);
   
      useEffect(() => {
        fetchProducts();
    }, []);

    
    // functions
    const fetchCategories = async () => {
        try {
            const categoriesData = await getDocsFunc('categories');
            setCategories(categoriesData);
            
        } catch (error) {
            console.error(error);
        }
    }

    const fetchProducts = async () => {
        try {
            const productsData = await getDocsFunc('products');
            setallProducts(productsData);
            setProducts(productsData)
            
        } catch (error) {
            console.error(error);
        }
    }

    const searchItems = (searchFor) => {
        const filteredProducts = allProducts.filter((product) => {
            return product.title.includes(searchFor);
        });
        setProducts(filteredProducts);
    };

    
    

    return (
        <View style ={{flex : 1}}>
                <View style={homeStyle.header}>
                
                    <Pressable
                    >
                        <Image source={logo} style={homeStyle.logo}></Image>
                </Pressable>
                
                    <View style={homeStyle.box}>
                        <Ionicons name="search-circle-outline" size={40} color="black" />
                        <TextInput
                        style={homeStyle.input}
                        placeholder="search for products "
                        onChangeText={(text) => {
                                        setSearch(text);
                                        searchItems(text);
                                        setIsSearch(true);
                                        if(!text){
                                            setIsSearch(false);
                                        }
                                    }}
                                    value={search}
                        />
                    </View>
            </View>
            {(isSearching) ? (
              
                <FlatList
                    
                    data={products}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <ProductItem product={item} />
                    )}
                />
            ) : (
                <ScrollView nestedScrollEnabled={true} style={{ backgroundColor: '#fafcfg' }}>


                    <View style={{ alignItems: 'center', margin: 20 }}>
                        <Pressable
                        >
                            <Image source={img1} style={{ width: 320, height: 60, borderRadius: 10 }}></Image>
                        </Pressable>
                        <FlatList
                            
                            horizontal={true}
                            data={offers}
                            renderItem={({ item }) => (
                                <Pressable
                                    style={{ margin: 30 }}
                                >
                                    <Image source={item.img} style={{ width: 290, height: 150, borderRadius: 20 }}></Image>
                                </Pressable>
                            )}
                        // keyExtractor={(item) => item.id.toString()} // Convert id to string
                        />
                        <View style={{ flexDirection: 'row', borderRadius: 10, backgroundColor: '#fafcfb' }}>
                            <Pressable
                            >
                                <Image source={img4} style={{ width: 150, height: 150, borderRadius: 20, marginRight: 10 }}></Image>
                            </Pressable>
                            <Pressable
                            >
                                <Image source={img5} style={{ width: 150, height: 150, borderRadius: 20, marginRight: 10 }}></Image>
                            </Pressable>
                        </View>
                        <Text style={homeStyle.title}> Categories </Text>
                    
                        <FlatList
                            style={homeStyle.list}
                            numColumns={2}
                            data={categories}
                            renderItem={({ item }) => (
                                <Pressable style={{ margin: 20, alignItems: 'center' }}>
                                    <Image source={item.image} style={{ width: 50, height: 50, margin: 20 }}></Image>
                                    <Text style={homeStyle.txt}>{item.category}</Text>
                                </Pressable>
                            )}
                        />
                    
                
                            
                        <Text style={homeStyle.title}> OUR TOP OFFERS </Text>
                        <FlatList
                            style={homeStyle.list}
                            horizontal={true}
                            data={products}
                            renderItem={({ item }) => (
                                <Product product={item}></Product>
                            )}
                        />


                    </View>
                    <StatusBar backgroundColor="#001b46" />
                
                </ScrollView>
            )}
            </View>
        )

}

export default Cart;
