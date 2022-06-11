import { StatusBar } from "expo-status-bar";
import React, { useState, useCallback } from "react";
       import { AsyncStorage } from 'react-native';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";


import * as Facebook  from "expo-facebook";

import * as GoogleSignIn from 'expo-google-sign-in';

import { getAuth, signInWithRedirect, FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";


import CheckBox from 'react-native-check-box'

import SignIn from '../utils/SignIn.jsx';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import Alerta from '../components/Alerta.jsx'
import btnState from '../components/btnState.jsx'
export default function Login(props, {setLogin,setUsuario, setData, setLoading}) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [Focus1, setFocus1] = useState('idle');
  const [Focus2, setFocus2] = useState('idle');
  const [senhaVisivel, setSenhaVisivel] = useState(false);





const signGoogle = async () => {


 try {
       await GoogleSignIn.askForPlayServicesAsync();
       const { type, user } = await GoogleSignIn.signInAsync();
       if (type === 'success') {
         const user = await GoogleSignIn.signInSilentlyAsync();
       props.setLoading(true);
         
                setTimeout(() => {

                  props.setData(user);
                 props.setLoading(false);

 }
                  ,
                400);
      alert('ok')
       }
     } catch ({ message }) {
       alert('login: Error:' + message);
     }

}

const signInFacebook = async () => {
  
try {
    await Facebook.initializeAsync({
      appId: '739194317300790',
    });
    const { type, token, expirationDate, permissions, declinedPermissions } =
      await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile'],
      });
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,email`);
      const usuario = response.json();

alert('ok') 
   } else {
      // type === 'cancel'
    }
  } catch ({ message }) {
    Alerta(`Erro ao logar com facebook`, `warning`, `danger`);
  }

  }


const signIn = () => {

    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

  if (email.trim().length == 0)
           {


           Alerta('Preencha todos os campos!', 'info', 'danger')
           setFocus1('error')
           } 
   else if(reg.test(email) === false){

         
           Alerta('Email inválido!','info','danger')
           setFocus1('error')

           }

   if (senha.trim().length == 0)
           {


           Alerta('Preencha todos os campos!', 'info', 'danger')
           setFocus2('error')
           } 

   if(reg.test(email) === true && !email.trim().length == 0 && !senha.trim().length == 0) 
   { 



       SignIn(props,email, senha)
    }
      
}
  return (
    <View style={styles.container}>

      <Image style={styles.image} source={require("../assets/images/2.png")} />

      <StatusBar style="auto" />
                   <Text style={styles.inputText}> Email </Text>

      <View style={[styles.inputView, {borderColor: btnState(Focus1)}]}>
        <TextInput
    onBlur={() => setFocus1('idle')}
        onFocus={() => setFocus1('focus')}
 placeholder="exemplo@gmail.com"
          placeholderTextColor="#cccccc"
                   style={styles.TextInput}
          onChangeText={(email) => setEmail(email.trimEnd())}
        />
      </View>

                  <Text style={styles.inputText}> Senha </Text>
 
      <View style={[styles.inputView, {borderColor: btnState(Focus2)}]}>

        <TextInput
         onBlur={() => setFocus2('idle')}
        onFocus={() => setFocus2('focus')}
         placeholder="********"
          placeholderTextColor="#cccccc"
          secureTextEntry={!senhaVisivel}
          style={styles.TextInput}
          onChangeText={(senha) => setSenha(senha)}
        />

<TouchableOpacity 
 onPress={() => {
   
   setSenhaVisivel(!senhaVisivel);
    }}
>
{ senhaVisivel ?                     <FontIcon   style={styles.icon} name="eye" size={18} color="#444444" />
: 
                    <FontIcon   style={styles.icon} name="eye-slash" size={18} color="#cecece" />

                  }

                  </TouchableOpacity>
        {/*{ senhaVisivel ? <RiEye2Line/> : <RiEyeCloseFill/>}*/}
      </View>
 <View style={styles.opcoes}>

<CheckBox
checkedCheckBoxColor="#8eed92"
uncheckedCheckBoxColor="#cecece"
style={{marginLeft:10, marginTop: -3}}
    onClick={()=>{
      props.setManterLogado(!props.manterLogado)
    }}
    isChecked={props.manterLogado}
/>
        <Text style={styles.manter_conectado}>Me manter conectado</Text>


      <TouchableOpacity
onPress={() => {
            props.navigation.navigate('Redefinir')
}} 
      >
        <Text style={styles.redefinir}>Esqueceu a senha?</Text>
      </TouchableOpacity>

      </View>
 
      <TouchableOpacity
        onPress={() => {signIn()}}
       style={styles.loginBtn}>
                    <MaterialIcon   style={styles.icon} name="login" size={18} color="#53bd57" />

        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

       <TouchableOpacity 
       onPress={() => {
        signInFacebook()
       }}
       style={styles.loginFace}>
              <FontIcon  style={styles.icon} name="facebook" size={18} color="#2f4f91" />

        <Text style={styles.loginText}>ENTRAR COM FACEBOOK</Text>
      </TouchableOpacity>

       <TouchableOpacity onPress={() => signGoogle()} style={styles.loginGoogle}>
       <FontIcon style={styles.icon} name="google" size={18} color="#d45f3f" />
        <Text style={styles.loginText}>ENTRAR COM GOOGLE</Text>
      </TouchableOpacity>
<TouchableOpacity
style={styles.reg}
onPress={() => {
            props.navigation.navigate('Registrar')
}} >

      <Text style={styles.criarConta}> Não possui uma conta?  &nbsp;
       <Text style={{color:'#8eed92' , marginLeft: 10}}>

      Crie sua conta </Text>
       </Text>
</TouchableOpacity>

    </View>
  );
}
 
const styles = StyleSheet.create({
  reg: {
    marginTop: 50
  },
  container: {
    flex: 1,
paddingTop: 100,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    resizeMode: 'contain',
    height: 200,
    width: 200,
marginTop: -100,
marginBottom: 0


},

inputText: { 
color: '#cccccc',
marginRight: 250,
marginBottom: 5,
fontWeight: '800',
fontFamily: 'notoserif',

},
redefinir: {
  marginLeft: 50,
  color: '#85D87D',
  fontSize:12,
},


opcoes : {
flexDirection:"row",
justifyContent:'space-between',


},

manter_conectado: {
  fontSize: 12,
  marginLeft: 5,
  color: '#66666'
},
icon: {
  marginRight: 20
}
,
criarConta: {
  color: '#aaaaaa',
},
  inputView: {
    backgroundColor: "#fff",
    borderRadius: 10,
      borderWidth: 1,
    borderColor: "#c1c1c1",
    width: "85%",
  flexDirection: 'row',
paddingLeft: 10,
   height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
width: 100
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
     flexDirection: 'row',
    width: "80%",
    borderRadius: 15,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#8eed92",
  },

   loginFace: {
         flexDirection: 'row',

    width: "80%",
    borderRadius: 15,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
    backgroundColor: "#4167B0",
  },

   loginGoogle: {
         flexDirection: 'row',

    width: "80%",
    borderRadius: 15,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
    backgroundColor: "#FE724C",
    marginBottom: -40
  },
  loginText: {
        color: '#fff',
        marginRight: 30,

  }
});