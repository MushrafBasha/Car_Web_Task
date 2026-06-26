// firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBI7tdghcb-BfWD2uZY4t0-rIqjyQaGnkU",
  authDomain: "car-shop-d0675.firebaseapp.com",
  projectId: "car-shop-d0675",
  storageBucket: "car-shop-d0675.firebasestorage.app",
  messagingSenderId: "844539787717",
  appId: "1:844539787717:web:fc90fb2bcc5bb4ce35b3ac",
  measurementId: "G-XH6DDVPCMY",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;