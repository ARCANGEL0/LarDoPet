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
             props.setLoading(true);
         
               setTimeout(() => {

                 props.setData(response);
                 props.setLoading(false);
                 props.navigation.navigate('Home')

}
                 ,
               400);

            })
            .catch((error) => {
                Alerta(getMsgByError(error.code), 'warning', 'danger');

                console.log("Erro: " + error)
            });


}
export default SignIn;