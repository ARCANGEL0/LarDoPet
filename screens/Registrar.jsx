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
  const [Focus1, setFocus1] = useState(false);
  const [Focus2, setFocus2] = useState(false);
  const [senhaVisivel, setSenhaVisivel] = useState(false);

  return (
    <View style={styles.container}>

        <View style={{flexDirection:'row'}} >
        <TouchableOpacity

        onPress={() => {
            props.navigation.navigate('Login')
}}>
      <IoIcons   style={styles.icon} name="return-down-back" size={36} color="#aaaaaa" />
</TouchableOpacity>
      <Image style={styles.image} source={require("../assets/images/2.png")} />
 </View>

      <StatusBar style="auto" />
<ScrollView
vertical
style={styles.scroll}
>

 <Text style={styles.inputText}> Nome </Text>

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


 <Text style={styles.inputText}> Nome </Text>

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


 <Text style={styles.inputText}> Nome </Text>

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


 <Text style={styles.inputText}> Nome </Text>

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


 <Text style={styles.inputText}> Nome </Text>

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


 <Text style={styles.inputText}> Nome </Text>

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

                  <Text style={styles.inputText}> Criar conta </Text>
 
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

</ScrollView>
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
    height: 150,
    width: 150,
    marginTop: 25,
    marginRight: 90

},

scroll: {
marginLeft: 30,
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
  marginLeft: 5,
  color: '#66666'
},
icon: {
  paddingRight: 50,
  marginTop: 20,
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
    width: "90%",
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