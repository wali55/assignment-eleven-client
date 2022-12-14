// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDilRJHjTn3ra4-2LF4QjCC12IB4TH_5Lk",
  authDomain: "organic-life-98022.firebaseapp.com",
  projectId: "organic-life-98022",
  storageBucket: "organic-life-98022.appspot.com",
  messagingSenderId: "713240007534",
  appId: "1:713240007534:web:97b2c1942cf883a15c677f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;