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

import Axios from 'axios';

import Recuperar from '../utils/Recuperar.jsx';
import Alerta from '../components/Alerta.jsx'
import btnState from '../components/btnState.jsx'
import IoIcons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontIcon from 'react-native-vector-icons/FontAwesome';


export default function Redefinir(props) {

  const [email, setEmail] = useState(''); 
   const [fEmail, setFemail] = useState('idle');



const redfAction = () => {

      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;


if (email.trim().length == 0)
        {


        Alerta('Preencha o email!', 'info', 'danger')
        setFemail('error')
        } 
if(reg.test(email) === false){

       
       Alerta('Email inválido!','info','danger')
        setFemail('error')

        }

if(reg.test(email) === true && !email.trim().length == 0) 

    {
           Recuperar(email)




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


 <View style={styles.formHeader}>
      <Text style={styles.title}> Redefinir a senha </Text>

            <MaterialIcon   style={styles.pet} name="pets" size={20} color="#cecece" />

</View>

<ScrollView
vertical
showsVerticalScrollIndicator={false}
style={styles.scroll}
>
   

<View style={styles.btnGroup}>
 <Text style={styles.inputText}> Digite seu e-mail </Text>

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
</View>

 

 


      <View style={styles.btn}>
  <TouchableOpacity onPress={() => redfAction()} style={styles.btnC}>
                    <FontIcon   style={styles.icon} name="key" size={18} color="#53bd57" />

        <Text style={styles.loginText}>Recuperar senha </Text>
      </TouchableOpacity>


</View>

</ScrollView></View>
    </View>
  );
};


 
const styles = StyleSheet.create({
btn: {
marginLeft: 30
},
   btnC: {
    width: "80%",
    borderRadius: 15,
    height: 50,
    flexDirection: 'row',    alignItems: "center",
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
height: '40%',
borderRadius: 10,

  },
  formHeader: {
    flexDirection: 'row',
     marginBottom: 2,
    marginTop: 18,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15

  },


  title: {
    fontSize: 24,
    color: '#cccccc',
      marginLeft: 25,


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
    marginRight: 90,
    marginLeft: 90,

},

scroll: {
  paddingTop: 20,
paddingLeft: 20,
width: 300,
padgginLeft: 140,
},

inputText: { 
color: '#cccccc',
marginBottom: 5,
fontWeight: '800',
fontFamily: 'notoserif',


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

btnGroup: {
  marginRight: 10,

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







  TextInput: {
    height: 50,
    flex: 1,
width: 250,

  },
 
  
 

  loginText: {
        color: '#fff',
        marginRight: 30,

  }
});