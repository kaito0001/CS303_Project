import { FlatList, StyleSheet, Text, TextInput, View, StatusBar } from "react-native";
import React, { useEffect, useState } from "react";
import ProductItem from "../../components/product/Product";
import Header from "../../components/header/Header"
import ProductsStyle from "./stylesheets/Stylesheets";
import { getDocsFunc,getDocFunc, addDocFunc,getProductsByCategory, getProductsBysubCategory, addProduct } from "../../firebase/firestore";



const Products= () =>{
  const [data, setData] = useState([]);




  const getProducts =async() => {
    const prod =await getDocsFunc('products');
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
                <ProductItem
                product={item}
                //         onPress={() => router.navigate(`/product/${product.id}`)}
                //      onConfirm={() => AddToCart(product.id)}
                //     onDelete={() => deleteFromCart(product.id)}
               />
            )}
             />
            
            <StatusBar backgroundColor="#001b46"/>

        </View>
  );
}

export default Products;
