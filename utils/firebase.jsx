
import { initializeApp } from "@firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyB3B99pdus21igaYNtPhOwsPl4hYKCzEy0",
  authDomain: "lardopet-c290c.firebaseapp.com",
  databaseURL: "https://lardopet-c290c-default-rtdb.firebaseio.com",
  projectId: "lardopet-c290c",
  storageBucket: "lardopet-c290c.appspot.com",
  messagingSenderId: "393628598478",
  appId: "1:393628598478:web:24fa4c722d573249f3109f",
  measurementId: "G-31B01LM55W"
};


    const app = initializeApp(firebaseConfig);

export default app