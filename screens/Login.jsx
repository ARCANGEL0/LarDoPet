import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

import CheckBox from 'react-native-community/checkbox';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontIcon from 'react-native-vector-icons/FontAwesome';


export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [Focus1, setFocus1] = useState(false);
  const [Focus2, setFocus2] = useState(false);
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>

      <Image style={styles.image} source={require("../assets/images/2.png")} />
 
      <StatusBar style="auto" />
                   <Text style={styles.inputText}> Email </Text>

      <View style={Focus1 ? styles.inputFocus : styles.inputView }>
        <TextInput
    onBlur={() => setFocus1(false)}
        onFocus={() => setFocus1(true)}
 placeholder="exemplo@gmail.com"
          placeholderTextColor="#cccccc"
                   style={styles.TextInput}
          onChangeText={(email) => setEmail(email)}
        />
      </View>

                  <Text style={styles.inputText}> Senha </Text>
 
      <View style={Focus2 ? styles.inputFocus : styles.inputView }>

        <TextInput
         onBlur={() => setFocus2(false)}
        onFocus={() => setFocus2(true)}
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
    disabled={false}
    value={isSelected}
    onValueChange={setSelection(!isSelected)}
  />


        <Text style={styles.manter_conectado}>Me manter conectado</Text>


      <TouchableOpacity>
        <Text style={styles.redefinir}>Esqueceu a senha?</Text>
      </TouchableOpacity>

      </View>
 
      <TouchableOpacity style={styles.loginBtn}>
                    <MaterialIcon   style={styles.icon} name="login" size={18} color="#53bd57" />

        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

       <TouchableOpacity style={styles.loginFace}>
              <FontIcon  style={styles.icon} name="facebook" size={18} color="#2f4f91" />

        <Text style={styles.loginText}>ENTRAR COM FACEBOOK</Text>
      </TouchableOpacity>

       <TouchableOpacity style={styles.loginGoogle}>
       <FontIcon style={styles.icon} name="google" size={18} color="#d45f3f" />
        <Text style={styles.loginText}>ENTRAR COM GOOGLE</Text>
      </TouchableOpacity>
      <Text style={styles.criarConta}> Não possui uma conta? <Text style={{color:'#8eed92'}}>Crie sua conta </Text> </Text>

    </View>
  );
}
 
const styles = StyleSheet.create({
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
 inputFocus: {
  flexDirection: 'row',
      borderColor: "#62A0EA",
         backgroundColor: "#fff",
    borderRadius: 10,
      borderWidth: 1.5,
    width: "85%",
paddingLeft: 10,

   height: 45,
    marginBottom: 20,
 
    alignItems: "center",

 },

opcoes : {
flexDirection:"row",
justifyContent:'space-between',


},

manter_conectado: {
  fontSize: 12,
  marginLeft: 20,
  color: '#66666'
},
icon: {
  marginRight: 20
}
,
criarConta: {
  color: '#aaaaaa',
  marginTop: 50,
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
marginRight: 150,
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