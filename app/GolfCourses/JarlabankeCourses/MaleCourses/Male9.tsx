import { View, Text, Pressable, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';
import HeaderComponent from "@/app/components/Header/Header";
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';
import CalculationScreen from '@/app/components/CalculationScreen/CalculationScreen';

const Male9 = () => {


    /*
        (Strokes in 9 holes x 113/Slope Rating + second nine par + 0.5 x Course Handicap) – Course Rating.
        (strokes in 9 holes * 113 ) / 94 + 30 + (0.5 * handicap)
    
        variables: strokes, handicap, tee
    
        (Adjusted Gross Score for 9 holes x 113/Slope Rating + second nine par + 0.5 x Course Handicap) – Course Rating
    */

    //Average of 10 rounds multiply by 0.96
    // 0.95 / 10 = 0.096  0.9696


    // (Score - Rating) * (113 / Slope)
    // (46 - 43) * (113 / 121)

    //(strokes - cr/2) * (113 / 86)






    return (
        <ScrollView>
            <HeaderComponent title={"9 Male"} hrefPath={"../JarlabankeCourses"} />
            <CalculationScreen
                courseRatingRedTee={53.7}
                slopeRatingRedTee={86}
                courseRatingYellowTee={57.8}
                slopeRatingYellowTee={94}
                coursePar={30}
                courseSecondPar={30}
            />
        </ScrollView>
    )
}

export default Male9