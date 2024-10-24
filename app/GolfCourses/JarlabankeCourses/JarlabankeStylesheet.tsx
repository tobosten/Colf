import { StyleSheet } from "react-native"

const JarlabankeStylesheet = StyleSheet.create({


    hole9ViewContainer: {
        width: '80%',
        alignSelf: 'center',
        marginTop: '10%',
    },
    hole9Title: {
        fontSize: 20,
        color: "#706abe",
        fontWeight: "500",
    },

    hole9ButtonContainer: {
        flexDirection: 'row',
    },

    hole9MaleButton: {
        height: 55,
        width: 70,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#bac1e7",
    },

    hole9FemaleButton: {
        height: 55,
        width: 70,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#bac1e7",
    },
    textStyle: {
        fontWeight: "500",
        color: "#706abe",
    },

    buttonBorderShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 10,
        padding: 5,
    },


})

export default JarlabankeStylesheet;