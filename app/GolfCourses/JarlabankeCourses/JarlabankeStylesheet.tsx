import { StyleSheet } from "react-native"

const JarlabankeStylesheet = StyleSheet.create({
    goBackView: {
        marginTop: 5,
        height: 40,
        justifyContent: 'center',
        color: 'white',
    },

    backPressable: {
        display: 'flex',
        flexDirection: 'row',
    },
    backFlexViewLeft: {
        flex: 1,
    },
    backFlexViewMiddle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backFlexViewRight: {
        flex: 1,
    },
    backTitle: {
        fontSize: 18,
    },
    backViewGradient: {
        left: 0,
        right: 0,
        top: 0,
        height: 10,
    },

    backImage: {
        height: 40,
        width: 15,
        marginLeft: 10,
    },


    hole9ViewContainer: {
        borderWidth: 1,
        width: '80%',
        alignSelf: 'center',
        marginTop: '10%',
    },
    hole9Title: {
        fontSize: 16
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
    },
    hole9FemaleButton: {
        height: 55,
        width: 70,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },

    buttonBorderShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        padding: 5,
    },

    linearGradient: {
        left: 5,
        right: 5,
        top: 5,
        height: 5,
    }



})

export default JarlabankeStylesheet;