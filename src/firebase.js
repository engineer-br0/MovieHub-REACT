// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6uF4KOun4OtdT38z496fJyxBAiZmGQvc",
  authDomain: "reactmovieapp-7021d.firebaseapp.com",
  databaseURL: "https://reactmovieapp-7021d-default-rtdb.firebaseio.com",
  projectId: "reactmovieapp-7021d",
  storageBucket: "reactmovieapp-7021d.appspot.com",
  messagingSenderId: "1044366709139",
  appId: "1:1044366709139:web:f4cdf18866539df08fd866"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// Required for side-effects
require("firebase/firestore");
export {db};