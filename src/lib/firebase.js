// Import the necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase configuration object containing keys and identifiers for your Firebase project
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,         // API key stored in environment variable for security
  authDomain: "reactchat-58994.firebaseapp.com", // Firebase Auth domain specific to your project
  projectId: "reactchat-58994",                  // Firebase project ID
  storageBucket: "reactchat-58994.appspot.com",  // Cloud Storage bucket URL
  messagingSenderId: "249070804852",             // Sender ID used for Firebase Cloud Messaging
  appId: "1:249070804852:web:ad17ebdd0f3289b9919621" // Firebase app ID
};

// Initialize Firebase app with the provided configuration
const app = initializeApp(firebaseConfig);

// Initialize Firebase services and export them for use in other parts of your application
export const auth = getAuth();       // Authentication service
export const db = getFirestore();    // Firestore database service
export const storage = getStorage(); // Cloud Storage service