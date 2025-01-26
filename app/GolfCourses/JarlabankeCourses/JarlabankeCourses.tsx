import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import GolfCoursesStylesheet from "../GolfCoursesStylesheet";
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
        <View style={GolfCoursesStylesheet.holeViewContainer}>
          <Text style={GolfCoursesStylesheet.holeTitle}>9-holes</Text>
          <View style={GolfCoursesStylesheet.holeButtonContainer}>
            <Link
              href={"./MaleCourses/Male9"}
              asChild
              style={[
                GolfCoursesStylesheet.holeMaleButton,
                GolfCoursesStylesheet.buttonBorderShadow,
              ]}
            >
              <Pressable>
                <Text style={GolfCoursesStylesheet.textStyle}>Male</Text>
              </Pressable>
            </Link>
            <Link
              href={"./FemaleCourses/Female9"}
              asChild
              style={[
                GolfCoursesStylesheet.holeFemaleButton,
                GolfCoursesStylesheet.buttonBorderShadow,
              ]}
            >
              <Pressable>
                <Text style={GolfCoursesStylesheet.textStyle}>Female</Text>
              </Pressable>
            </Link>
          </View>
        </View>

        {/* 18 hole container */}
        <View>
          <View
            style={[
              GolfCoursesStylesheet.holeViewContainer,
              GolfCoursesStylesheet.hole18Container,
            ]}
          >
            <Text style={GolfCoursesStylesheet.holeTitle}>12-holes</Text>
            <View style={GolfCoursesStylesheet.holeButtonContainer}>
              <Link
                href={"./MaleCourses/Male12"}
                asChild
                style={[
                  GolfCoursesStylesheet.holeMaleButton,
                  GolfCoursesStylesheet.buttonBorderShadow,
                ]}
              >
                <Pressable>
                  <Text style={GolfCoursesStylesheet.textStyle}>Male</Text>
                </Pressable>
              </Link>
              <Link
                href={"./FemaleCourses/Female12"}
                asChild
                style={[
                  GolfCoursesStylesheet.holeFemaleButton,
                  GolfCoursesStylesheet.buttonBorderShadow,
                ]}
              >
                <Pressable>
                  <Text style={GolfCoursesStylesheet.textStyle}>Female</Text>
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
