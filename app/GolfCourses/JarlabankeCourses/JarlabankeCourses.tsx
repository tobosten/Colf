import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import JarlabankeStylesheet from "./JarlabankeStylesheet";
import HeaderComponent from "../../components/Header/Header";

const JarlabankeCourses = () => {
  return (
    <View>
      <HeaderComponent
        title={"Jarlabanke"}
        hrefPath={"../../../CoursesListScreen/CoursesListScreen"}
      />
      <View>
        {/* 9 hole container */}
        <View style={JarlabankeStylesheet.holeViewContainer}>
          <Text style={JarlabankeStylesheet.holeTitle}>9-holes</Text>
          <View style={JarlabankeStylesheet.holeButtonContainer}>
            <Link
              href={"./MaleCourses/Male9"}
              asChild
              style={[
                JarlabankeStylesheet.holeMaleButton,
                JarlabankeStylesheet.buttonBorderShadow,
              ]}
            >
              <Pressable>
                <Text style={JarlabankeStylesheet.textStyle}>Male</Text>
              </Pressable>
            </Link>
            <Link
              href={"./FemaleCourses/Female9"}
              asChild
              style={[
                JarlabankeStylesheet.holeFemaleButton,
                JarlabankeStylesheet.buttonBorderShadow,
              ]}
            >
              <Pressable>
                <Text style={JarlabankeStylesheet.textStyle}>Female</Text>
              </Pressable>
            </Link>
          </View>
        </View>

        {/* 18 hole container */}
        <View>
          <View
            style={[
              JarlabankeStylesheet.holeViewContainer,
              JarlabankeStylesheet.hole18Container,
            ]}
          >
            <Text style={JarlabankeStylesheet.holeTitle}>12-holes</Text>
            <View style={JarlabankeStylesheet.holeButtonContainer}>
              <Link
                href={"./MaleCourses/Male12"}
                asChild
                style={[
                  JarlabankeStylesheet.holeMaleButton,
                  JarlabankeStylesheet.buttonBorderShadow,
                ]}
              >
                <Pressable>
                  <Text style={JarlabankeStylesheet.textStyle}>Male</Text>
                </Pressable>
              </Link>
              <Link
                href={"./FemaleCourses/Female12"}
                asChild
                style={[
                  JarlabankeStylesheet.holeFemaleButton,
                  JarlabankeStylesheet.buttonBorderShadow,
                ]}
              >
                <Pressable>
                  <Text style={JarlabankeStylesheet.textStyle}>Female</Text>
                </Pressable>
              </Link>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default JarlabankeCourses;

/* 
Prästgården 9-hål Herr
Prästgården 9-hål Dam

*/
