import {
    getAuth,
    signInWithEmailAndPassword,
} from "firebase/auth";
import {  AsyncStorage} from 'react-native';

import Alerta from '../components/Alerta.jsx'
import firebase from '../utils/firebase.jsx'

const SignIn =  (props,email,senha) =>{


         function getMsgByError(e) {
             switch (e) {
               case "auth/user-disabled":
                 return "Está conta foi desativada";
               case "auth/user-not-found":
                 return "Email e/ou senha errados!";
               case "auth/wrong-password":
                 return "Email e/ou senha errados!";
               case "auth/invalid-email":
                 return "Email não encontrado";
               default:
                 return "Erro ao logar";
             }
           }
            


        const auth = getAuth();
            signInWithEmailAndPassword(auth, email, senha)
            .then((response) => {
             
              if(props.manterLogado) {
                  alert(' persistencia')

                }
                else {
                  alert('login sem persistencia')
                }
               setTimeout(() => {

                 props.setData(response);
                 props.navigation.navigate('Home');
}
                 ,
               800);

            })
            .catch((error) => {
                Alerta(getMsgByError(error.code), 'warning', 'danger');

                console.log("Erro: " + error)
            });


}
export default SignIn;