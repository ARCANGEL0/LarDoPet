import {
    getAuth,
    signOut,
} from "firebase/auth";
import {  AsyncStorage} from 'react-native';

import Alerta from '../components/Alerta.jsx'
import firebase from '../utils/firebase.jsx'
import Spinner from 'react-native-loading-spinner-overlay';

const SignOut = (props) =>{

              


const auth = getAuth();

signOut(auth).then(() => {


             props.setLoading(true);





                  
 setTimeout(() => {

               props.Logout();
               props.setLoading(false);

                //  props.naviation.navigate('Login');
}
                 ,
               300);


}).catch((error) => {
Alerta('Erro', 'warning', 'danger');

                console.log("Erro: " + error)

              });





}
export default SignOut;