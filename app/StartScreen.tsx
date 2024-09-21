import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


export default function StartScreen() {

  return (
    <View style={styles.homeView}>
      <Text style={styles.welcomeText}>Welcome to Colf!</Text>

      <TouchableOpacity style={styles.continueButton} onPress={continueButton}>
        <Text style={styles.continueButtonText}>Calculate my Score</Text>
      </TouchableOpacity>
    </View>
  )
}

function continueButton() {
  return null
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
    alignSelf: 'center',
    marginTop: '50%',
    borderWidth: 1,
    width: '40%',
    borderRadius: 3,
    paddingVertical: 7,
  },
  continueButtonText: {
    alignSelf: 'center'
  }
});







