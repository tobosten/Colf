import { StyleSheet } from 'react-native'

const HeaderStyles = StyleSheet.create({
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
})

export default HeaderStyles