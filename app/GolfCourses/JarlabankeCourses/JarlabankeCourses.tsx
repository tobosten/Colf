import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import JarlabankeStylesheet from './JarlabankeStylesheet';

const JarlabankeCourses = () => {


  return (
    <View>

      <View style={JarlabankeStylesheet.goBackView}>

        <Link href={"../../CoursesListScreen/CoursesListScreen"} asChild>
          <Pressable style={JarlabankeStylesheet.backPressable}>

            <View style={JarlabankeStylesheet.backFlexViewLeft}>
              <Image
                style={JarlabankeStylesheet.backImage}
                source={require('../../../assets/images/chevron_left_24dp.png')} />
            </View>

            <View style={JarlabankeStylesheet.backFlexViewMiddle}>
              <Text style={JarlabankeStylesheet.backTitle}>Jarlabanke</Text>
            </View>

            <View style={JarlabankeStylesheet.backFlexViewRight}></View>

          </Pressable>
        </Link>
      </View>
      <LinearGradient colors={['rgba(117, 117, 117, 0.8)', 'transparent']} style={JarlabankeStylesheet.backViewGradient} />

      <View>

        <View style={JarlabankeStylesheet.hole9ViewContainer}>
          <Text style={JarlabankeStylesheet.hole9Title}>9-holes</Text>
          <View style={JarlabankeStylesheet.hole9ButtonContainer}>
            <Link href={"./Male9/Male9"} asChild style={[JarlabankeStylesheet.hole9MaleButton, JarlabankeStylesheet.buttonBorderShadow]}>
              <Pressable >
                <Text>9-male</Text>
              </Pressable>
            </Link>

            <Link href={"./Female9/Female9"} asChild style={[JarlabankeStylesheet.hole9FemaleButton, JarlabankeStylesheet.buttonBorderShadow]}>
              <Pressable>
                <Text>9-female</Text>
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
