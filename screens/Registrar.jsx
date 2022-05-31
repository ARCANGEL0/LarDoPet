import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

import CheckBox from 'react-native-check-box'
import IoIcons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontIcon from 'react-native-vector-icons/FontAwesome';


export default function Registrar(props) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");

  const [telefone, setTelefone] = useState("");
  const [celular, setCelular] = useState("");
  const [foto, setFoto] = useState("");
  const [cep, setCep] = useState("");

  const [cidade, setCidade] = useState("");

  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");

  const [fEmail, setFemail] = useState(false);
  const [fSenha, setFsenha] = useState(false);
  const [fNome, setFnome] = useState(false);
  const [fTelefone, setFtelefone] = useState(false);
  const [fCelular, setFcelular] = useState(false);
  const [fCep, setFcep] = useState(false);
  const [fEndereco, setFendereco] = useState(false);
  const [fCidade, setFcidade] = useState(false);

  const [fNumero, setFnumero] = useState(false);

  const [senhaVisivel, setSenhaVisivel] = useState(false);

  return (
    <View style={styles.container}>

        <View style={styles.header} >
        <TouchableOpacity style={styles.returnBtn}

        onPress={() => {
            props.navigation.navigate('Login')
}}>
      <IoIcons   style={styles.return} name="return-down-back" size={36} color="#fff" />
</TouchableOpacity>
      <Image style={styles.image} source={require("../assets/images/2.png")} />
 </View>


      <StatusBar style="auto" />

      <View style={styles.body}>

<ScrollView
vertical
showsVerticalScrollIndicator={false}
style={styles.scroll}
>
    <View style={styles.formHeader}>
      <Text style={styles.title}> Criar conta </Text>
            <MaterialIcon   style={styles.pet} name="pets" size={20} color="#cecece" />

</View>


 <Text style={styles.inputText}> Nome </Text>

      <View style={fNome ? styles.inputFocus : styles.inputView }>
        <TextInput
    onBlur={() => setFnome(false)}
        onFocus={() => setFnome(true)}
 placeholder=" "
          placeholderTextColor="#cccccc"
                   style={styles.TextInput}
          onChangeText={(nome) => setNome(nome)}
        />
      </View>


 


 <Text style={styles.inputText}> Telefone </Text>

      <View style={fTelefone ? styles.inputFocus : styles.inputView }>
        <TextInput
    onBlur={() => setFtelefone(false)}
        onFocus={() => setFtelefone(true)}
 placeholder=" "
          placeholderTextColor="#cccccc"
                   style={styles.TextInput}
          onChangeText={(telefone) => setTelefone(telefone)}
        />
      </View>


 <Text style={styles.inputText}> Celular </Text>

      <View style={fCelular ? styles.inputFocus : styles.inputView }>
        <TextInput
    onBlur={() => setFcelular(false)}
        onFocus={() => setFcelular(true)}
 placeholder=" "
          placeholderTextColor="#cccccc"
                   style={styles.TextInput}
          onChangeText={(email) => setEmail(email)}
        />
      </View>


<View style={styles.inputGroup}>

<View style={styles.btnGroup}>
 <Text style={styles.groupText}> CEP </Text>

      <View style={fCep ? styles.groupFocus : styles.groupView }>
        <TextInput
    onBlur={() => setFcep(false)}
        onFocus={() => setFcep(true)}
 placeholder=" "
          placeholderTextColor="#cccccc"
                   style={styles.btnView}
          onChangeText={(cep) => setCep(cep)}
        />
      </View>
      </View>


<View style={styles.btnGroup}>

 <Text style={styles.groupText}> Cidade </Text>

      <View style={fCidade ? styles.groupFocus : styles.groupView }>
        <TextInput
    onBlur={() => setFcidade(false)}
        onFocus={() => setFcidade(true)}
 placeholder=" "
          placeholderTextColor="#cccccc"
                   style={styles.btnView}
          onChangeText={(cidade) => setCidade(cidade)}
        />
      </View>

</View>

</View>


                   <Text style={styles.inputText}> Rua </Text>

      <View style={fEndereco ? styles.inputFocus : styles.inputView }>
        <TextInput
    onBlur={() => setFendereco(false)}
        onFocus={() => setFendereco(true)}
 placeholder=" "
          placeholderTextColor="#cccccc"
                   style={styles.TextInput}
          onChangeText={(endereco) => setEndereco(endereco)}
        />
      </View>


<Text style={styles.inputText}> Email </Text>

      <View style={fEmail ? styles.inputFocus : styles.inputView }>
        <TextInput
    onBlur={() => setFemail(false)}
        onFocus={() => setFemail(true)}
 placeholder=" "
          placeholderTextColor="#cccccc"
                   style={styles.TextInput}
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
 <Text style={styles.inputText}> Senha </Text>

      <View style={fSenha ? styles.inputFocus : styles.inputView }>

        <TextInput
         onBlur={() => setFsenha(false)}
        onFocus={() => setFsenha(true)}
         placeholder=""
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




      </View>

      <View style={styles.btn}>
  <TouchableOpacity style={styles.register}>
                    <FontIcon   style={styles.icon} name="user-plus" size={18} color="#53bd57" />

        <Text style={styles.loginText}>Criar conta</Text>
      </TouchableOpacity>


</View>

</ScrollView></View>
    </View>
  );
}


 
const styles = StyleSheet.create({
btn: {
paddingBottom: 50,
paddingLeft: 50,
},
   register: {
    width: "80%",
    borderRadius: 15,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8eed92",
  },

  header: {
    position: 'absolute',
    top: 0,
    backgroundColor: '#7ED957',
   flexDirection: 'row',

   width: '100%',
   height: '34%',
   paddingLeft: 15

  },
  body: {
    backgroundColor: '#fcfcfc',
borderWidth: 1,
borderColor: '#cecece',
    flex:1, 
    position: 'absolute',
top: 180,
height: '70%',
borderRadius: 10,

  },
  formHeader: {flexDirection: 'row', marginBottom: 8},


  title: {
    fontSize: 24,
    color: '#cecece'
  },

inputGroup:{
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'space-between'

},
 pet: {
  marginTop: 7.6,
 },

 icon: {

  marginRight: 20
 },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    resizeMode: 'contain',
    height: 150,
    width: 150,
    marginTop: 25,
    marginRight: 90

},

scroll: {
  paddingTop: 20,
paddingLeft: 10,
marginLeft: 10,
marginRight: 10,

},

inputText: { 
color: '#cccccc',
marginRight: 250,
marginBottom: 5,
fontWeight: '800',
fontFamily: 'notoserif',

},

groupText: { 
color: '#cccccc',
flexDirection: 'column',
marginBottom: 5,
fontWeight: '800',
fontFamily: 'notoserif',

},

btnGroup: {

  flexDirection: 'column',
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
    width: "100%",
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
  marginLeft: 5,
  color: '#66666'
},
return: {
  paddingRight: 50,
  paddingTop: 40,

}

,
returnBtn: {
marginBottom: 150,
},
criarConta: {
  color: '#aaaaaa',
  marginTop: 50,
},
  inputView: {
    backgroundColor: "#fff",
    borderRadius: 10,
      borderWidth: 1,
    borderColor: "#c1c1c1",
    width: "100%",
  flexDirection: 'row',
paddingLeft: 10,
   height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },

    groupView: {
    backgroundColor: "#fff",
    borderRadius: 10,
      borderWidth: 1,
    borderColor: "#c1c1c1",
    width: 142,
  flexDirection: 'row',
   height: 45,

    marginBottom: 20,
 
    alignItems: "center",
  },
  groupFocus: {
    borderRadius: 10,
      borderWidth: 1,
   borderColor: "#62A0EA",
         backgroundColor: "#fff",
    width: 142,
  flexDirection: 'row',
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
 
  btnView: {
flex: 0,
width: 130,
marginLeft: 5,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  register: {
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