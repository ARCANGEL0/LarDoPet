import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import Onboarding from './screens/Onboarding.jsx'
import Login from './screens/Login.jsx';
import Registrar from './screens/Registrar.jsx'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import checkInicio from './components/checkInicio.jsx'
const Stack = createNativeStackNavigator();

export default function App() {

const [primeiraVez, setPrimeiraVez] = useState(true)


  useEffect(() => {
        checkInicio().then((checkInicio) => {
            setPrimeiraVez(checkInicio)
        });
        console.log(primeiraVez);
    }, [])


  return (
      <NavigationContainer>
      <Stack.Navigator>


{ primeiraVez ?   <Stack.Screen 
        options={{headerShown: false}}

        name="Onboarding" component={Onboarding} /> :

  <Stack.Screen 

               options={{headerShown: false}}

             name="Login" component={Login} />
      }


      
          <Stack.Screen 

               options={{headerShown: false}}

             name="Registrar" component={Registrar} />

      
           

      </Stack.Navigator>
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
});
