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

const getUsers = async () => {
  try {
    const q = query(collection(db, "users"));
    const userSnapshot = await getDocs(q);
    const usersList = userSnapshot.docs.map((doc) => {
      return { ...doc.data() };
    });
    console.log("Fetched all users:\n", usersList);
    return usersList;
  } catch (error) {
    console.error("Error fetching users: ", error);
    return [];
  }
};

const getUser = async (id) => {
  try {
    const docRef = doc(db, "users", id);
    const userPromise = await getDoc(docRef);
    console.log("Fetched user with ID: ", id);
    const user = userPromise.data();
    return user;
  } catch (error) {
    console.error(`Error getting user with ID: ${id}   error: ${error}`);
    return null;
  }
};

const editUser = async (id, user) => {
  try {
    const docRef = doc(db, "users", id);
    await setDoc(docRef, user);
    console.log("edited user with ID: ", id);
  } catch (error) {
    console.error(`Error getting user with ID: ${user.id}   error: ${error}`);
  }
};

const deleteUserFS = async (id) => {
  try {
    const docRef = doc(db, "users", id);
    await deleteDoc(docRef);
    console.log("Deleted user with ID: ", id);
  } catch (error) {
    console.error("Error deleting user: ", error);
  }
};

const addUser = async (user, uid) => {
  try {
    await setDoc(doc(db, "users", uid), user);
    console.log("Document written with ID: ", uid);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}

export { getUsers, getUser, addUser, editUser, deleteUserFS };
