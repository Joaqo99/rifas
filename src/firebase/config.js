// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlDVS0Goj5rdFNGab4aEsMyLOHWvRvW60",
  authDomain: "rifas-20477.firebaseapp.com",
  projectId: "rifas-20477",
  storageBucket: "rifas-20477.appspot.com",
  messagingSenderId: "545120876141",
  appId: "1:545120876141:web:4bc1d3dd57364d7f70f164"
};

// Initialize Firebase
export const Firebaseapp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);