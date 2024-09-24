import { View, Text, Pressable, TextInput } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';
import HeaderComponent from "../../../components/Header/Header";
import Male9Styles from './Male9Styles';

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
    
    (strokes in 9 holes * 113 ) / 94 + 30 0 (0.5 * handicap)

    variables: strokes, handicap, tee
    */

    const [strokes, setChangeStroke] = React.useState("")

    const [curTee, setChangeCurTee] = React.useState("")

    function TeeRed() {

        if (curTee == "red") {
            return {
                borderColor: 'red'
            }
        } else {
            return {
                borderColor: 'gray'
            }
        }
    }

    function TeeYellow() {

        if (curTee == "yellow") {
            return {
                borderColor: 'yellow', borderWidth: 2
            }
        } else {
            return {
                borderColor: 'gray', borderWidth: 2
            }
        }
    }


    return (
        <View>
            <HeaderComponent title={"Male 9"} hrefPath={"../JarlabankeCourses"} />

            <View style={Male9Styles.container}>
                <Text style={Male9Styles.teeText}>Tee</Text>
                <View style={Male9Styles.teeButtonView}>
                    <Pressable style={[Male9Styles.redTeeBtn, TeeRed()]}
                        onPress={() => {
                            setChangeCurTee('red');
                        }}>
                        <Text style={Male9Styles.redTeeTxt}>Red</Text>
                    </Pressable>


                    <Pressable style={[Male9Styles.yellowTeeBtn, TeeYellow()]} onPress={() => {
                        setChangeCurTee("yellow")
                    }}>
                        <Text style={Male9Styles.yellowTeeTxt}>Yellow</Text>
                    </Pressable>
                </View>


            </View>

            {/*  <View style={Male9Styles.viewContainer}>


                <View style={Male9Styles.strokesInputView}>
                    <Text>Total strokes</Text>
                    <TextInput
                        placeholder='Blank'
                        onChangeText={onChangeStroke}
                        value={strokes}
                        style={Male9Styles.strokesTextInput}
                    />
                </View>

            </View>
 */}

        </View >
    )
}

export default Male9