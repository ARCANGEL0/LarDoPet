import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "firebase/auth";

import Alerta from '../components/Alerta.jsx'
import firebase from '../utils/firebase.jsx'

const Signup =  (props,email,senha) =>{


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