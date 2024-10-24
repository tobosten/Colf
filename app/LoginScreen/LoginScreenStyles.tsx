import { StyleSheet } from 'react-native'


export const LoginScreenStyles = StyleSheet.create({

    titleText: {
        fontSize: 24,
        fontWeight: "500",
        alignSelf: "center",
        zIndex: 1,
        marginTop: "30%",
        color: "#706abe"
    },
    swingImage: {
        height: 150,
        width: 150,
        marginTop: "10%",
        alignSelf: "center",
    },
    ballImage: {
        height: 20,
        width: 20,
        position: "absolute",
        marginTop: "60%",
        marginLeft: "75%"
    },


    loginButtonPressable: {
        width: "50%",
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#bac1e7",
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginTop: "20%"
    },
    loginButtonText: {
        fontSize: 18,
        fontWeight: "500",
        color: "#706abe",
        marginVertical: 3,
    },

    registerPressable: {
        alignSelf: "center",
        justifyContent: "center",
    },
    registerTest: {
        color: "#4c46a5",
        fontStyle: "italic",
        textDecorationLine: "underline",
        marginHorizontal: 40,
        marginVertical: 20
    },


    borderShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 10,
        padding: 5,
    },

})

