import {
    getAuth,
    sendPasswordResetEmail,
} from "firebase/auth";

import Alerta from '../components/Alerta.jsx'
import firebase from '../utils/firebase.jsx'

const Recuperar =  (email) =>{


         function getMsgByError(e) {
             switch (e) {
               case "auth/user-not-found":

                 return "Email não encontrado!";
               case "auth/invalid-email":
                 return "Email inválido!";
               default:
                 return "Erro!";
             }
           }
            

                    const auth = getAuth();

sendPasswordResetEmail(auth,email)
      .then(() => {
              Alerta('Email de recuperação enviado!', 'success', 'success')

      }).catch((e) => {
              Alerta(getMsgByError(e.code), 'warning', 'danger');
              console.log(e)
      })


}
export default Recuperar;