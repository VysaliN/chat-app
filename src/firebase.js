import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAGVfqbMzu_HzJxSYsiMkKaSqXfb2Cx-yo",
  authDomain: "login-5f1ef.firebaseapp.com",
  projectId: "login-5f1ef",
  storageBucket: "login-5f1ef.appspot.com",
  messagingSenderId: "705029482294",
  appId: "1:705029482294:web:1a9ca521883e80037bb597",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
