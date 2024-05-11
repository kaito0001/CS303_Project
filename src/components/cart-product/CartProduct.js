import {
    View,
    Image,
    Pressable,
    Text
    
} from "react-native";
import productStyle from './styleSheets/Stylesheet';
import dislike from '../../../assets/favorite_40dp_FILL0_wght200_GRAD0_opsz40.png'
import like from '../../../assets/favorite_40dp_FILL1_wght200_GRAD0_opsz40.png';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useState , useEffect } from "react";
import { AntDesign } from '@expo/vector-icons';
import { getWishList,addToWishList,deleteWishListItem } from "../../firebase/wishlist";
import { addCartItem, deleteCartItem, getCart } from "../../firebase/cart";
import { auth } from "../../firebase/config";
import { router } from "expo-router";

const CartProduct = ({item}) => {

    const [liked, setLiked] = useState(false);
    const [isdeleted, setIsDeleted] = useState(false);


     useEffect(() => {
    fetchCartList();
    fetchWishList();
  }, []);
 


let uid;
   if ( auth.currentUser ) {
       uid = auth.currentUser.uid;
   }

    const handleLikePressed= async()=>{
        if(liked){ 
        await deleteWishListItem(uid,item.id);
        setLiked(false);
        }
        else {
        await addToWishList(uid,item)
        setLiked(true);
        }
        router.replace('cart');
    }
    const fetchWishList = async () => {
        try {
            const wishlistData = await getWishList(uid);
            wishlistData.forEach(element => {
            if(element.id===item.id){
                setLiked(true);
            }
            });
            
        } catch (error) {
            console.error(error);
        }
    }
    const handleDeletePressed= async()=>{
        if(isdeleted){ 
        await deleteCartItem(uid,item.id);
        setIsDeleted(true);
        }
        else {
        await addCartItem(uid,item)
        setIsDeleted(false);
        }
        router.replace('cart');

    }
    const fetchCartList = async () => {
        try {
            const cartData = await getCart(uid);
            cartData.forEach(element => {
            if(element.id===item.id){
                setIsDeleted(true);
            }
            });
            
        } catch (error) {
            console.error(error);
        }
        }

    return (
        <View style={productStyle.container} >
            <View style ={{width:'80%'}}>
                <Pressable
                    style={{flexDirection : 'row' , marginBottom : 5 ,marginLeft : 5}}
                >
                    <Image src={item.images[0]} style={productStyle.img}></Image>
                    <View style={{justifyContent : 'center'}}>
                        <Text style={{ fontSize: 10, width: '75%', marginLeft: 15 }}>{item.title}</Text>
                        {
                            (item.discount_price)?<View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 15 }}>
                        <Text style={productStyle.price}>{item.discount_price}</Text>
                            <Text style={productStyle.oldPrice}>{item.price}</Text>
                            </View> 
                    :
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 15 }}>
                        <Text style={productStyle.price}>{item.price}</Text>
                            </View> 
                    
                        }
                        </View>
                </Pressable>
                <View style={productStyle.qty }>
                    <Text style={{ fontSize : 10 }}>QTY</Text>
                    <Pressable
                    >
                        <AntDesign name="minus" size={20} color="gray" />

                    </Pressable>
                    <Text style={ {fontWeight:'bold'}}> N </Text>
                    <Pressable
                    >
                        <AntDesign name="plus" size={20} color="gray" />                       
                    </Pressable>

                    
                </View>

            </View>
            <View style={ productStyle.op}>
                <Pressable
                    style={productStyle.like}
                    onPress={()=> handleLikePressed()}
                >
                    {(liked) ?
                        <Image source={like} style={{ width: 25, height: 25 ,marginBottom : 10}}></Image>:
                        <Image source={dislike} style={{ width: 25, height: 25 ,marginBottom : 10}}></Image> 
                        
                    }
                </Pressable>

                <Pressable
                    style={productStyle.delete}
                    onPress={()=>handleDeletePressed()}
                    >
                    <MaterialIcons name="delete" size={25} color="#ff6a5f"  />
                </Pressable>
            </View>
            
        </View>
    )
}

export default CartProduct;