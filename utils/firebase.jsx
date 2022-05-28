// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


export default function Firebase() {
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3B99pdus21igaYNtPhOwsPl4hYKCzEy0",
  authDomain: "lardopet-c290c.firebaseapp.com",
  projectId: "lardopet-c290c",
  storageBucket: "lardopet-c290c.appspot.com",
  messagingSenderId: "393628598478",
  appId: "1:393628598478:web:24fa4c722d573249f3109f",
  measurementId: "G-31B01LM55W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

};