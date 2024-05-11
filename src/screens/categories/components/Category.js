import { View ,Image,Text, Pressable } from "react-native";
import {router, useLocalSearchParams} from "expo-router";
import categoryStyle from "./styleSheet/categoryStyle";
import { AntDesign } from '@expo/vector-icons';

const Category = ({ name, img }) => {

    return (
        <Pressable 
            style ={categoryStyle.inputContainer}
            onPress={() => router.replace(`products?categoryName=${name}`)}
        >
            <Image src={img} style={categoryStyle.img } ></Image>
            <Text style={ categoryStyle.text}>{name}</Text>
            <AntDesign name="rightcircleo" size={20} color="black" style={{marginHorizontal : 20} } />
        </Pressable>

    );

}
export default Category;