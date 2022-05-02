// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-Q0tw-Q0HX0OPnJk41-P3_ARNy4Mw8fI",
  authDomain: "portfolio-68d84.firebaseapp.com",
  projectId: "portfolio-68d84",
  storageBucket: "portfolio-68d84.appspot.com",
  messagingSenderId: "860782956314",
  appId: "1:860782956314:web:73d4807d869cf3b0b766a3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
