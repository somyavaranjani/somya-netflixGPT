// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBx2kKtMBlNGPO1BIYPMOygZTaiURrr5gs",
  authDomain: "netflixgpt-34e57.firebaseapp.com",
  projectId: "netflixgpt-34e57",
  storageBucket: "netflixgpt-34e57.appspot.com",
  messagingSenderId: "146514970598",
  appId: "1:146514970598:web:84f90208a5487169363827",
  measurementId: "G-H2WXKXHVW2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);