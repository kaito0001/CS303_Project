import { Text, Pressable, View, Image, Alert } from "react-native";
import ProductStyle from "./stylesheets/Stylesheet";
import { Entypo ,AntDesign,Ionicons} from '@expo/vector-icons';
import { useState,useEffect } from "react";
import { router } from "expo-router";
import { auth } from "../../firebase/config";
import { addToWishList, deleteWishListItem,getWishList } from "../../firebase/wishlist";

const Product= ({product}) =>{

  const [liked,setLiked]=useState(false);
  let uid;
   if ( auth.currentUser ) {
       uid = auth.currentUser.uid;
   }
  const handleLikePressed= async()=>{
    if(liked){ 
      await deleteWishListItem(uid,product.id);
      setLiked(false);
    }
    else {
      await addToWishList(uid,product)
      setLiked(true);
    }
  }
  const fetchWishList = async () => {
    try {
        const wishlistData = await getWishList(uid);
        wishlistData.forEach(element => {
          if(element.id===product.id){
            setLiked(true);
        }
        });
        
    } catch (error) {
        console.error(error);
    }
    }
    useEffect(() => {
      fetchWishList();
    }, []);
  if(product.isAvailable){
  return (
      <Pressable style={ProductStyle.Container} onPress={()=> router.replace(`product/${product.id}`)}>
        <Pressable style={ProductStyle.like} onPress={()=> handleLikePressed()}>
          {
            liked? <Entypo name="heart" size={24} color="red" />:<Entypo name="heart-outlined" size={24} color="black" />
          }
        </Pressable>
      <Image style={ProductStyle.image} src={product.images[0]} />
     
      <View style={ProductStyle.box}>
        <View style={{flexDirection:'row'}}>
        <Ionicons name="star" size={24} color={product.rating >0 ? '#fdbc38':"#e5e8ec"} />
        <Ionicons name="star" size={24} color={product.rating >1 ? '#fdbc38':"#e5e8ec"} />
        <Ionicons name="star" size={24} color={product.rating >2 ? '#fdbc38':"#e5e8ec"} />
        <Ionicons name="star" size={24} color={product.rating >3 ? '#fdbc38':"#e5e8ec"} />
        <Ionicons name="star" size={24} color={product.rating ==5 ? '#fdbc38':"#e5e8ec"} />
        </View>
        <Text style={ProductStyle.title}>{product.title}</Text>
        {
         product.discount_price!=''?
          <View >
          <Text style={ProductStyle.price}>{product.discount_price}</Text>
          <Text style={ProductStyle.discount_price}>{product.price}</Text>
          </View>
         :<Text style={ProductStyle.price}>{product.price}</Text>
        }
      </View>
      </Pressable>
  );
  }
}
export default Product;

