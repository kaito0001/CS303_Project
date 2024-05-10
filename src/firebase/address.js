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
  
  const getAddress = async (userId, addressId) => {
    try {
        const docRef = doc(db, "addresses", userId);
        const addressesDoc = await getDoc(docRef);

        if (!addressesDoc) {
            console.log("User document not found");
            return null;
        }

        const addressesList = addressesDoc.data().addresses;

        const foundAddress = addressesList.find(address => address.id === addressId);

        if (!foundAddress) {
            console.log("Address not found");
            return null;
        }

        console.log("Found address:", foundAddress);
        return foundAddress;
    } catch (error) {
        console.error("Error fetching addresses: ", error);
        return null;
    }
  };

  const getAddresses = async (id) => {
    try {
      const docRef = doc(db, "addresses", id);
      const addressesPromise = await getDoc(docRef);
      console.log("Fetched addresses with ID: ", id);
      const addressesList = addressesPromise.data().addresses;
      return addressesList;
    } catch (error) {
      console.error(`Error getting addresses with ID: ${id}   error: ${error}`);
      return null;
    }
  };
  
  const editAddress = async (userId, addressId, address) => {
    try {
      const docRef = doc(db, "addresses", userId);
      const addressesDoc = await getDoc(docRef); 

      if (!addressesDoc) {
        console.log("User document not found");
        return null;
    }

      const addressesList = addressesDoc.data().addresses;

      const index = addressesList.findIndex((address) => address.id === addressId);

      if(index === -1){
        console.log("Address not found with ID: ", addressId);
        return;
      }

      addressesList.splice(index, 1);
      addressesList.push({...address, id: addressId});

      await setDoc(docRef, { addresses: addressesList });
      console.log("edited address with ID: ", addressId);
    } catch (error) {
      console.error(`Error getting address with ID: ${addressId}   error: ${error}`);
    }
  };
  
  const deleteAddress = async (userId, addressId) => {
    try {
      const docRef = doc(db, "addresses", userId);
      const addressesDoc = await getDoc(docRef); 

      if (!addressesDoc) {
        console.log("User document not found");
        return null;
    }

      const addressesList = addressesDoc.data().addresses;

      const index = addressesList.findIndex((address) => address.id === addressId);

      if(index === -1){
        console.log("Address not found with ID: ", addressId);
        return;
      }

      addressesList.splice(index, 1);

      await setDoc(docRef, { addresses: addressesList });
      console.log("deleted address with ID: ", addressId);
    } catch (error) {
      console.error(`Error deleting address with ID: ${addressId}   error: ${error}`);
    }
  };
  
  const addAddress = async (userId, address) => {
    try {
        const docRef = doc(db, "addresses", userId);
        const addressesDoc = await getDoc(docRef); 

        if (!addressesDoc) {
          console.log("User document not found");
          return null;
      }

      let addressesList;
      if(addressesDoc.data() == undefined){
        addressesList = [];
      }
      else{
        addressesList = addressesDoc.data().addresses;
      }
        addressesList.push(address);
  
        await setDoc(docRef, { addresses: addressesList });
        console.log("added address with ID: ", address.id);
      } catch (error) {
        console.error(`Error adding address with ID: ${address.id}   error: ${error}`);
      }
  }

  const setAllNotDefault = async (userId) => {
    try {
      const docRef = doc(db, "addresses", userId);
      const addressesDoc = await getDoc(docRef); 

      if (!addressesDoc) {
        console.log("User document not found");
        return null;
    }

      if(addressesDoc.data() == undefined){
        return;
      }
      const addressesList = addressesDoc.data().addresses;

      const newAddressList = addressesList.map((address) => {
        return {...address, default: false}
      })

      await setDoc(docRef, { addresses: newAddressList });
      console.log("edited addresses with ID: ", userId);
    } catch (error) {
      console.error(`Error editing addresses with ID: ${userId}   error: ${error}`);
    }
  }
  
  export { getAddress,getAddresses, addAddress, editAddress, deleteAddress, setAllNotDefault };
  