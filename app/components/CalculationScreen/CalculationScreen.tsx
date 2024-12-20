import { View, Text, Pressable, TextInput, ScrollView } from "react-native";
import React from "react";
import CalculationStyles from "./CalculationStyles";
import { Link } from "expo-router";
import HeaderComponent from "../Header/Header";
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
  Toast,
} from "react-native-alert-notification";
import { LinearGradient } from "expo-linear-gradient";

interface CalcHCPValues {
  /* strokesValue: String;
    handicapValue: String; */
  courseRatingRedTee: Number;
  slopeRatingRedTee: Number;
  courseRatingYellowTee: Number;
  slopeRatingYellowTee: Number;
  coursePar: Number;
  courseSecondPar: Number;
}

const CalculationScreen = ({
  /*  strokesValue,
     handicapValue, */
  courseRatingRedTee,
  slopeRatingRedTee,
  courseRatingYellowTee,
  slopeRatingYellowTee,
  coursePar,
  courseSecondPar,
}: CalcHCPValues) => {
  const [curTee, setCurTee] = React.useState("");
  const [handicap, setHandicap] = React.useState("");
  const [strokes, setStrokes] = React.useState("");

  //var test = (45 - 26.65) * (113 / 86)

  /* 
    Gul: 
    Course Rating: 57.8
    Slope Rating: 94

    Röd:
    Course Rating: 53.7
    Slope Rating: 86

    Par: 30
    Second par: 30
    */

  function CalculateHandicap() {
    // (Score - Rating) * (113 / Slope) 18-hole
    // Calcs 9-hole HCP:  [ Handicap Index / 2 ] x [ 9 hole Slope Rating / 113 ] + [ 9 hole Course Rating - 9 hole Par ]

    // Adjusted Gross Score for 9 holes x 113/Slope Rating + second nine par + 0.5 x Course Handicap) – Course Rating.
    var a = Number(handicap);
    var b = Number(strokes);
    var sRating = Number(slopeRatingRedTee);
    var cRating = Number(courseRatingRedTee);
    var s9Par = Number(courseSecondPar);
    var par9 = Number(coursePar);

    // (Strokes in 9 holes x 113/Slope Rating + second nine par + 0.5 x Course Handicap) – Course Rating.
    // (Score - Rating) * (113 / Slope) 18-hole
    var c = (b * 113) / sRating;
    var d = c + s9Par + 0.5 * a;
    var e = d - cRating;

    console.log("Test: " + e);

    /*    if (curTee == "Red") {
               var h = (45 * 113) / 86
               console.log(h)
           } else {
               var h = ((b - 57.8) * (113 / 94))
           }
    */

    Dialog.show({
      type: ALERT_TYPE.SUCCESS,
      title: "Handicap",
      textBody: `${"hjej"}`,
      button: "close",
    });
  }

  return (
    <AlertNotificationRoot>
      <ScrollView>
        {/* Tee */}
        <View style={CalculationStyles.teeContainer}>
          <Text style={CalculationStyles.teeText}>Tee</Text>
          <View style={CalculationStyles.teeButtonView}>
            {TeeRed()}
            {TeeYellow()}
          </View>
        </View>

        {/* Handicap */}
        <View style={CalculationStyles.handicapContainer}>
          <Text style={CalculationStyles.handicapTxt}>Current Handicap</Text>
          <TextInput
            style={CalculationStyles.handicapTxtInput}
            onChangeText={setHandicap}
            value={handicap}
            placeholder="Handicap"
          />
        </View>

        {/* Strokes */}
        <View style={CalculationStyles.strokesContainer}>
          <Text style={CalculationStyles.strokesText}>Total Strokes</Text>

          <TextInput
            style={CalculationStyles.strokesTxtInput}
            onChangeText={setStrokes}
            value={strokes}
            placeholder="Strokes"
          />
        </View>

        {/* Calc button */}
        <View style={CalculationStyles.calcContainer}>
          <LinearGradient
            // Button Linear Gradient
            colors={["#8586cf", "#9ea2db", "#bac1e7"]}
            style={CalculationStyles.linearGradient}
          >
            <Pressable
              style={CalculationStyles.calcBtn}
              onPress={() => {
                CalculateHandicap();
              }}
            >
              <Text style={CalculationStyles.calcBtnTxt}>Calculate</Text>
            </Pressable>
          </LinearGradient>
        </View>
      </ScrollView>
    </AlertNotificationRoot>
  );

  function TeeRed() {
    let teeStyle = [];
    let teeTxt = {};
    let lgColors = ["#ffffff", "#ffffff", "#ffffff"];

    if (curTee == "red") {
      teeStyle = [{ borderColor: "#8586cf", backgroundColor: "#8586cf" }];
      teeTxt = { color: "#ffffff" };
      lgColors = ["#8586cf", "#9ea2db ", "#bac1e7"];
    } else {
      teeStyle = [{ borderColor: "#8586cf" }];
      teeTxt = { color: "#706abe" };
      lgColors = ["#ffffff", "#ffffff", "#ffffff"];
    }

    return (
      <LinearGradient colors={lgColors}>
        <Pressable
          style={[CalculationStyles.redTeeBtn, teeStyle]}
          onPress={() => {
            setCurTee("red");
          }}
        >
          <Text style={[CalculationStyles.redTeeTxt, teeTxt]}>Red</Text>
        </Pressable>
      </LinearGradient>
    );
  }

  function TeeYellow() {
    let teeStyle = [];
    let teeTxt = {};
    let lgColors = ["#ffffff", "#ffffff", "#ffffff"];

    if (curTee == "yellow") {
      teeStyle = [{ borderColor: "#8586cf", backgroundColor: "#8586cf" }];
      teeTxt = { color: "#ffffff" };
      lgColors = ["#8586cf", "#9ea2db ", "#bac1e7"];
    } else {
      teeStyle = [{ borderColor: "#8586cf" }];
      teeTxt = { color: "#706abe" };
      lgColors = ["#ffffff", "#ffffff", "#ffffff"];
    }

    return (
      <LinearGradient colors={lgColors}>
        <Pressable
          style={[CalculationStyles.yellowTeeBtn, teeStyle]}
          onPress={() => {
            setCurTee("yellow");
          }}
        >
          <Text style={[CalculationStyles.yellowTeeTxt, teeTxt]}>Yellow</Text>
        </Pressable>
      </LinearGradient>
    );
  }
};

export default CalculationScreen;
