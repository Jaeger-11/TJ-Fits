// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAA4L9BX-dMaePtWvgi8pB7I6uUjOgKDIs",
  authDomain: "tj-fits-1bcb3.firebaseapp.com",
  projectId: "tj-fits-1bcb3",
  storageBucket: "tj-fits-1bcb3.appspot.com",
  messagingSenderId: "934499442680",
  appId: "1:934499442680:web:325a7ca1fd80f2a710c00d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};