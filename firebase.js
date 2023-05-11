// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWohYS0FDlImRjx0-kfcTN9PsUKmXALiE",
  authDomain: "todolist-34343.firebaseapp.com",
  projectId: "todolist-34343",
  storageBucket: "todolist-34343.appspot.com",
  messagingSenderId: "1076634655943",
  appId: "1:1076634655943:web:45a55f61b2da98ee6f32e2",
  measurementId: "G-M4QS0ZMT76",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);