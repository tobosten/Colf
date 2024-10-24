import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { LoginScreenStyles } from './LoginScreenStyles'

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
            <Image source={require("@/assets/images/golf-ball.png")} style={LoginScreenStyles.ballImage}/> 

            <Pressable style={[LoginScreenStyles.loginButtonPressable, LoginScreenStyles.borderShadow]}
                onPress={() => {
                    console.log("Login button pressed")
                }}>
                <Text style={LoginScreenStyles.loginButtonText}>Login</Text>
            </Pressable>
            <Pressable style={LoginScreenStyles.registerPressable}
                onPress= {() => {
                    console.log("Register button pressed")
                }}>
                <Text style={LoginScreenStyles.registerTest}>Don't have an account?</Text>
            </Pressable>

        </View>
    )
}

export default LoginScreen