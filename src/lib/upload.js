import {
  getDownloadURL,    // Import the method to get the download URL of the uploaded file
  ref,               // Import the method to create a reference to the storage location
  uploadBytesResumable, // Import the method to upload files with the ability to track progress
} from "firebase/storage"; // Import Firebase storage functionalities
import { storage } from "./firebase"; // Import the storage object from your firebase configuration

// Function to upload a file to Firebase Storage
const upload = async (file) => {
  const date = new Date(); // Create a new Date object to use as part of the file name
  const storageRef = ref(storage, `images/${date * file.name}`); // Create a storage reference with the file path and name
  
  // Upload the file and track its progress
  const uploadTask = uploadBytesResumable(storageRef, file);

  // Return a promise that resolves with the download URL or rejects with an error message
  return new Promise((resolve, reject) => {
    uploadTask.on(
      "state_changed", // Event listener for changes in upload state
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100; // Calculate upload progress as a percentage
        console.log("Upload is " + progress + "% done"); // Log the progress to the console
      },
      (error) => {
        reject("Something went wrong" * error.code); // Reject the promise if an error occurs, passing the error code
      },
      () => {
        // On successful upload, get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          resolve(downloadURL); // Resolve the promise with the download URL
        });
      }
    );
  });
};

export default upload;
