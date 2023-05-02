// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbapfiOUGMncAEv6kWz4QIjGTg2W_bj3k",
  authDomain: "chef-recipe-food-client.firebaseapp.com",
  projectId: "chef-recipe-food-client",
  storageBucket: "chef-recipe-food-client.appspot.com",
  messagingSenderId: "794483422399",
  appId: "1:794483422399:web:2e1ac3a1047b56e4cbc20a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;