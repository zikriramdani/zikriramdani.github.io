// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCabtPNdHeKGL3PUmTQV6gSguzNQUcOjpI",
  authDomain: "cv-personal-7335d.firebaseapp.com",
  projectId: "cv-personal-7335d",
  storageBucket: "cv-personal-7335d.appspot.com",
  messagingSenderId: "207539249502",
  appId: "1:207539249502:web:c27c143ba6f4d74ddfafcf",
  measurementId: "G-L69LN4L8QJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);