import { StyleSheet, Text, Pressable, View, Image } from "react-native";

import MyButton from "./MyButton";

export default function ProductItem({
  product
}) {
  return (
    
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={product.image} />
     
      <View style={styles.main}>
        <Text style={styles.mutual}>{product.title}</Text>
      </View>
      </View>
  
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // backgroundColor: "yellow"
  },
  item: {
    // backgroundColor: "#f9c2ff",
    padding: 5,
    marginVertical: 1,
    // marginHorizontal: 16,
    flexDirection: "row",
    // justifyContent: "space-between",
    height: 108,
  },
  title: {
    flex: 1,
    fontSize: 15,
    // maxHeight:70,
    overflow: "hidden",
  },
  mutual: {
    // flex: 1,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "right",
  },
  imageContainer: {
    width: 110,
    height: 110,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
    objectFit: "contain",
  },
  sideBySide: {
    flexDirection: "row",
  },
  button1: {
    flex:1,
    marginHorizontal:2,
    backgroundColor: "rgb(27,116,228)",
    borderRadius: 6,
  },
  button2: {
    flex:1,
    marginHorizontal:2,
    backgroundColor: "red",
    borderRadius: 6,
  }
});
