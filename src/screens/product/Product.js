import { FlatList, StyleSheet, Text,  View, StatusBar,Image, Dimensions , ScrollView,Pressable} from "react-native";
import {router, useLocalSearchParams} from "expo-router";
import React, { useEffect, useState } from "react";
import { Entypo ,AntDesign,Ionicons} from '@expo/vector-icons';
import ProductItem from '../../components/product/Product'
import ProductStyle from "./stylesheets/Stylesheets";
import { getProductsByCategory, getProduct } from "../../firebase/firestore";
import Buttton from "../../components/buttton/Buttton";
import { auth } from "../../firebase/config";
import IconLibrary from '../../components/icons/icons';
import { addToWishList, deleteWishListItem, getWishList } from "../../firebase/wishlist";
import { addCartItem } from "../../firebase/cart";
const screenwidth = Dimensions.get('window').width;
const screenheight = Dimensions.get('window').height;

const Product= ({id}) =>{
  const [item, setItem] = useState([]);
  const [simprod, setSimProd] = useState([]);
  const [liked,setLiked]=useState(false);
  const IconComponent = IconLibrary['back'];

   let uid;
   if ( auth.currentUser ) {
       uid = auth.currentUser.uid;
   }

  const handleLikePressed= async()=>{
    if(liked){ 
      await deleteWishListItem(uid,id);
      setLiked(false);
    }
    else {
      await addToWishList(uid,item)
      setLiked(true);
    }
  }
  const fetchWishList = async () => {
    try {
        if(uid){
        const wishlistData = await getWishList(uid);
        wishlistData.forEach(element => {
          if(element.id===id){
            setLiked(true);
        }
        });
      }
        
        
    } catch (error) {
        console.error(error);
    }
    }
  const handleCartPress =async() => {
      addCartItem(uid, item);

  }

  const getItem =async() => {
    try {
      const data = await getProduct(id); 
      setItem(data);
    } catch (error) {
      console.log(error);
    }
}
// const getSimProd =async() => {
//   try {
//     if (item) { 
//       const data = await getProductsByCategory(item.category);
//       setSimProd(data);
//     }
//   } catch (error) {
//     console.log(error);
//   }
   
// }
  useEffect(() => {
    getItem();
    fetchWishList();
  }, []);
 

  

  return (
    <View style={ProductStyle.Container}>
        <View style={ProductStyle.header}>
          <Pressable style={ProductStyle.back} onPress={()=> router.replace(`home`)} >
          <IconComponent/>
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
        
        {/* <Text style={ProductStyle.textSimilar}>SIMILAR PRODUCTS</Text> */}
        {/* <FlatList
        horizontal={true}
        data={simprod}
        renderItem={({ item }) => (
          <View style={{height:'100%'}}>
          <ProductItem product={item}/>
          </View>
        )}
        style={[ProductStyle.list]}
        keyExtractor={(item) => item.id}
        
        /> */}
        </ScrollView>


        <StatusBar backgroundColor="#001b46"/>

    </View>
  );
}

export default Product;
