import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, AsyncStorage} from 'react-native';
import React, {useState, useEffect} from 'react';
import Onboarding from './screens/Onboarding.jsx'
import Login from './screens/Login.jsx';
import Registrar from './screens/Registrar.jsx'
import Redefinir from './screens/Redefinir.jsx'
import Home from './screens/Home.jsx';
import FlashMessage from "react-native-flash-message";
import Spinner from 'react-native-loading-spinner-overlay';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import checkInicio from './components/checkInicio.jsx'
const Stack = createNativeStackNavigator();

export default function App() {

const [primeiraVez, setPrimeiraVez] = useState(true)
const [logado, setLogado] = useState(false);
const [manterLogado, setManterLogado] = useState(false);
const [usuario, setUsuario] = useState('');
  const [isLoading, setLoading] = useState(false);



const Logout = async () => {


await AsyncStorage.setItem('usuario','');
dataUsuario('')

}


const checkLogin = () => {

if(usuario) {
        return(
                  <>
             <Stack.Screen 
                    options={{headerShown: false}}

                    name="Home"  >
                       {(props) => (
                    <Home Logout={Logout}  setLoading={setLoading} setData={setData} setUsuario={setUsuario} manterLogado={manterLogado} setManterLogado={setManterLogado} setLogin={setLogado} {...props}/>
               )}
                    </Stack.Screen>
                  </>
          );
}
else {
    return (
          <>
     <Stack.Screen 

                   options={{headerShown: false}}

                

                 name="Login" 

                >
                 {(props) => (
                    <Login  setLoading={setLoading} setData={setData} setUsuario={setUsuario}{...props}/>
               )}
                 </Stack.Screen>



            <Stack.Screen 

                   options={{headerShown: false}}

                 name="Registrar"
            >
            
                 {(props) => (
                                <Registrar setLoading={setLoading} setData={setData} setUsuario={setUsuario} anterLogado={setManterLogado} setLogin={setLogado} {...props}/>
               )}


            </Stack.Screen>

                 <Stack.Screen 

                   options={{headerShown: false}}

                 name="Redefinir" component={Redefinir} />
            </>
          );
      }
}


const setData = async (data) => {
if(manterLogado){
await AsyncStorage.setItem('usuario',JSON.stringify(data.user));

}
dataUsuario(data.user)

}


const dataUsuario = (info) => {
  setUsuario(info)
} 



const getData = async () => {
  try {
   const userData = await AsyncStorage.getItem('usuario')
        dataUsuario(userData)
    
  
  } catch(e) {
      console.log("ERRO DO GET DATA:    " + e)
  }
}


  useEffect(() => {
getData();
        checkInicio().then((checkInicio) => {
            setPrimeiraVez(checkInicio)
        });

       
    }, [])


  return (
      <NavigationContainer>
      <Stack.Navigator
       mode="modal"
        screenOptions={{
          headerShown: false,
        }}
        >


{ primeiraVez ?  
 <Stack.Screen 
        options={{headerShown: false}}

        name="Onboarding" component={Onboarding} /> :

null
      }

     

{checkLogin()}
      
           

      </Stack.Navigator>

      { isLoading ?
<Spinner
          visible={true}
          textStyle={styles.spinnerTextStyle}
        />

        : null
}

      <FlashMessage 
      position="top"    
duration={2300}
hideStatusBar={false}
              style={styles.alert}
              titleStyle={styles.alertText}
      /> 
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
