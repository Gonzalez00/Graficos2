import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDLjpYfNtQPDzAmlAWmFXIilqS7GGRzvlk",
    authDomain: "startcap-ef1bf.firebaseapp.com",
    projectId: "startcap-ef1bf",
    storageBucket: "startcap-ef1bf.appspot.com",
    messagingSenderId: "279595376753",
    appId: "1:279595376753:web:19a9fbadd0fea95f9abbd0",
    measurementId: "G-GNGDKNF149"
  };


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;



