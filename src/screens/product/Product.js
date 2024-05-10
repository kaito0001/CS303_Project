import { FlatList, StyleSheet, Text,  View, StatusBar,Image, Dimensions , ScrollView} from "react-native";
import React, { useEffect, useState } from "react";
import { Entypo ,AntDesign} from '@expo/vector-icons';
import Header from "../../components/header/Header";

import ProductStyle from "./stylesheets/Stylesheets";
import { getDocsFunc,getDocFunc, addDocFunc,getProductsByCategory, getProductsBysubCategory, addProduct, getProduct } from "../../firebase/products";
import Buttton from "../../components/buttton/Buttton";


const screenwidth = Dimensions.get('window').width;
const screenheight = Dimensions.get('window').height;

const Product= () =>{
  const [prod, setProd] = useState([]);
  const id='zRZZ9F9JeYGO0Koz36IN';



  const getProducts =async() => {
     const data =await getProduct(id);
     setProd(data);
}
  useEffect(() => {
    getProducts();
  }, []);
 

  

  return (
    <View style={ProductStyle.Container}>
        <Header title={'PROFILE'}/>
        <ScrollView style={ProductStyle.box}>
            <FlatList
        data={prod.images}
        renderItem={({ item }) => (
          <View style={{
            alignItems: 'center',
            width: screenwidth,
          }}>
            <Image source={{ uri: item }} style={ProductStyle.image} />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
            {/* <Image source={prod.images[0]} style={ProductStyle.image}/> */}
            <View style={{flexDirection:'row', justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
        <AntDesign name="star" size={24} color="#e5e8ec" />
        <AntDesign name="star" size={24} color="#e5e8ec" />
        <AntDesign name="star" size={24} color="#e5e8ec" />
        <AntDesign name="star" size={24} color="#e5e8ec" />
        <AntDesign name="star" size={24} color="#e5e8ec" />
        </View>
        <Text style={ProductStyle.title}>{prod.title}</Text>
        <View >
         {
         prod.discount_price!=''?
          <View style={{flexDirection:'row' , alignItems:'center',margin:10}}>
          <Text style={ProductStyle.price}>{prod.discount_price}</Text>
          <Text style={ProductStyle.discount_price}>{prod.price}</Text>
          </View>
         :<Text style={ProductStyle.price}>{prod.price}</Text>
        }
        </View>
        <Buttton title={'Add to cart'} main={true}/>
        <View>
          <Text>Product Desc</Text>
          <Text>{prod.description}</Text>
        </View>
        
        </ScrollView>


        <StatusBar backgroundColor="#001b46"/>

    </View>
  );
}

export default Product;