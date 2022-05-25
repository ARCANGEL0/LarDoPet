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
 
export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [Focus1, setFocus1] = useState(false);
  const [Focus2, setFocus2] = useState(false);

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
          secureTextEntry={true}
          style={styles.TextInput}
          secureTextEntry={true}
          onChangeText={(senha) => setSenha(senha)}
        />
      </View>
 <View style={styles.opcoes}>

        <Text style={styles.manter_conectado}>Me manter conectado</Text>


      <TouchableOpacity>
        <Text style={styles.redefinir}>Esqueceu a senha?</Text>
      </TouchableOpacity>

      </View>
 
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
color: '#8a8a8a',
marginRight: 250,
marginBottom: 5

},
redefinir: {
  color: '#85D87D',
},
 inputFocus: {
      borderColor: "#62A0EA",
         backgroundColor: "#fff",
    borderRadius: 10,
      borderWidth: 1.5,
    width: "85%",

   height: 45,
    marginBottom: 20,
 
    alignItems: "center",

 },

opcoes : {
 flexDirection: 'row',
 justifyContent: 'space-between',
 alignItems: 'space-between',

},
  inputView: {
    backgroundColor: "#fff",
    borderRadius: 10,
      borderWidth: 1,
    borderColor: "#c1c1c1",
    width: "85%",

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
    width: "80%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#8eed92",
  },
  loginText: {
        color: '#fff',

  }
});