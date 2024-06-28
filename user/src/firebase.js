// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-state-35a70.firebaseapp.com",
  projectId: "real-state-35a70",
  storageBucket: "real-state-35a70.appspot.com",
  messagingSenderId: "928576563309",
  appId: "1:928576563309:web:93c6b3b4413b6a7a49f764"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);