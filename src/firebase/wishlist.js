import {
    getDocs,
    doc,
    setDoc,
    addDoc,
    deleteDoc,
    collection,
    query,
    where,
    getDoc,
  } from "firebase/firestore";
  import { db } from "./config";


  const getWishList = async (id) => {
    try {
      const docRef = doc(db, "wishList", id);
      const wishlistPromise = await getDoc(docRef);
      console.log("Fetched wishList with ID: ", id);
      const wishList = wishlistPromise.data().products;
      return wishList;
    } catch (error) {
      console.error(`Error getting wishlist with ID: ${id}   error: ${error}`);
      return null;
    }
  };

  const addToWishList = async (userId, product) => {
    try {
        const docRef = doc(db, "wishList", userId);
        const productsDoc = await getDoc(docRef); 

        if (!productsDoc) {
          console.log("User document not found");
          return null;
      }

      let productList;
      if(productsDoc.data() == undefined){
        productList = [];
      }
      else{
        productList = productsDoc.data().products;
      }
        productList.push(product);

        await setDoc(docRef, { products: productList });
        console.log("added product with ID: ", product.id);
      } catch (error) {
        console.error(`Error adding address with ID: ${product.id}   error: ${error}`);
      }
  }
  const deleteWishListItem = async (userId, productId) => {
    try {
      const docRef = doc(db, "wishList", userId);
      const productsDoc = await getDoc(docRef); 

      if (!productsDoc) {
        console.log("User document not found");
        return null;
    }

      const productsList = productsDoc.data().products;

      const index = productsList.findIndex((product) => product.id === productId);

      if(index === -1){
        console.log("product not found with ID: ", productId);
        return;
      }

      productsList.splice(index, 1);

      await setDoc(docRef, { products: productsList });
      console.log("deleted products with ID: ", productId);
    } catch (error) {
      console.error(`Error deleting product with ID: ${productId}   error: ${error}`);
    }
};

  export {getWishList,addToWishList,deleteWishListItem}