import { AsyncStorage } from 'react-native';
    
const LOGADO = 'logado';

function CheckLogado() {
  AsyncStorage.setItem(LOGADO, 'false');
}

export default async function CheckLogado() {
  try {
    const manterConectado = await AsyncStorage.getItem(LOGADO);
    if (manterConectado === null) {
      CheckLogado();
      return false;
    }
    return true;
  } catch (error) {
    return true;
  }
}