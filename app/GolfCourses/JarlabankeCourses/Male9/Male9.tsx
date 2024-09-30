import { View, Text, Pressable, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';
import HeaderComponent from "../../../components/Header/Header";
import Male9Styles from './Male9Styles';
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';

const Male9 = () => {




    /* 
    Gul: 
    Course Rating: 57.8
    Slope: 94

    Röd:
    Course Rating: 53.7
    Slope Rating: 86

    Par: 30
    Second par: 30



    (Strokes in 9 holes x 113/Slope Rating + second nine par + 0.5 x Course Handicap) – Course Rating.
    (strokes in 9 holes * 113 ) / 94 + 30 + (0.5 * handicap)

    variables: strokes, handicap, tee

    (Adjusted Gross Score for 9 holes x 113/Slope Rating + second nine par + 0.5 x Course Handicap) – Course Rating
    */

    //Average of 10 rounds multiply by 0.96
    // 0.95 / 10 = 0.096  0.9696


    // [ Handicap Index / 2 ] x [ 9 hole Slope Rating / 113 ] + [ 9 hole Course Rating - 9 hole Par ] 
    // (Score - Rating) * (113 / Slope)
    // (46 - 43) * (113 / 121)

    const [curTee, setCurTee] = React.useState("")
    const [handicap, setHandicap] = React.useState("")
    const [curStrokes, setStrokes] = React.useState("")

    //(strokes - cr/2) * (113 / 86)
    var test = (45 - 26.65) * (113 / 86)

    function CalculateHandicap() {

        var a = Number(handicap)
        var b = Number(curStrokes)

        if (curTee == "Red") {
            var h = (45 * 113) / 86
            console.log(h)
        } else {
            var h = ((b - 57.8) * (113 / 94))
        }


        Dialog.show({
            type: ALERT_TYPE.SUCCESS,
            title: 'Handicap',
            textBody: `${h}`,
            button: 'close',
        })





    }



    function TeeRed() {

        if (curTee == "red") {
            return {
                borderColor: 'red'
            }
        } else {
            return {
                borderColor: 'lightgray'
            }
        }
    }

    function TeeYellow() {

        if (curTee == "yellow") {
            return {
                borderColor: 'yellow'
            }
        } else {
            return {
                borderColor: 'lightgray'
            }
        }
    }



    return (
        <AlertNotificationRoot>
            <ScrollView >
                <HeaderComponent title={"Male 9"} hrefPath={"../JarlabankeCourses"} />

                {/* Tee */}
                <View style={Male9Styles.teeContainer}>
                    <Text style={Male9Styles.teeText}>Tee</Text>
                    <View style={Male9Styles.teeButtonView}>
                        <Pressable style={[Male9Styles.redTeeBtn, TeeRed()]}
                            onPress={() => {
                                setCurTee('red');
                            }}>
                            <Text style={Male9Styles.redTeeTxt}>Red</Text>
                        </Pressable>


                        <Pressable style={[Male9Styles.yellowTeeBtn, TeeYellow()]} onPress={() => {
                            setCurTee("yellow")
                        }}>
                            <Text style={Male9Styles.yellowTeeTxt}>Yellow</Text>
                        </Pressable>
                    </View>


                </View>

                {/* Handicap */}
                <View style={Male9Styles.handicapContainer}>
                    <Text style={Male9Styles.handicapTxt}>Current Handicap</Text>
                    <TextInput
                        style={Male9Styles.handicapTxtInput}
                        onChangeText={setHandicap}
                        value={handicap}
                        placeholder='Handicap'
                    />
                </View>

                {/* Strokes */}
                <View style={Male9Styles.strokesContainer}>
                    <Text style={Male9Styles.strokesText}>Total Strokes</Text>

                    <TextInput
                        style={Male9Styles.strokesTxtInput}
                        onChangeText={setStrokes}
                        value={curStrokes}
                        placeholder='Strokes'
                    />
                </View>

                {/* Calc button */}
                <View style={Male9Styles.calcContainer}>
                    <Pressable style={Male9Styles.calcBtn}
                        onPress={() => {
                            //CalculateHandicap()
                            console.log("Test: " + test)
                        }}>
                        <Text style={Male9Styles.calcBtnTxt}>Calculate</Text>
                    </Pressable>
                </View>

            </ScrollView >
        </AlertNotificationRoot>
    )
}

export default Male9