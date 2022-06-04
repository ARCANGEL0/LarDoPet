import { StatusBar } from "expo-status-bar";
import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  ScrollView,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";


import FlashMessage from "react-native-flash-message";
import Signup from '../utils/SignUp.jsx'


import app from '../utils/firebase.jsx';

import Axios from 'axios';

import { TextInputMask } from 'react-native-masked-text'


import Alerta from '../components/Alerta.jsx'
import CheckBox from 'react-native-check-box'
import IoIcons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import Spinner from 'react-native-loading-spinner-overlay';


export default function Registrar(props) {

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

  const [fEmail, setFemail] = useState('idle');
  const [fSenha, setFsenha] = useState('idle');
  const [fNome, setFnome] = useState('idle');
  const [fTelefone, setFtelefone] = useState('idle');
  const [fBairro, setFbairro] = useState('idle');

  const [fCelular, setFcelular] = useState('idle');
  const [fCep, setFcep] = useState('idle');
  const [fEndereco, setFendereco] = useState('idle');
  const [fCidade, setFcidade] = useState('idle');

  const [fNumero, setFnumero] = useState('idle');

  const [senhaVisivel, setSenhaVisivel] = useState(false);

  const [isLoading, setLoading] = useState(false);
  const [message, setMessage] = useState('');




  const buscarCep = (cep) => {
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

const register = () => {

    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;


    if(email.trim().length == 0){
                    Alerta('Preencha todos os campos!', 'info', 'danger')

          setFemail('error');
    }
    if (senha.trim().length == 0)
       {
           Alerta('Preencha todos os campos!', 'info', 'danger')

          setFsenha('error')
        }
    if (nome.trim().length == 0){


                    Alerta('Preencha todos os campos!', 'info', 'danger')


            setFnome('error')
          }
    if (telefone.trim().length == 0)
        {
           Alerta('Preencha todos os campos!', 'info', 'danger')

            setFtelefone('error')
          }
    if (celular.trim().length == 0){
        Alerta('Preencha todos os campos!', 'info', 'danger')

        setFcelular('error')
        }
    if (cep.trim().length == 0)
        {
                      Alerta('Preencha todos os campos!', 'info', 'danger')

        setFcep('error')
        }
    if (cidade.trim().length == 0)
        {
                      Alerta('Preencha todos os campos!', 'info', 'danger')

        setFcidade('error')
        }
    if (bairro.trim().length == 0)
          {
            Alerta('Preencha todos os campos!', 'info', 'danger')

          setFbairro('error')
          }
    if (endereco.trim().length == 0)
        {
           Alerta('Preencha todos os campos!', 'info', 'danger')

        setFendereco('error')
        }
    if (numero.trim().length == 0)
        {
                     Alerta('Preencha todos os campos!', 'info', 'danger')


        Alerta('Preencha todos os campos!', 'info', 'danger')
        setFnumero('error')
        } 
    if(reg.test(email) === false){

       
       Alerta('Email inválido!','info','danger')
        setFemail('error')

        }

    if(reg.test(email) === true && !numero.trim().length == 0 && !endereco.trim().length == 0 && !bairro.trim().length == 0 && !cidade.trim().length == 0 && !cep.trim().length == 0 && !celular.trim().length == 0 && !telefone.trim().length == 0 && !nome.trim().length == 0 && !email.trim().length == 0) 
   

    {
          // REGISTRO 

Signup(props,email,senha)


    }
   
}


const btnState = (estado) => {
    
    switch (estado) {
        case 'idle':
            return '#c1c1c1';

        case 'focus':

            return '#62A0EA';

        case 'error':
            return '#ed4250'
    }

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

      <View style={[styles.inputView, {borderColor: btnState(fNome)}]}
      >
        <TextInput
         value={nome}

    onBlur={() => setFnome('idle')}
        onFocus={() => setFnome('focus')}
 placeholder=" "
          placeholderTextColor="#cccccc"
                   style={styles.TextInput}
          onChangeText={(nome) => setNome(nome)}
        />
      </View>


 


 <Text style={styles.inputText}> Telefone </Text>

      <View style={[styles.inputView, {borderColor: btnState(fTelefone)}]}>
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

    onBlur={() => setFtelefone('idle')}
        onFocus={() => setFtelefone('focus')}
 placeholder=" "
          placeholderTextColor="#cccccc"
                   style={styles.TextInput}
          onChangeText={(telefone) => setTelefone(telefone)}
        />
      </View>


 <Text style={styles.inputText}> Celular </Text>

      <View style={[styles.inputView, {borderColor: btnState(fCelular)}]}>
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


    onBlur={() => setFcelular('idle')}
        onFocus={() => setFcelular('focus')}
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

      <View style={[styles.groupView, {borderColor: btnState(fCep)}]}>
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


    onBlur={() => setFcep('idle')}
        onFocus={() => setFcep('focus')}
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

      <View style={[styles.groupView, {borderColor: btnState(fCidade)}]}>
        <TextInput
         value={cidade}

    onBlur={() => setFcidade('idle')}
        onFocus={() => setFcidade('focus')}
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

      <View style={[styles.inputView, {borderColor: btnState(fBairro)}]}>
        <TextInput

 
    onBlur={() => setFbairro('idle')}
        onFocus={() => setFbairro('focus')}
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

      <View style={[styles.groupEndereco, {borderColor: btnState(fEndereco)}]}>
        <TextInput
         value={endereco}

    onBlur={() => setFendereco('idle')}
        onFocus={() => setFendereco('focus')}
 placeholder=" "
          placeholderTextColor="#cccccc"
                   style={styles.btnView}
          onChangeText={(endereco) => setEndereco(endereco)}
        />
      </View>
</View>

<View style={styles.btnGroup}>

 <Text style={styles.groupText}> Nº </Text>

      <View style={[styles.groupNumero, {borderColor: btnState(fNumero)}]}>
        <TextInput
         value={numero}

    onBlur={() => setFnumero('idle')}
        onFocus={() => setFnumero('focus')}
 placeholder=" "
          placeholderTextColor="#cccccc"
                   style={styles.btnView}
          onChangeText={(numero) => setNumero(numero)}
        />
      </View>
      </View>
      </View>
<Text style={styles.inputText}> Email </Text>

      <View style={[styles.inputView, {borderColor: btnState(fEmail)}]}>
        <TextInput
         value={email}

    onBlur={() => setFemail('idle')}
        onFocus={() => setFemail('focus')}
 placeholder=" "
          placeholderTextColor="#cccccc"
                   style={styles.TextInput}
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
 <Text style={styles.inputText}> Senha </Text>

      <View style={[styles.inputView, {borderColor: btnState(fSenha)}]}>

        <TextInput
         value={senha}

         onBlur={() => setFsenha('idle')}
        onFocus={() => setFsenha('focus')}
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
  <TouchableOpacity 

onPress={() => {

register()

}}
  style={styles.register}>
                    <FontIcon   style={styles.icon} name="user-plus" size={18} color="#53bd57" />

        <Text style={styles.loginText}>Registrar</Text>
      </TouchableOpacity>



</View>

</ScrollView></View>

      <FlashMessage position="top"    
duration={2300}
              style={styles.alert}
              titleStyle={styles.alertText}
      /> 

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
    paddingBottom: 8,
    paddingTop: 5,
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

  },
  alert:{
paddingTop: 30,
paddingBottom:20,
  },
  alertText: {
    fontSize: 18,
    marginTop: 2,
  }

});