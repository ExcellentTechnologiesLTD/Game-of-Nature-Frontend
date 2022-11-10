// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBlUufzQeunUQLtM_gVZsWyfW2bTDrW_VE",
    authDomain: "game-of-nature-gon.firebaseapp.com",
    projectId: "game-of-nature-gon",
    storageBucket: "game-of-nature-gon.appspot.com",
    messagingSenderId: "904656204271",
    appId: "1:904656204271:web:0428abe72deaaf75d1861a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;