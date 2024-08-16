// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{ getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQTmXL2k5isA090pxU1Pj0Zt7k7YWqu3M",
  authDomain: "carefinder-a464f.firebaseapp.com",
  projectId: "carefinder-a464f",
  storageBucket: "carefinder-a464f.appspot.com",
  messagingSenderId: "219327127116",
  appId: "1:219327127116:web:053c8c53abdfaac9aedee9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth}