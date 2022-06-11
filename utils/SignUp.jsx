import {
    getAuth,
    createUserWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "@firebase/app";

import Alerta from '../components/Alerta.jsx'
import firebase from '../utils/firebase.jsx'

const Signup =  (props,email,senha) =>{

initializeApp({
 apiKey: "AIzaSyB3B99pdus21igaYNtPhOwsPl4hYKCzEy0",
  authDomain: "lardopet-c290c.firebaseapp.com",
  databaseURL: `https://lardopet-c290c-default-rtdb.firebaseio.com`,
  projectId: "lardopet-c290c",
  storageBucket: "lardopet-c290c.appspot.com",
  messagingSenderId: "393628598478",
  appId: "1:393628598478:web:24fa4c722d573249f3109f",
  measurementId: "G-31B01LM55W"});




         function getMsgByError(e) {
             switch (e) {
               case "auth/email-already-in-use":
                 return "Email já existente";
               case "auth/invalid-email":
                 return "Email inválido";
               case "auth/weak-password":
                 return "Senha muito fraca!";
               case "auth/wrong-password":
                 return "Senha errada!";
               case "auth/invalid-email":
                 return "Email não encontrado";
               default:
                 return "Erro ao logar";
             }
           }
            

        const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, senha)
            .then(() => {
              Alerta('Conta registrada!', 'success', 'success')

               setTimeout(() => {
                props.navigation.navigate('Login')},
              2000);

            })
            .catch((error) => {
                Alerta(getMsgByError(error.code), 'warning', 'danger');

                console.log("Erro: " + error)
            });


}
export default Signup;