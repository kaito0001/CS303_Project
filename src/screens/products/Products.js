import { FlatList, StyleSheet, Text, TextInput, View, StatusBar } from "react-native";
import React, { useEffect, useState } from "react";
import {router, useLocalSearchParams} from "expo-router";
import ProductItem from "../../components/product/Product";
import Header from "../../components/header/Header"
import ProductsStyle from "./stylesheets/Stylesheets";
import { getDocsFunc,getDocFunc, addDocFunc,getProductsByCategory, getProductsBysubCategory, addProduct } from "../../firebase/firestore";



const Products= () =>{
  const { categoryName } = useLocalSearchParams();
  const [cname] = useState(categoryName);
  const [data, setData] = useState([]);




  const getProducts =async() => {
    const prod =await getProductsByCategory(cname);
    setData(prod);

}
  useEffect(() => {
    getProducts();
  }, []);
 

  

  return (
    <View style={ProductsStyle.Container}>

            <Header title={'PROFILE'}/>

            <FlatList
             style={ProductsStyle.list}
            data={data}
            numColumns={2}
            // keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <ProductItem product={item}/>
            )}
             />
            
            <StatusBar backgroundColor="#001b46"/>

        </View>
  );
}

export default Products;
