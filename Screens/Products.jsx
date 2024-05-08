import { FlatList, StyleSheet, Text, TextInput, View, ActivityIndicator, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";
import MyButton from "../components/MyButton";
import { router } from "expo-router";
import { getDocsFunc,getDocFunc, addDocFunc,getProductsByCategory, getProductsBysubCategory } from "../firebase/products";
import productsData from "../components/Television.json";


export default function Products() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [DATA, setDATA] = useState([]);
  const [text, setText] = useState("");



  const products =async() => {
    const prod =await getProductsByCategory("mobile");
    setData(prod);
     setLoading(false);
        

}

  
  useEffect(() => {
    products();
  }, []);
 

  

  return isLoading ? (
    <ActivityIndicator />
  ) : (
    <View style={styles.top}>
      <View style={styles.top1}>
        {/* <Text>{text}</Text> */}
        <View style={styles.sideBySide}>
        <TextInput
            style={styles.input}
            placeholder="Search for"
            onChangeText={(t) => {
              setText(t);
              searchItems(t);
            }}
          />
          <TextInput
            style={styles.input}
            placeholder="Search for"
            onChangeText={(t) => {
              setText(t);
              searchItems(t);
            }}
          />
          <MyButton color="red" onPress={() => searchItems(text)}>
            {({ pressed }) => (
              <Text style={styles.text}>
                {pressed ? "Searching" : "Search"}
              </Text>
            )}
          </MyButton>
        </View>
      </View>
      <View style={styles.top1}>
        <MyButton color="blue" onPress={() => products()}>
          {({ pressed }) => (
            <Text style={styles.text}>
              {pressed ? "Refreshing" : "Refresh"}
            </Text>
          )}
        </MyButton>
      </View>
      <FlatList
        style={styles.list}
        data={data}
        // keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductItem
            product={item}

          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  top: {
    flex: 1,
    margin: 5,
    padding: 15,
    width: "100%",
  },
  top1: {
    flex: 0.1,
    margin: 5,
    padding: 15,
    // backgroundColor: "yellow",
    width: "100%",
  },
  input: {
    flex: 1,
    backgroundColor: "white",
    fontSize: 32,
  },
  list: {
    flex: 0.9,
    margin: 5,
    // padding: 15,
    // backgroundColor: "yellow",
    width: "100%",
  },
  sideBySide: {
    flex: 1,
    flexDirection: "row",
    // backgroundColor: "white",
    // justifyContent: "center",
    // alignContent:"center",
    // alignItems: "center",
    justifyContent: "space-between",
    // flexWrap: "wrap"
  },
  text: { color: "white" },
});
