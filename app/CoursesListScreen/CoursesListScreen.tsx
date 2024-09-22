import { Image, StyleSheet, View, Text, TouchableOpacity, Pressable } from 'react-native';
import { FlashList } from "@shopify/flash-list";
import { Link } from 'expo-router';
import CourseListStyles from './CourseListStyles';




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
        <View style={CourseListStyles.background}>
            <Text style={CourseListStyles.screenTitle}>Golf courses</Text>
            <FlashList
                data={courses}
                renderItem={({ item }) => (
                    <Link href={`../GolfCourses/${item.name}Courses/${item.name}Courses`} asChild>
                        <Pressable style={CourseListStyles.textContainer}>
                            <Text style={CourseListStyles.renderText}>{item.name}</Text>
                        </Pressable>
                    </Link>
                )}
                estimatedItemSize={5}
            />

        </View>
    )
}
