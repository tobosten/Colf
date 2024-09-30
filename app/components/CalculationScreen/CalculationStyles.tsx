import { StyleSheet } from 'react-native'

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
    },
    teeButtonView: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
    redTeeBtn: {
        borderWidth: 2,
        borderRadius: 3,
        marginHorizontal: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: 100,

    },
    redTeeTxt: {
        fontSize: 16,
        alignSelf: 'center',
    },
    yellowTeeBtn: {
        borderWidth: 2,
        borderRadius: 3,
        marginHorizontal: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: 100,
    },
    yellowTeeTxt: {
        fontSize: 16,
        alignSelf: 'center',
    },

    // Handicap
    handicapContainer: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 40,
    },
    handicapTxt: {
        fontSize: 20,
    },
    handicapTxtInput: {
        marginLeft: 20,
        marginTop: 10,
        padding: 5,
        fontSize: 14,
        width: 100,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: 'lightgray'
    },

    // Strokes
    strokesContainer: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 40,
    },
    strokesText: {
        fontSize: 20,
    },
    strokesTxtInput: {
        marginLeft: 20,
        marginTop: 10,
        padding: 5,
        fontSize: 14,
        width: 100,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: 'lightgray'
    },


    // Calculation
    calcContainer: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 50,
    },
    calcBtn: {
        borderRadius: 3,
        padding: 15,
        paddingHorizontal: 40,
        backgroundColor: '#08b3f7',
        alignSelf: 'center',

    },
    calcBtnTxt: {
        fontSize: 20,
        color: 'white',
        fontWeight: '500'
    },
})

export default CalculationStyles