import React from 'react';
import { AntDesign, Entypo, EvilIcons, Feather, FontAwesome, FontAwesome5, FontAwesome6, Fontisto, Ionicons, MaterialIcons, MaterialCommunityIcons, Octicons, SimpleLineIcons, Zocial } from '@expo/vector-icons';

// Exporting each icon component with a unique name
export const ordersIcon = () => <FontAwesome6 name="book-bookmark" size={24} color="#97c3e4" />;
export const wishlistIcon = () => <FontAwesome6 name="clipboard-list" size={24} color="#97c3e4" />;
export const addressIcon = () => <Entypo name="address" size={24} color="#97c3e4" />;
export const settingsIcon = () => <AntDesign name="setting" size={24} color="#97c3e4" />;
export const helpIcon = () => <Feather name="help-circle" size={30} color="#001b46" />;
export const aboutIcon = () => <Octicons name="info" size={30} color="#001b46" />;
export const backIcon = () => <Ionicons name="chevron-back" size={20} color="#fff" />;
export const aboutUsIcon = () => <FontAwesome name="users" size={24} color="black" />;
export const termsIcon = () => <Ionicons name="newspaper-outline" size={24} color="black" />;
export const privacyIcon = () => <Feather name="lock" size={24} color="black" />;
export const FAQsIcon = () => <MaterialCommunityIcons name="message-processing-outline" size={24} color="black" />;
export const contactUsIcon = () => <Feather name="phone" size={24} color="black" />;
export const userIcon = () => <Feather name="user" size={24} color="#687887" />
export const locatoinIcon = () => <EvilIcons name="location" size={24} color="#687887" />;
export const phoneIcon = () => <Feather name="phone" size={24} color="#687887" />;
export const editIcon = () => <FontAwesome name="edit" size={28} color="#0041cf" />;
export const deleteIcon = () => <FontAwesome6 name="trash-can" size={28} color="red" />
export const emailIcon = () => <MaterialCommunityIcons name="email-fast-outline" size={24} color="#687887" />
export const passIcon = () => <Octicons name="lock" size={24} color="#687887" />


// Exporting all icons as a single object
const IconLibrary = {
    orders: ordersIcon,
    wishlist: wishlistIcon,
    address: addressIcon,
    settings: settingsIcon,
    help: helpIcon,
    about: aboutIcon,
    back: backIcon,
    aboutUs: aboutUsIcon,
    terms: termsIcon,
    privacy: privacyIcon,
    FAQs: FAQsIcon,
    contactUs: contactUsIcon,
    user: userIcon,
    location: locatoinIcon,
    phone: phoneIcon,
    edit:editIcon,
    delete: deleteIcon,
    email: emailIcon,
    pass: passIcon,
};

export default IconLibrary;
