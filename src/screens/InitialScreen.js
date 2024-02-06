import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const InitialScreen = () => {
  return (
    <LinearGradient 
    start={{x: 0, y: 0}} 
    end={{x: 1, y: 0}} 
    colors={['#0097B2', '#7ED957']}
    style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />

      <Text style={styles.manausConectaText}>Manaus Conecta</Text>

      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpButtonText}>Cadastre-se</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.signInButtonText}>Entrar</Text>
      </TouchableOpacity> 
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 20, 
    },
    logo: {
      width: 250,
      height: 250,
      marginTop: 20, 
    },
    manausConectaText:{
      color: 'white',
      fontSize: 30,
      flex: 1, 
      justifyContent: 'center',
      alignItems: 'center',
    },
  signUpButton: {
    backgroundColor: '#5E17EB',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
  },
  signUpButtonText: {
    color: 'white',
    fontSize: 16,
  },
  signInButton: {
    padding: 15,
    borderRadius: 5,
  },
  signInButtonText: {
    color: 'white',
    fontSize: 16,
  },

});

export default InitialScreen;
