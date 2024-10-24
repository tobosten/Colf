import { Image, StyleSheet, View, Text, TouchableOpacity, Pressable } from 'react-native';
import { FlashList } from "@shopify/flash-list";
import { Link } from 'expo-router';
import CourseListStyles from './CourseListStyles';
import { LinearGradient } from 'expo-linear-gradient';




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
                    <View>
                        <Link href={`../GolfCourses/${item.name}Courses/${item.name}Courses`} asChild
                            style={[CourseListStyles.coursePressable, CourseListStyles.borderShadow]}>
                            <Pressable>
                                <Text style={CourseListStyles.renderText}>{item.name}</Text>
                            </Pressable>

                        </Link>
                        <View style={CourseListStyles.separationBorder} />
                    </View>

                )}
                estimatedItemSize={5}
            />

        </View>
    )
}
