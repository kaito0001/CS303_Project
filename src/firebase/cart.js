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
  
  const getCart = async (id) => {
    try {
      const docRef = doc(db, "cart", id);
      const productsPromise = await getDoc(docRef);
      console.log("Fetched products with ID: ", id);
      const productsList = productsPromise.data().products;
      return productsList;
    } catch (error) {
      console.error(`Error getting addresses with ID: ${id}   error: ${error}`);
      return null;
    }
};

  const deleteCart = async (id) => {
    try {
      const docRef = doc(db, 'cart', id);
      await deleteDoc(docRef);
      console.error(`Deleted cart with ID: ${id}`);      
    } catch (error) {
      console.error(`Error deleting cart with ID: ${id}   error: ${error}`);
      return null;
    }
  }


const deleteCartItem = async (userId, productId) => {
    try {
      const docRef = doc(db, "cart", userId);
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
  
const addCartItem = async (userId, product) => {
    try {
        const docRef = doc(db, "cart", userId);
        const productsDoc = await getDoc(docRef); 

        if (!userId) {
            console.log(userId);
        }

        if (!productsDoc) {
          console.log("User document not found");
          return null;
      }

      let productsList;
      if(productsDoc.data() == undefined){
        productsList = [];
      }
      else{
        productsList = productsDoc.data().products;
      }
        productsList.push(product);
  
        await setDoc(docRef, { products: productsList });
        console.log("added product with ID: ", product.id);
        } catch (error) {
        console.error(`Error adding product with ID: ${product.id}   error: ${error}`);
        }
}
  
  export { getCart, deleteCart, addCartItem,  deleteCartItem  };
