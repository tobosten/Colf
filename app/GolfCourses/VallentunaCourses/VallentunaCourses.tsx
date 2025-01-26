import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";
import React from "react";
import HeaderComponent from "@/app/components/Header/Header";
import GolfCoursesStylesheet from "../GolfCoursesStylesheet";

const VallentunaCourses = () => {
  return (
    <View>
      <HeaderComponent
        title={"Vallentuna"}
        hrefPath={"../../../CoursesListScreen/CoursesListScreen"}
      />

      <View style={GolfCoursesStylesheet.holeViewContainer}>
        <Text style={GolfCoursesStylesheet.holeTitle}>18-holes</Text>
        <View style={GolfCoursesStylesheet.holeButtonContainer}>
          <Link
            href={"./MaleCourses/"}
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
            href={"./FemaleCourses/"}
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
  );
};

export default VallentunaCourses;
