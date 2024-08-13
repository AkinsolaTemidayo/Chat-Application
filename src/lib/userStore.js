// Import necessary modules
import { create } from "zustand"; // Zustand is a state management library
import { db } from "./firebase"; // Import Firestore instance from your Firebase setup
import { doc, getDoc } from "firebase/firestore"; // Import Firestore methods for document retrieval

// Create a Zustand store to manage user state
export const useUserStore = create((set) => ({
  currentUser: null, // Initial state for the current user
  isLoading: true, // Initial loading state

  // Asynchronous function to fetch user information based on UID
  fetchUserInfo: async (uid) => {
    // If no UID is provided, reset user state and stop loading
    if (!uid) return set({ currentUser: null, isLoading: false });

    try {
      // Reference the user document in the Firestore database
      const docRef = doc(db, "users", uid);

      // Fetch the document snapshot
      const docSnap = await getDoc(docRef);

      // If the document exists, update the store with user data and set loading to false
      if (docSnap.exists()) {
        set({ currentUser: docSnap.data(), isLoading: false });
      } else {
        // If the document doesn't exist, reset user state and stop loading
        set({ currentUser: null, isLoading: false });
      }
    } catch (err) {
      // If an error occurs, log it and reset user state while stopping loading
      console.log(err);
      return set({ currentUser: null, isLoading: false });
    }
  },
}));
