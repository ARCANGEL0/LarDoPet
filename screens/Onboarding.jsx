
import React, { Component } from 'react';
import {
  StyleSheet,  
  Text,         
  View,
  Image,
} from 'react-native';

import Button from '../components/Button.jsx';
import Swiper from '../components/Swiper.jsx';


export default class Onboarding extends Component {
  render() {
    return (
    
      <Swiper navigation={this.props.navigation}>
      {/* First screen */}
      <View style={styles.slide}>
        <Image style={styles.img} source={require('../assets/images/banner1.jpg')}/>
        <Text style={styles.header}>Adoção de animais</Text>
        <Text style={styles.text}>
Se sentindo sozinho, precisando da companhia de um bichinho? Ou precisa doar seu pet por algum motivo? Pois você está no lugar certo!        </Text>
      </View>
      {/* Second screen */}
      <View style={styles.slide}>
      <Image style={[styles.img, { width: 400,height: 800, resizeMode: 'stretch' }]} source={require('../assets/images/banner2.jpg')}/>

        <Text style={styles.header}>Resgate de pets</Text>
        <Text style={styles.text}>

Achou um cachorro abandonado na rua que precisa de cuidados mas você não tem condições de dar moradia a ele? Aqui você encontra pessoas dispostas a adotar, petshots e veterinários perto da sua região!
        </Text>
      </View>
      {/* Third screen */}
      <View style={styles.slide}>
              <Image style={[styles.img, { width: 420,height: 400, resizeMode: 'stretch' }]}  source={require('../assets/images/banner3.jpg')}/>

              <View > 
                            <Image style={{width: 150, height: 150, marginHorizontal: 60}}  source={require('../assets/images/3.png')}/>

        <Text  onPress={() => {        this.props.navigation.navigate('Login')

      }}style={[styles.header, { marginBottom: 200 }]} >Participe da comunidade!</Text>
        </View>
      </View>
    </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,                   
    justifyContent: 'center',   
    alignItems: 'center',   
    backgroundColor: '#fff'    
  },
  header: {
    color: '#171718',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  text: {
    color: '#444444',
    fontSize: 14,
    marginHorizontal: 35,
    textAlign: 'center',
    marginBottom: 180
  },
  img: {
flex: 1,
  width: 300,
  height: 500,
  marginTop: 60,
  resizeMode: 'contain',
  }
});