import { View, Text, ScrollView } from "react-native";
import React from "react";
import HeaderComponent from "@/app/components/Header/Header";
import CalculationScreen from "@/app/components/CalculationScreen/CalculationScreen";

const Male12 = () => {
  /* 
    Male:
      Yellow:
        CourseRating: 69.3
        SlopeRating: 122
      Red:
        CourseRating: 64.3
        SlopeRating: 112

    Par: 49
*/
  return (
    <ScrollView>
      <HeaderComponent title="12 Male" hrefPath={"../JarlabankeCourses"} />

      <CalculationScreen
        courseRatingRedTee={68.3}
        slopeRatingRedTee={122}
        courseRatingYellowTee={64.3}
        slopeRatingYellowTee={112}
        coursePar={49}
        courseSecondPar={0}
      />
    </ScrollView>
  );
};

export default Male12;
