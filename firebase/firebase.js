// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatbase } from "firebase/database"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDg9015aFLYFDrJP4wYJlTm9ryd6KZk2pM",
  authDomain: "playground-774f3.firebaseapp.com",
  databaseURL: "https://playground-774f3-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "playground-774f3",
  storageBucket: "playground-774f3.appspot.com",
  messagingSenderId: "856610794357",
  appId: "1:856610794357:web:03b5c4f7968bc145cd013c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatbase(app); 

