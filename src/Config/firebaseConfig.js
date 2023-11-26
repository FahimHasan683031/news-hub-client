// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

    //   apiKey:import.meta.env.VIT_apiKey,
    //   authDomain:import.meta.env.VIT_authDomain,
    //   projectId:import.meta.env.VIT_projectId,
    //   storageBucket:import.meta.env.VIT_storageBucket,
    //   messagingSenderId:import.meta.env.VIT_messagingSenderId,
    //   appId:import.meta.env.VIT_appId

    apiKey: "AIzaSyBlypcHjKm1vGYoYyxjAUO0Rj-Maw7zR14",
    authDomain: "news-portal-b2631.firebaseapp.com",
    projectId: "news-portal-b2631",
    storageBucket: "news-portal-b2631.appspot.com",
    messagingSenderId: "1006509660507",
    appId: "1:1006509660507:web:1d51d5de9092676a73e27e"


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

