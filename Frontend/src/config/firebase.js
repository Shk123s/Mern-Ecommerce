// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJA-14YeAr0Ijo3x32X0_aH0q_q_WEcmU",
  authDomain: "react-contactapp-5d012.firebaseapp.com",
  projectId: "react-contactapp-5d012",
  storageBucket: "react-contactapp-5d012.appspot.com",
  messagingSenderId: "413029212213",
  appId: "1:413029212213:web:68afe6691d2af52a99d17c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);