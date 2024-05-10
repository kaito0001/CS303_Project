import { FlatList, StyleSheet, Text,  View, StatusBar,Image, Dimensions , ScrollView,Pressable} from "react-native";
import React, { useEffect, useState } from "react";
import { Entypo ,AntDesign,Ionicons} from '@expo/vector-icons';
import ProductItem from '../../components/product/Product'
import ProductStyle from "./stylesheets/Stylesheets";
import { getDocsFunc,getDocFunc, addDocFunc,getProductsByCategory, getProductsBysubCategory, addProduct, getProduct } from "../../firebase/products";
import Buttton from "../../components/buttton/Buttton";


const screenwidth = Dimensions.get('window').width;
const screenheight = Dimensions.get('window').height;

const Product= () =>{
  const [item, setItem] = useState([]);
  const [simprod, setSimProd] = useState([]);
  const [liked,setLiked]=useState(false);
  const id='zRZZ9F9JeYGO0Koz36IN';

  const handleLikePressed= ()=>{
    if(liked){ 
      setLiked(false);
    }
    else setLiked(true);
  }
  const handleBackPress =async() => {
   
  }
  const handleCartPress =async() => {
   
}

  const getItem =async() => {
     const data =await getProduct(id);
     setItem(data);
}
const getSimProd =async() => {
    const data = await getProductsByCategory(item.category.toString());
    setSimProd(data);
}
  useEffect(() => {
    getItem();
    getSimProd();
  }, []);
 

  

  return (
    <View style={ProductStyle.Container}>
        <View style={ProductStyle.header}>
          <Pressable style={ProductStyle.back} onPress={()=> handleBackPress()} >
            <Ionicons name="arrow-back-circle-outline" size={26} color="white" />
          </Pressable>
        <Pressable style={ProductStyle.like} onPress={()=> handleLikePressed()}>
          {
            liked? <Entypo name="heart" size={24} color="red" />:<Entypo name="heart-outlined" size={24} color="white" />
          }
        </Pressable>
        </View>
        <ScrollView style={ProductStyle.box}  >
            <FlatList
        data={item.images}
        contentContainerStyle={ProductStyle.listImage}
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
      <Text style={ProductStyle.title}>{item.title}</Text>
      <View style={{flexDirection:'row', marginTop: 10}}>
          <Ionicons name="star" size={22} color={item.rating >0 ? '#fdbc38':"#e5e8ec"} />
          <Ionicons name="star" size={22} color={item.rating >1 ? '#fdbc38':"#e5e8ec"} />
          <Ionicons name="star" size={22} color={item.rating >2 ? '#fdbc38':"#e5e8ec"} />
          <Ionicons name="star" size={22} color={item.rating >3 ? '#fdbc38':"#e5e8ec"} />
          <Ionicons name="star" size={22} color={item.rating ==5 ? '#fdbc38':"#e5e8ec"} />
      </View>
        
        <View >
         {
         item.discount_price!=''?
          <View style={ProductStyle.priceField}>
          <Text style={ProductStyle.price}>{item.discount_price}</Text>
          <Text style={ProductStyle.discount_price}>{item.price}</Text>
          </View>
         :<Text style={ProductStyle.price}>{item.price}</Text>
        }
        </View>

        <Buttton title={'Add to cart'} main={true} onPress={()=> handleCartPress()}/>

        <View style={ProductStyle.descriptionField}>
            <Text style={ProductStyle.textDescription}>Product Description</Text>
            <View style={ProductStyle.descriptionBox}>
                <Text style={ProductStyle.description}>{item.description}</Text>
            </View>
        </View>
        
        <Text style={ProductStyle.textSimilar}>SIMILAR PRODUCTS</Text>
        <FlatList
        data={simprod}
        renderItem={({ item }) => (
          <ProductItem product={item}/>
        )}
        style={ProductStyle.list}
        KeyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        initialNumToRender={6} 
        
        />
        </ScrollView>


        <StatusBar backgroundColor="#001b46"/>

    </View>
  );
}

export default Product;