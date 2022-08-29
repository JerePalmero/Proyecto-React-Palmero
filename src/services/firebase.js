// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBVmrZmZ9BKjZQQymjrjNwurrst3F6u98E",
  authDomain: "valper-travel.firebaseapp.com",
  projectId: "valper-travel",
  storageBucket: "valper-travel.appspot.com",
  messagingSenderId: "90663698079",
  appId: "1:90663698079:web:40d219449d3d4c4985acaa",
  measurementId: "G-XJKPXN0QYK"
};

const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app);




export default firestoreDB;
