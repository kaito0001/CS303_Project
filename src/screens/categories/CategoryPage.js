import React, { useState, useEffect, useCallback } from 'react';
import {
    View,
    StatusBar,
    FlatList,
    Text
} from 'react-native';

// import global component
import Header from '../../components/header/Header';
import categoryStyle from './styleSheet/categoryStyle';
import Category from './components/Category';
import tablet from '../../../assets/tablet-716.png'

const DATA = [
    { id : 1,name: "mobile and tablet ", img: tablet },
    { id : 2,name: "televisions ", img: "https://rayashop.hypernode.io/media/catalog/category/tv_home_theater_2x.png" },
    { id : 3,name: "large appliances ", img: "https://rayashop.hypernode.io/media/catalog/category/large_appliances_2x.png" },
    { id : 4,name: "small appliances ", img: "https://rayashop.hypernode.io/media/catalog/category/small_appliances_2x.png" },
    { id : 5,name: "Kitchen Appliances ", img: "https://rayashop.hypernode.io/media/catalog/category/kitchen_appliances_2x.png" },
];

const CategoryPage = () => {

    const [pressed, setPressed] = useState(false);
    const [categories, setCategories] = useState([]);

    return (
        <View style={ categoryStyle.inputContainer}>

            <Header title={'Categories'} showSearch={true}/>

        <FlatList
            style={categoryStyle.list}
            data={DATA}
            renderItem={({ item }) => (
                <Category name={item.name} img={item.img} />
            )}
            keyExtractor={(item) => item.id.toString()} // Convert id to string
        />


            <StatusBar backgroundColor="#001b46"/>
                
        </View>
    )
}

export default CategoryPage;

