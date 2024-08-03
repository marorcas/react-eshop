// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqNzOzFOY7Y6oN_PWV_qBCj8IWwHhrAzQ",
  authDomain: "react-eshop-430d3.firebaseapp.com",
  projectId: "react-eshop-430d3",
  storageBucket: "react-eshop-430d3.appspot.com",
  messagingSenderId: "995812875714",
  appId: "1:995812875714:web:cdc9de689863da973b8a5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);