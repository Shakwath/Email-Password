// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//dont use it
const firebaseConfig = {
  apiKey: "AIzaSyCZjgbN2xt9fnhHhGN7XDJuUBLH2e6FKOM",
  authDomain: "email-password-10aac.firebaseapp.com",
  projectId: "email-password-10aac",
  storageBucket: "email-password-10aac.firebasestorage.app",
  messagingSenderId: "1001985315714",
  appId: "1:1001985315714:web:8552c234d3a64b0e82b59b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);