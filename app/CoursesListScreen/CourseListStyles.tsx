import { StyleSheet } from 'react-native';

const CourseListStyles = StyleSheet.create({
    background: {
        marginTop: '10%',
        height: '100%',
    },
    screenTitle: {
        fontSize: 24,
        marginLeft: '10%',
        borderBottomWidth: 1,
        width: '80%',
        padding: 10,
        marginBottom: 20,
    },

    textContainer: {
        width: '80%',
        flexDirection: 'row',
        borderBottomWidth: 1,
        alignSelf: 'center',
        marginVertical: 10,
        paddingLeft: '5%'
    },
    renderText: {
        fontSize: 18,
        marginBottom: 10,
    }

})

export default CourseListStyles;