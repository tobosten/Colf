import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { LoginScreenStyles } from './LoginScreenStyles'
import { Link } from 'expo-router'

const LoginScreen = () => {
    /* 
      Colors: 
      Text: #706abe
            #8586cf 
            #9ea2db 
      Borders: #bac1e7
      */


    return (
        <View>
            <Text style={LoginScreenStyles.titleText}>Welcome to Colf</Text>
            <Image source={require("@/assets/images/swing.png")} style={LoginScreenStyles.swingImage} />
            <Image source={require("@/assets/images/golf-ball.png")} style={LoginScreenStyles.ballImage} />

            <Link href={"../CoursesListScreen/CoursesListScreen"} asChild
                style={[LoginScreenStyles.loginButtonPressable, LoginScreenStyles.borderShadow]}>
                <Pressable
                    onPress={() => {
                        console.log("Login button pressed")
                    }}>
                    <Text style={LoginScreenStyles.loginButtonText}>Login</Text>
                </Pressable>
            </Link>

            <Pressable style={LoginScreenStyles.registerPressable}
                onPress={() => {
                    console.log("Register button pressed")
                }}>
                <Text style={LoginScreenStyles.registerTest}>Don't have an account?</Text>
            </Pressable>

        </View>
    )
}

export default LoginScreen