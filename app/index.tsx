import { Image, StyleSheet, Platform, View, Text, Button, Pressable, TouchableOpacity } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useLocalSearchParams } from 'expo-router';
import { Link } from 'expo-router';
import LoginScreen from './LoginScreen/LoginScreen';


export default function HomeScreen() {
  

  return (
    <View>

      <LoginScreen />

    </View>



  )
}


const styles = StyleSheet.create({

  homeView: {
    borderWidth: 1,
    height: '100%',
    marginTop: '60%',
  },
  welcomeText: {
    fontSize: 24,
    alignSelf: 'center',
    borderWidth: 1,
  },
  continueButton: {
    marginTop: '50%',
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 3,
  },
  continueButtonText: {
    alignSelf: 'center',
    padding: 'auto'
  }
});


