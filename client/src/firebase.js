// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-42786.firebaseapp.com",
  projectId: "mern-auth-42786",
  storageBucket: "mern-auth-42786.appspot.com",
  messagingSenderId: "304396156853",
  appId: "1:304396156853:web:d08cf47dbab2a48b36a3fc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);