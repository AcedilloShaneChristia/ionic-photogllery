import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDrnltuGGb7YRfXsSA8m2yo7r-QX03Z8no",
  authDomain: "crud-photogallery.firebaseapp.com",
  databaseURL: "https://crud-photogallery-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "crud-photogallery",
  storageBucket: "crud-photogallery.firebasestorage.app",
  messagingSenderId: "475765708190",
  appId: "1:475765708190:web:d68d5a99a2a915755d328f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
export const db = getDatabase(app);