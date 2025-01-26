import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';
import HeaderComponent from '@/app/components/Header/Header';
import CalculationScreen from '@/app/components/CalculationScreen/CalculationScreen';

const Female9 = () => {
    return (
        <ScrollView>
            <HeaderComponent title={"9 Female"} hrefPath={"../JarlabankeCourses"} />
            <CalculationScreen
                courseRatingRedTee={56}
                slopeRatingRedTee={88}
                courseRatingYellowTee={58.5}
                slopeRatingYellowTee={92}
                coursePar={30}
                courseSecondPar={30}
            />
        </ScrollView>
    )
}

export default Female9