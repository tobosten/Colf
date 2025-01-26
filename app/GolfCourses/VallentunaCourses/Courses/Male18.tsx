import { View, Text, ScrollView } from "react-native";
import React from "react";
import HeaderComponent from "@/app/components/Header/Header";
import CalculationScreen from "@/app/components/CalculationScreen/CalculationScreen";

const Male18 = () => {
  /* 
    Par: 72
     Red:
        Course Rating: 65.6
        Slope Rating: 117
     Yellow:
        Course Rating: 70.4
        Slope Ratign: 126
    */

  return (
    <ScrollView>
      <HeaderComponent title={"18 Male"} hrefPath={"../VallentunaCourses"} />
      <CalculationScreen
        courseRatingRedTee={65.6}
        slopeRatingRedTee={117}
        courseRatingYellowTee={70.4}
        slopeRatingYellowTee={126}
        coursePar={72}
        courseSecondPar={0}
      />
    </ScrollView>
  );
};

export default Male18;
