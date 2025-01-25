import { View, Text, ScrollView } from "react-native";
import React from "react";
import HeaderComponent from "@/app/components/Header/Header";
import CalculationScreen from "@/app/components/CalculationScreen/CalculationScreen";

const Female12 = () => {
  /* 
    Female:
      Red:
        Course Rating: 68.3
        Slope Rating: 117
      Yellow:
        Course Rating: 74.4
        SlopeRating: 129

      Par: 49
  */

  return (
    <ScrollView>
      <HeaderComponent title={"12 Female"} hrefPath={"../JarlabankeCourses"} />
      <CalculationScreen
        courseRatingRedTee={68.3}
        slopeRatingRedTee={117}
        courseRatingYellowTee={74.4}
        slopeRatingYellowTee={129}
        coursePar={49}
        courseSecondPar={0}
      />
    </ScrollView>
  );
};

export default Female12;
