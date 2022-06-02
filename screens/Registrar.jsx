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

import firebase from '../utils/firebase.jsx';
import Axios from 'axios';

import { ActivityIndicator } from 'react-native';
import { TextInputMask } from 'react-native-masked-text'

import CheckBox from 'react-native-check-box'
import IoIcons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import Spinner from 'react-native-loading-spinner-overlay';


export default function Registrar(props) {

  const firebase = firebase.firestore();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");

  const [telefone, setTelefone] = useState("");
  const [celular, setCelular] = useState("");
  const [foto, setFoto] = useState("");
  const [cep, setCep] = useState("");

  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");

  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");

  const [fEmail, setFemail] = useState(false);
  const [fSenha, setFsenha] = useState(false);
  const [fNome, setFnome] = useState(false);
  const [fTelefone, setFtelefone] = useState(false);
  const [fBairro, setFbairro] = useState(false);

  const [fCelular, setFcelular] = useState(false);
  const [fCep, setFcep] = useState(false);
  const [fEndereco, setFendereco] = useState(false);
  const [fCidade, setFcidade] = useState(false);

  const [fNumero, setFnumero] = useState(false);

  const [senhaVisivel, setSenhaVisivel] = useState(false);

  const [isLoading, setLoading] = useState(false);







  buscarCep = (cep) => {
    Axios.get(`https://viacep.com.br/ws/`+cep+`/json/`)
      .then(response => {
       
              setLoading(true);

 setTimeout(() => {
   console.log(response.data)
        setCidade(response.data.localidade)
        setEndereco(response.data.logradouro)
        setBairro(response.data.bairro)}, 200);


     

        setTimeout(() => {
        setLoading(false)
}, 500);
      })
      .catch(error => {
        return console.log(error);
      })
  }


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

{ isLoading ?
<Spinner
          visible={true}
          textStyle={styles.spinnerTextStyle}
        />

        : null
}
 <View style={styles.formHeader}>
      <Text style={styles.title}> Criar conta </Text>

            <MaterialIcon   style={styles.pet} name="pets" size={20} color="#bbbbbb" />

</View>

<ScrollView
vertical
showsVerticalScrollIndicator={false}
style={styles.scroll}
>
   

 <Text style={styles.inputText}> Nome </Text>

      <View style={fNome ? styles.inputFocus : styles.inputView }>
        <TextInput
         value={nome}

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
        <TextInputMask
         value={telefone}
         type={'custom'}
  options={{
    /**
     * mask: (String | required | default '')
     * the mask pattern
     * 9 - accept digit.
     * A - accept alpha.
     * S - accept alphanumeric.
     * * - accept all, EXCEPT white space.
    */
    mask: '(99) 9999-9999'
  }}

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
        <TextInputMask
         value={celular}

type={'custom'}
  options={{
    /**
     * mask: (String | required | default '')
     * the mask pattern
     * 9 - accept digit.
     * A - accept alpha.
     * S - accept alphanumeric.
     * * - accept all, EXCEPT white space.
    */
    mask: '(99) 99999-9999'
  }}


    onBlur={() => setFcelular(false)}
        onFocus={() => setFcelular(true)}
 placeholder=" "
 value={celular}
          placeholderTextColor="#cccccc"
                   style={styles.TextInput}
          onChangeText={(celular) => setCelular(celular)}
        />
      </View>


<View style={styles.inputGroup}>

<View style={styles.btnGroup}>
 <Text style={styles.groupText}> CEP </Text>

      <View style={fCep ? styles.groupFocus : styles.groupView }>
        <TextInputMask
        type={'custom'}
  options={{
    /**
     * mask: (String | required | default '')
     * the mask pattern
     * 9 - accept digit.
     * A - accept alpha.
     * S - accept alphanumeric.
     * * - accept all, EXCEPT white space.
    */
    mask: '99999-999'
  }}


    onBlur={() => setFcep(false)}
        onFocus={() => setFcep(true)}
 placeholder=" "
          placeholderTextColor="#cccccc"
                   style={styles.btnView}
          onChangeText={(cepd) => 
            {
              console.log(isLoading);
            buscarCep(cepd);
           setCep(cepd);
         }

         }
           value={cep}
        />
      </View>
      </View>


<View style={styles.btnGroup}>

 <Text style={styles.groupText}> Cidade </Text>

      <View style={fCidade ? styles.groupFocus : styles.groupView }>
        <TextInput
         value={cidade}

    onBlur={() => setFcidade(false)}
        onFocus={() => setFcidade(true)}
 placeholder=" "
          placeholderTextColor="#cccccc"
                   style={styles.btnView}
          onChangeText={(cidade) =>  {

            setCidade(cidade)}}
        />
      </View>

</View>

</View>


 <Text style={styles.inputText}> Bairro </Text>

      <View style={fBairro ? styles.inputFocus : styles.inputView }>
        <TextInput

 
    onBlur={() => setFbairro(false)}
        onFocus={() => setFbairro(true)}
 placeholder=" "
 value={bairro}
          placeholderTextColor="#cccccc"
                   style={styles.TextInput}
          onChangeText={(bairro) => setBairro(bairro)}
        />
      </View>
<View style={styles.inputGroup2}>

<View style={styles.btnGroup}>

                   <Text style={styles.groupText}> Rua </Text>

      <View style={fEndereco ? styles.focusEndereco : styles.groupEndereco }>
        <TextInput
         value={endereco}

    onBlur={() => setFendereco(false)}
        onFocus={() => setFendereco(true)}
 placeholder=" "
          placeholderTextColor="#cccccc"
                   style={styles.btnView}
          onChangeText={(endereco) => setEndereco(endereco)}
        />
      </View>
</View>

<View style={styles.btnGroup}>

 <Text style={styles.groupText}> Nº </Text>

      <View style={fNumero ? styles.focusNumero : styles.groupNumero }>
        <TextInput
         value={numero}

    onBlur={() => setFnumero(false)}
        onFocus={() => setFnumero(true)}
 placeholder=" "
          placeholderTextColor="#cccccc"
                   style={styles.btnView}
          onChangeText={(numero) => setNumero(numero)}
        />
      </View>
      </View>
      </View>
<Text style={styles.inputText}> Email </Text>

      <View style={fEmail ? styles.inputFocus : styles.inputView }>
        <TextInput
         value={email}

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
         value={senha}

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
};


 
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
   height: '50%',
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
  formHeader: {
    flexDirection: 'row',
     marginBottom: 8,
    marginTop: 15,
   borderBottomColor: '#d6ffd9',
    borderBottomWidth: 3,
    backgroundColor: '#edfaee',
    marginTop: -4,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15

  },


  title: {
    fontSize: 24,
    color: '#bbbbbb',
      marginLeft: 25,


  },

