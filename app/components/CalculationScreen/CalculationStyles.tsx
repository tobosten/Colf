import { StyleSheet } from 'react-native'



let titleBoldness = 500;



//Colors: #8586cf  #9ea2db  #bac1e7
const CalculationStyles = StyleSheet.create({

    teeContainer: {
        width: '90%',
        alignSelf: 'center'
    },

    // Tee
    teeText: {
        fontSize: 20,
        marginTop: '10%',
        marginBottom: 10,
        fontWeight: "500",
    },
    teeButtonView: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
    redTeeBtn: {
        borderWidth: 1,
        borderRadius: 5,
        marginHorizontal: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: 100,
        borderColor: "#9ea2db",
    },
    redTeeTxt: {
        fontSize: 16,
        alignSelf: 'center',
        fontWeight: "500",
    },
    yellowTeeBtn: {
        borderWidth: 1,
        borderRadius: 5,
        marginHorizontal: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: 100,
    },
    yellowTeeTxt: {
        fontSize: 16,
        alignSelf: 'center',
        fontWeight: "500",
    },

    // Handicap
    handicapContainer: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 40,
    },
    handicapTxt: {
        fontSize: 20,
        fontWeight: "500",
    },
    handicapTxtInput: {
        marginLeft: 20,
        marginTop: 10,
        padding: 5,
        fontSize: 14,
        width: 100,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: '#9ea2db'
    },

    // Strokes
    strokesContainer: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 40,
    },
    strokesText: {
        fontSize: 20,
        fontWeight: "500",
    },
    strokesTxtInput: {
        marginLeft: 20,
        marginTop: 10,
        padding: 5,
        fontSize: 14,
        width: 100,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: '#9ea2db'
    },


    // Calculation
    calcContainer: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 50,
    },
    calcBtn: {
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 40,
        alignSelf: 'center',

    },
    calcBtnTxt: {
        fontSize: 20,
        color: 'white',
        fontWeight: '500',

    },
    linearGradient: {
        alignSelf: 'center',
        borderRadius: 5,
    }
})

export default CalculationStyles