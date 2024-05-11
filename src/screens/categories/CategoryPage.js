import React, { useState, useEffect, useCallback } from 'react';
import {router} from "expo-router";
import {
    View,
    StatusBar,
    FlatList,
    Text,
    Pressable,
    TextInput
} from 'react-native';

// import global component
import Header from '../../components/header/Header';
import categoryStyle from './styleSheet/categoryStyle';
import Category from './components/Category';
import ProductItem from "../../components/product/Product";
import tablet from '../../../assets/tablet-716.png';
import { getDocsFunc } from '../../firebase/firestore';
import { Ionicons } from '@expo/vector-icons';
import Product from '../../components/product/Product';

const CategoryPage = () => {

       const [pressed, setPressed] = useState(false);
    const [categories, setCategories] = useState([]);
    const [allProducts, setallProducts] = useState([]);
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [isSearching, setIsSearch] = useState(false);

      useEffect(() => {
          fetchProducts();
        fetchCategories();

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
            if (product && product.title) {
                return product.title.toLowerCase().includes(searchFor.toLowerCase());
            } else {
                return 0;
        }
    });
    setProducts(filteredProducts);
};
    return (
        <View style={ categoryStyle.inputContainer}>

                            <View style={categoryStyle.header}>
                                <Text style={categoryStyle.title}> CATEGORY </Text>
                                <View style={categoryStyle.box}>
                                    <Ionicons name="search-circle-outline" size={40} color="black" />
                                    <TextInput
                                    style={categoryStyle.input}
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
            {isSearching? (                                
              
                <View style={{flex:1,backgroundColor: '#fafcfb'}}>

                                <FlatList
                                data={products}
                                numColumns={2}
                                renderItem={({ item }) => (
                                    <Product product={item}/>
                                )}
                                />
                                
                                <StatusBar backgroundColor="#001b46"/>

                            </View>
                ):(
                <FlatList
                    style={categoryStyle.list}
                    data={categories}
                    renderItem={({ item }) => (
                            <Category name={item.category} img={item.image} />
                    )}
                    keyExtractor={(item) => item.category} 
                    />  
            )}


            <StatusBar backgroundColor="#001b46"/>
                
        </View>
    )
}

export default CategoryPage;

