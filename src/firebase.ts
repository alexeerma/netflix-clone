// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDezPBsFWrIAcLNij2CBWV6Ejf_N6jgH3M",
  authDomain: "netflix-c-95752.firebaseapp.com",
  projectId: "netflix-c-95752",
  storageBucket: "netflix-c-95752.appspot.com",
  messagingSenderId: "443944922705",
  appId: "1:443944922705:web:ebeb2b6d1ad67d970e5270"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);