import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import Onboarding from './screens/Onboarding.jsx'
import Login from './screens/Login.jsx';
import Registrar from './screens/Registrar.jsx'
import Redefinir from './screens/Redefinir.jsx'
import Home from './screens/Home.jsx';
import FlashMessage from "react-native-flash-message";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import checkInicio from './components/checkInicio.jsx'
const Stack = createNativeStackNavigator();

export default function App() {

const [primeiraVez, setPrimeiraVez] = useState(true)
const [logado, setLogado] = useState(false);





const checkLogin = () => {

if(logado) {
        return(
                  <>
             <Stack.Screen 
                    options={{headerShown: false}}

                    name="Home" component={Home} />
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
                    <Login setLogin={setLogado} {...props}/>
               )}
                 </Stack.Screen>



            <Stack.Screen 

                   options={{headerShown: false}}

                 name="Registrar" component={Registrar} />

                 <Stack.Screen 

                   options={{headerShown: false}}

                 name="Redefinir" component={Redefinir} />
            </>
          );
      }
}

  useEffect(() => {
        checkInicio().then((checkInicio) => {
            setPrimeiraVez(checkInicio)
        });
        console.log(primeiraVez);
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
