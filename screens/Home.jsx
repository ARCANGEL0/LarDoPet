import React from 'react';
import {SafeAreaView, Text, StyleSheet, TouchableOpacity} from 'react-native';
import SignOut from '../utils/SignOut.jsx';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const Home = (props, {setLogin,setUsuario, setData, Logout, setLoading}) => {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>logado</Text>

      <TouchableOpacity
        onPress={() => {

        	SignOut(props)}
        }
       style={styles.loginBtn}>
                    <MaterialIcon   style={styles.icon} name="login" size={18} color="#53bd57" />

        <Text style={styles.loginText}>LogOut</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

 
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

export default Home;