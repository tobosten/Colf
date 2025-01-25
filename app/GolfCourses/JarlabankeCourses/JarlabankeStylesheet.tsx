import { StyleSheet } from "react-native"

const JarlabankeStylesheet = StyleSheet.create({


    holeViewContainer: {
        width: '80%',
        alignSelf: 'center',
    },
    holeTitle: {
        fontSize: 20,
        color: "#706abe",
        fontWeight: "500",
    },

    holeButtonContainer: {
        flexDirection: 'row',
    },

    holeMaleButton: {
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

    holeFemaleButton: {
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

    hole18Container: {
        marginTop: 10,
    }


})

export default JarlabankeStylesheet;