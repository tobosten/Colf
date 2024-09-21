import { Image, StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { FlashList } from "@shopify/flash-list";
import { Link } from 'expo-router';




export default function coursesListScreen() {

    interface Courses {
        id: number
        name: string
    }

    let courses: Courses[] = [
        { name: "Jarlabanke", id: 1 },
        { name: "Jarlabanke2", id: 2 },
        { name: "Jarlabanke3", id: 3 }
    ]


    return (
        <View style={styles.background}>
            <Text style={styles.screenTitle}>Golf courses</Text>
            <FlashList
                data={courses}
                renderItem={({ item }) => (
                    <View style={styles.flashRenderView}>
                        <Link href={`./GolfCourses/${item.name}Courses`}>
                            <TouchableOpacity style={styles.flashRenderTouchable}>
                                <Text style={styles.flashRenderText}>{item.name}</Text>

                                <View style={styles.flashImageView}>
                                    <Image
                                        source={require('../assets/images/chevron_right_24dp.png')}
                                        style={styles.flashRenderImage}
                                    />
                                </View>
                            </TouchableOpacity>
                        </Link>
                    </View>
                )}
                estimatedItemSize={5}
            />

        </View>
    )
}



const styles = StyleSheet.create({
    background: {
        height: '100%',
        width: '100%',
        marginTop: '10%',
    },
    screenTitle: {
        fontSize: 24,
        marginLeft: '10%',
        borderBottomWidth: 1,
        width: '80%',
        padding: 10,
    },
    flashlist: {
        overflow: 'hidden',
        borderRadius: 5,
    },
    flashRenderView: {
        borderBottomWidth: 1,
        marginHorizontal: '10%',

    },
    flashRenderTouchable: {
        paddingVertical: 20,
        paddingRight: '30%',
        flexDirection: 'row',
    },
    flashRenderText: {
        fontSize: 18,
        paddingLeft: '10%'
    },
    flashImageView: {
        marginLeft: 'auto',
        marginRight: '-30%'
    },
    flashRenderImage: {
        height: 30,
        width: 10,
    }
})  