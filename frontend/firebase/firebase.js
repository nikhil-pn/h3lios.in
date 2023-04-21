import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDotEbZh6I8VeYGtK0kfGB9wOIrcCviXXU",
  authDomain: "h3lios-484f2.firebaseapp.com",
  projectId: "h3lios-484f2",
  storageBucket: "h3lios-484f2.appspot.com",
  messagingSenderId: "1091252393390",
  appId: "1:1091252393390:web:5729d217d0ded6cd04243f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
