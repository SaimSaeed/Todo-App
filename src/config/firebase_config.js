// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeD_rQ5DmanBUSGwa02XDH0ijWKq0RtBE",
  authDomain: "notesapp-89b7f.firebaseapp.com",
  projectId: "notesapp-89b7f",
  storageBucket: "notesapp-89b7f.appspot.com",
  messagingSenderId: "286338706232",
  appId: "1:286338706232:web:4a0ba5c7db5d3c5c5cafcd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth  = getAuth(app)