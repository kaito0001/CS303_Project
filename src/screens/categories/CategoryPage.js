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


const CategoryPage = () => {

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
        <View style={ categoryStyle.inputContainer}>

                            <View style={categoryStyle.header}>
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
              
                <FlatList
                    style={categoryStyle.list}
                    data={products}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <ProductItem product={item}/>
                    )}
                    />
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

