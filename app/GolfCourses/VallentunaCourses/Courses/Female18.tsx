import { View, Text, ScrollView } from "react-native";
import React from "react";
import HeaderComponent from "@/app/components/Header/Header";
import CalculationScreen from "@/app/components/CalculationScreen/CalculationScreen";

const Female18 = () => {
  /* 
    Par: 72
     Red:
        Course Rating: 70.3
        SlopeRating: 122
     Yellow:
        Course Rating: 76.1
        Slope Rating: 135
    */
  return (
    <ScrollView>
      <HeaderComponent title={"18 Female"} hrefPath={"../VallentunaCourses"} />
      <CalculationScreen
        courseRatingRedTee={70.3}
        slopeRatingRedTee={122}
        courseRatingYellowTee={76.1}
        slopeRatingYellowTee={135}
        coursePar={72}
        courseSecondPar={0}
      />
    </ScrollView>
  );
};

export default Female18;