inputGroup:{
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'space-between'

},

inputGroup2:{
  flexDirection: 'row',


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

  spin: {
    fontSize: 42,
  },
  image: {
    resizeMode: 'contain',
    height: 150,
    width: 150,
    marginTop: 25,
    marginRight: 90,
    marginLeft: 90,

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

btnGroup2: {

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
  position: 'absolute',
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
  paddingLeft: 10,

    alignItems: "center",
  },



    groupNumero: {
    backgroundColor: "#fff",
    borderRadius: 10,
      borderWidth: 1,
    borderColor: "#c1c1c1",
    width: 70,
  flexDirection: 'row',
   height: 45,

    marginBottom: 20,
  paddingLeft: 10,

    alignItems: "center",
  },


    focusNumero: {
    backgroundColor: "#fff",
    borderRadius: 10,
      borderWidth: 1,
    borderColor: "#62A0EA",
    width: 70,
  flexDirection: 'row',
   height: 45,

    marginBottom: 20,
  paddingLeft: 10,

    alignItems: "center",
  },
 groupEndereco: {
    backgroundColor: "#fff",
    borderRadius: 10,
      borderWidth: 1,
    borderColor: "#c1c1c1",
    width: 230,
  flexDirection: 'row',
   height: 45,
   marginRight: 10,
    marginBottom: 20,
  paddingLeft: 10,

    alignItems: "center",
  },

 focusEndereco: {
    backgroundColor: "#fff",
    borderRadius: 10,
      borderWidth: 1,
    borderColor: "#62A0EA",
    width: 230,
  flexDirection: 'row',
   height: 45,
   marginRight: 10,
    marginBottom: 20,
  paddingLeft: 10,

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
 
 paddingLeft: 10,
    alignItems: "center",
  },




  TextInput: {
    height: 50,
    flex: 1,
marginRight: 10,
width: 250,


  },
 
  btnView: {
flex: 0,
width: 130,
marginLeft: 5,
  },
 
  btnNumero: {
width: '10%',
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