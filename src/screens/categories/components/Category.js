import { View ,Image,Text, Pressable } from "react-native";

import categoryStyle from "./styleSheet/categoryStyle";
import { AntDesign } from '@expo/vector-icons';

const Category = ({ name, img }) => {

    return (
        <Pressable style ={categoryStyle.inputContainer}>
            <Image source={img} style={categoryStyle.img } ></Image>
            <Text style={ categoryStyle.text}>{name}</Text>
            <AntDesign name="rightcircleo" size={20} color="black" style={{marginHorizontal : 20} } />
        </Pressable>

    );

}
export default Category;