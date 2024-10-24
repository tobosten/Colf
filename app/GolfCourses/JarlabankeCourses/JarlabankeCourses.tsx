import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import JarlabankeStylesheet from './JarlabankeStylesheet';
import HeaderComponent from '../../components/Header/Header';

const JarlabankeCourses = () => {


  return (
    <View>
      <HeaderComponent title={"Jarlabanke"} hrefPath={"../../../CoursesListScreen/CoursesListScreen"} />
      <View>
        <View style={JarlabankeStylesheet.hole9ViewContainer}>
          <Text style={JarlabankeStylesheet.hole9Title}>9-holes</Text>
          <View style={JarlabankeStylesheet.hole9ButtonContainer}>
            <Link href={"./Male9/Male9"} asChild
              style={[
                JarlabankeStylesheet.hole9MaleButton,
                JarlabankeStylesheet.buttonBorderShadow,
              ]}>
              <Pressable>
                <Text style={JarlabankeStylesheet.textStyle}>9-male</Text>
              </Pressable>
            </Link>
            <Link href={"./Female9/Female9"} asChild
              style={[
                JarlabankeStylesheet.hole9FemaleButton,
                JarlabankeStylesheet.buttonBorderShadow
              ]}>
              <Pressable>
                <Text style={JarlabankeStylesheet.textStyle}>9-female</Text>
              </Pressable>
            </Link>
          </View>
        </View>
      </View>
    </View >
  )
}

export default JarlabankeCourses






/* 
Prästgården 9-hål Herr
Prästgården 9-hål Dam

*/
