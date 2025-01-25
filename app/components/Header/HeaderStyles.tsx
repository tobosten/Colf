import { StyleSheet } from 'react-native'

const HeaderStyles = StyleSheet.create({
    goBackView: {
        marginTop: 5,
        justifyContent: 'center',
        color: 'white',
        marginBottom: 10
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
        marginBottom: 10,
    },
    backFlexViewRight: {
        flex: 1,
    },
    backTitle: {
        fontSize: 24,
        color: "#706abe"
    },
    backTitleNoBtn: {
        alignSelf: "center",
        marginVertical: 10, 
    },
    backViewGradient: {
        left: 0,
        right: 0,
        top: 0,
        height: 5,
    },
    backImage: {
        height: 40,
        width: 15,
        marginLeft: 10,
    },
})

export default HeaderStyles