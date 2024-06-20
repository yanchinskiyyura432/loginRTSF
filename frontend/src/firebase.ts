import { initializeApp } from "firebase/app";
import dotenv from "dotenv";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
const API_KEY = process.env.API_KEY;
const firebaseConfig = {
  apiKey: "AIzaSyCuEBAL4445bG6BR4kfy6ifQiqF7qQo-7M",
  authDomain: "logreg-9bbc4.firebaseapp.com",
  projectId: "logreg-9bbc4",
  storageBucket: "logreg-9bbc4.appspot.com",
  messagingSenderId: "489104494219",
  appId: "1:489104494219:web:12c8a443aefc45409e4e8e"
};

const app = initializeApp(firebaseConfig);
const googleAuthProvider = new GoogleAuthProvider();
export { app, googleAuthProvider, getAuth };