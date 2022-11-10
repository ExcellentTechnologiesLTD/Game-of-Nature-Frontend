// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDBAbDQG_dOmpdFchw3w5rldZJLhRzqwoU",
    authDomain: "game--of--nature.firebaseapp.com",
    projectId: "game--of--nature",
    storageBucket: "game--of--nature.appspot.com",
    messagingSenderId: "70959278691",
    appId: "1:70959278691:web:02066d6a7b43a6fe6fe656",
    measurementId: "G-J395BD5E6M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);