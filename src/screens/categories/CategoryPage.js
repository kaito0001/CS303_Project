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


// const DATA = [
//     { id : 1,name: "mobile and tablet ", img: tablet },
//     { id : 2,name: "televisions ", img: "https://rayashop.hypernode.io/media/catalog/category/tv_home_theater_2x.png" },
//     { id : 3,name: "large appliances ", img: "https://rayashop.hypernode.io/media/catalog/category/large_appliances_2x.png" },
//     { id : 4,name: "small appliances ", img: "https://rayashop.hypernode.io/media/catalog/category/small_appliances_2x.png" },
//     { id : 5,name: "Kitchen Appliances ", img: "https://rayashop.hypernode.io/media/catalog/category/kitchen_appliances_2x.png" },
// ];

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
                    numColumns={2}
                    // keyExtractor={(item) => item.id}
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
                    keyExtractor={(item) => item.category} // Convert id to string
                    />  
            )}


            <StatusBar backgroundColor="#001b46"/>
                
        </View>
    )
}

export default CategoryPage;

