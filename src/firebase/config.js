// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhxT-EL_O5ZP2BXVi8D643Nwal_K7srnM",
  authDomain: "react-cursos-5be27.firebaseapp.com",
  projectId: "react-cursos-5be27",
  storageBucket: "react-cursos-5be27.appspot.com",
  messagingSenderId: "999118763079",
  appId: "1:999118763079:web:11d9ddf8c86b26dd37ed62"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp )
export const FirebaseDB = getFirestore( FirebaseApp )

