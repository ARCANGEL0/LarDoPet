import React from 'react';
import {SafeAreaView, Text, StyleSheet, TouchableOpacity} from 'react-native';
import SignOut from '../utils/SignOut.jsx';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const Home = (props, {setLogin,setUsuario, setData, Logout, setLoading}) => {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

          <View style={styles.container}>

          <View style={styles.header} >


        <TouchableOpacity style={styles.returnBtn}

        onPress={() => {
            props.navigation.navigate('Login')
}}>
      <IoIcons   style={styles.return} name="return-down-back" size={36} color="#fff" />
</TouchableOpacity>
 </View>

      <StatusBar style="auto" />

      <View style={styles.body}>



</View>
</View>
{/*      <Text>logado</Text>

      <TouchableOpacity
        onPress={() => {

        	SignOut(props)}
        }
       style={styles.loginBtn}>
                    <MaterialIcon   style={styles.icon} name="login" size={18} color="#53bd57" />

        <Text style={styles.loginText}>LogOut</Text>
      </TouchableOpacity>*/}



    </SafeAreaView>
  );
};


 
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",

  },
returnBtn: {
marginBottom: 150,
},
return: {
  position: 'absolute',
  paddingRight: 50,
  paddingTop: 40,

}

,  body: {
    backgroundColor: '#fcfcfc',
borderWidth: 1,
borderColor: '#cecece',
    flex:1, 
    position: 'absolute',
top: 180,
height: '70%',
borderRadius: 10,

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

  });


export default Home;