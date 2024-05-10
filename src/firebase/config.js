// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjIkWNHTh3XFPBHEuDsJpeOuKUcXI2Zjk",
  authDomain: "raya-d1ace.firebaseapp.com",
  projectId: "raya-d1ace",
  storageBucket: "raya-d1ace.appspot.com",
  messagingSenderId: "416684850161",
  appId: "1:416684850161:web:b898095db3228f98dde250"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
