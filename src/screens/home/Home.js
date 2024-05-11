import React, { useState, useEffect, useCallback } from 'react';
import { router , useLocalSearchParams} from 'expo-router';
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
import IconLibrary from '../../components/icons/icons';
const IconComponent = IconLibrary['back'];


// import images
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


// import global component
import { auth } from "../../firebase/config"; 


import homeStyle from './styleSheets/homeStyle';
import { Ionicons } from '@expo/vector-icons';
import Product from '../../components/product/Product';

const Home = () => {
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
        <View style ={{flex : 1 }}>
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
            ) : (
                <ScrollView nestedScrollEnabled={true} style={{ backgroundColor: '#fafcfg' , flex : 1}}>

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
                                    <Image source={img5 } style={{ width: 150, height: 150, borderRadius: 20, marginRight: 10 }}></Image>
                            </Pressable>
                        </View>
                        <Text style={homeStyle.title}> Categories </Text>
                    
                        <FlatList
                                style={{ backgroundColor : 'white', borderRadius : 10}}
                            numColumns={2}
                            data={categories}
                            renderItem={({ item }) => (
                                <Pressable style={{ marginHorizontal : 10, alignItems: 'center' }} onPress={() => router.replace(`products?categoryName=${item.category}`)} >
                                    <Image source={{ uri :item.image }} style={{ width: 100, height: 100, margin: 20 }}></Image>
                                    <Text style={homeStyle.txt}>{item.category}</Text>
                                </Pressable>
                            )}
                        />
                    
                
                            
                        <Text style={homeStyle.title}> OUR TOP OFFERS </Text>
                        <FlatList
                            style={{marginBottom: 60}}
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

export default Home;
