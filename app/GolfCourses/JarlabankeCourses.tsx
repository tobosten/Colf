import { View, Text, Image, TouchableOpacity, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

const JarlabankeCourses = () => {


  return (
    <View>
      <View>
        <Link href={"../CoursesListScreen/CoursesListScreen"}>
            <Image
              style={styles.backImage}
              source={require('../../assets/images/chevron_left_24dp.png')} />
        </Link>
      </View>
    </View>
  )
}

export default JarlabankeCourses


const styles = StyleSheet.create({
  backImage: {
    height: 30,
    width: 10,
  }
})



/* 
Prästgården 9-hål Herr
Prästgården 9-hål Dam

*/
