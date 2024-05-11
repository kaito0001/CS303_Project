import { FlatList, StyleSheet, Text, TextInput, View, StatusBar } from "react-native";
import React, { useEffect, useState } from "react";
import {router, useLocalSearchParams} from "expo-router";
import ProductItem from "../../components/product/Product";
import Header from "../../components/header/Header"
import ProductsStyle from "./stylesheets/Stylesheets";
import { getDocsFunc,getDocFunc, addDocFunc,getProductsByCategory, getProductsBysubCategory, addProduct } from "../../firebase/firestore";
import { Ionicons } from '@expo/vector-icons';


const Products= () =>{
  const { categoryName } = useLocalSearchParams();
  const [cname] = useState(categoryName);
  const [allProducts, setallProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');


  const getProducts =async() => {
    let prod;
    if(cname){
    prod =await getProductsByCategory(cname);
  }else{
     prod= await getDocsFunc('products');
  }
    setProducts(prod);
    setallProducts(prod);

}
  useEffect(() => {
    getProducts();
  }, []);
 
  const searchItems = (searchFor) => {
    const filteredProducts = allProducts.filter((product) => {
        return product.title.toLowerCase().includes(searchFor.toLowerCase());
    });
    setProducts(filteredProducts);
};
  

  return (
    <View style={ProductsStyle.Container}>

      <View style={ProductsStyle.header}>
         <View style={ProductsStyle.box}>
             <Ionicons name="search-circle-outline" size={40} color="black" />
                                    <TextInput
                                    style={ProductsStyle.input}
                                    placeholder="search for products "
                                    onChangeText={(text) => {
                                        setSearch(text);
                                        searchItems(text);
                                    }}
                                    value={search}
                                    />
                                </View>
                </View>

            <FlatList
             style={ProductsStyle.list}
            data={products}
            numColumns={2}
           
            renderItem={({ item }) => (
                <ProductItem product={item}/>
            )}
             />
            
            <StatusBar backgroundColor="#001b46"/>

        </View>
  );
}

export default Products;
