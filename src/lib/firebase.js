import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-58994.firebaseapp.com",
  projectId: "reactchat-58994",
  storageBucket: "reactchat-58994.appspot.com",
  messagingSenderId: "249070804852",
  appId: "1:249070804852:web:ad17ebdd0f3289b9919621"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
