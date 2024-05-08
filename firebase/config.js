// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_gGivvg4W-XlvPo71zZClTkEsJ0h_IQc",
  authDomain: "user-todos-c6179.firebaseapp.com",
  projectId: "user-todos-c6179",
  storageBucket: "user-todos-c6179.appspot.com",
  messagingSenderId: "1065286519426",
  appId: "1:1065286519426:web:ddcc5a907dff8975a0029b",
  measurementId: "G-6FHS3DVGR5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
