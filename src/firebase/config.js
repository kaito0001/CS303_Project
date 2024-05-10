// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4r4li06mImW0vl6bZ-MToZWsojBQE_rU",
  authDomain: "projectcs303-a0b16.firebaseapp.com",
  projectId: "projectcs303-a0b16",
  storageBucket: "projectcs303-a0b16.appspot.com",
  messagingSenderId: "925152612014",
  appId: "1:925152612014:web:a2ca88ee3d22610dd9e73f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
