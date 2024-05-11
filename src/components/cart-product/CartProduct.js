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
import { useState } from "react";
import { AntDesign } from '@expo/vector-icons';



const CartProduct = ({item}) => {

    const [liked, setLiked] = useState(false);


    
    return (
        <View style={productStyle.container} >
            <View style ={{width:'80%'}}>
                <Pressable
                    style={{flexDirection : 'row' , marginBottom : 5}}
                >
                    <Image src={item.images[0]} style={productStyle.img}></Image>
                    <View style={{justifyContent : 'center'}}>
                        <Text style={{ fontSize: 10 ,width :'50%'}}>{item.title}</Text>
                        <View style ={{flexDirection : 'row' ,alignItems :'center'}}>
                        <Text style={productStyle.price}>{item.discount_price}</Text>
                            <Text style={productStyle.oldPrice}>{item.price}</Text>
                            </View>
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
                >
                    {(liked) ?
                        <Image source={like} style={{ width: 25, height: 25 ,marginBottom : 10}}></Image>:
                        <Image source={dislike} style={{ width: 25, height: 25 ,marginBottom : 10}}></Image> 
                        
                    }
                </Pressable>

                <Pressable
                    style={productStyle.delete}
                    >
                    <MaterialIcons name="delete" size={25} color="#ff6a5f"  />
                </Pressable>
            </View>
            
        </View>
    )
}

export default CartProduct;