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


  const getOrder = async (userId, orderId) => {
    try {
        const docRef = doc(db, "orders", userId);
        const orderDoc = await getDoc(docRef);

        if (!orderDoc) {
            console.log("User document not found");
            return null;
        }

        const orderList = orderDoc.data().orders;

        const foundOrder = orderList.find(order => order.id === orderId);

        if (!foundOrder) {
            console.log("order not found");
            return null;
        }

        console.log("Found order:", foundOrder);
        return foundOrder;
    } catch (error) {
        console.error("Error fetching order: ", error);
        return null;
    }
  };

  const getOrders = async (id) => {
    try {
      const docRef = doc(db, "orders", id);
      const ordersPromise = await getDoc(docRef);
      console.log("Fetched orders with ID: ", id);
      const ordersList = ordersPromise.data().orders;
      return ordersList;
    } catch (error) {
      console.error(`Error getting orders with ID: ${id}   error: ${error}`);
      return null;
    }
  };

  const editOrder = async (userId, orderId, order) => {
    try {
      const docRef = doc(db, "orders", userId);
      const ordersDoc = await getDoc(docRef); 

      if (!ordersDoc) {
        console.log("User document not found");
        return null;
    }

      const ordersList = ordersDoc.data().orders;

      const index = ordersList.findIndex((order) => order.id === orderId);

      if(index === -1){
        console.log("Address not found with ID: ", orderId);
        return;
      }

      ordersList.splice(index, 1);
      ordersList.push({...address, id: orderId});

      await setDoc(docRef, { orders: ordersList });
      console.log("edited order with ID: ", orderId);
    } catch (error) {
      console.error(`Error getting order with ID: ${orderId}   error: ${error}`);
    }
  };
  
  const deleteOrder = async (userId, orderId) => {
    try {
      const docRef = doc(db, "orders", userId);
      const ordersDoc = await getDoc(docRef); 

      if (!ordersDoc) {
        console.log("User document not found");
        return null;
    }

      const ordersList = ordersDoc.data().orders;

      const index = ordersList.findIndex((order) => order.id === orderId);

      if(index === -1){
        console.log("Order not found with ID: ", orderId);
        return;
      }

      ordersList.splice(index, 1);

      await setDoc(docRef, { orders: ordersList });
      console.log("deleted address with ID: ", orderId);
    } catch (error) {
      console.error(`Error deleting address with ID: ${addressId}   error: ${error}`);
    }
  };
  
  const addOrder = async (userId, order) => {
    try {
        const docRef = doc(db, "orders", userId);
        const ordersDoc = await getDoc(docRef); 

        if (!ordersDoc) {
          console.log("User document not found");
          return null;
      }

      let ordersList;
      if(ordersDoc.data() == undefined){
        ordersList = [];
      }
      else{
        ordersList = ordersDoc.data().orders;
      }
        ordersList.push(order);
  
        await setDoc(docRef, { orders: ordersList });
        console.log("added address with ID: ", order.id);
      } catch (error) {
        console.error(`Error adding address with ID: ${order.id}   error: ${error}`);
      }
  }

  const setAllNotDefault = async (userId) => {
    try {
      const docRef = doc(db, "orders", userId);
      const ordersDoc = await getDoc(docRef); 

      if (!ordersDoc) {
        console.log("User document not found");
        return null;
    }

      if(ordersDoc.data() == undefined){
        return;
      }
      const ordersList = ordersDoc.data().orders;

      const newOrderList = ordersList.map((order) => {
        return {...order, default: false}
      })

      await setDoc(docRef, { orders: newOrderList });
      console.log("edited orders with ID: ", userId);
    } catch (error) {
      console.error(`Error editing orders with ID: ${userId}   error: ${error}`);
    }
  }
  
  export { getOrder, getOrders ,addOrder,setAllNotDefault,deleteOrder,editOrder};