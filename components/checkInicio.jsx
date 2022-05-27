import { AsyncStorage } from 'react-native';
    
const PRIMEIRAVEZ = 'primeiraVez';

function CheckInicio() {
  AsyncStorage.setItem(PRIMEIRAVEZ, 'true');
}

export default async function checkInicio() {
  try {
    const primeiroBoot = await AsyncStorage.getItem(PRIMEIRAVEZ);
    if (primeiroBoot === null) {
      CheckInicio();
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
}