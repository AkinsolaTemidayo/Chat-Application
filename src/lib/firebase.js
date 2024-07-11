import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-15315.firebaseapp.com",
  projectId: "reactchat-15315",
  storageBucket: "reactchat-15315.appspot.com",
  messagingSenderId: "764504842003",
  appId: "1:764504842003:web:5dc5320ae5909a67ce04e6",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
