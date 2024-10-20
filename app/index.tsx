import { Image, StyleSheet, Platform, View, Text, Button, Pressable, TouchableOpacity } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useLocalSearchParams } from 'expo-router';
import { Link } from 'expo-router';


export default function HomeScreen() {


  return (
    <View>

      <View style={styles.homeView}>
        <Text style={styles.welcomeText}>Welcome to Colf!</Text>
        {/* ./CoursesListScreen/CoursesListScreen */}
        <Link href={"./CoursesListScreen/CoursesListScreen"} asChild style={styles.continueButton}>
          <Text style={styles.continueButtonText}>Continue to courses</Text>
        </Link>
      </View>

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


