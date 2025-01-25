import { FlashList } from "@shopify/flash-list";
import { StyleSheet } from "react-native";

/* 
Colors: 
Text: #706abe
#8586cf 
#9ea2db 
Borders: #bac1e7
*/

const CourseListStyles = StyleSheet.create({
  background: {
    height: "100%",
  },
  screenTitle: {
    fontSize: 24,
    marginLeft: "10%",
    borderBottomWidth: 1,
    borderColor: "#e2e2e2",
    width: "80%",
    padding: 10,
    marginBottom: 30,
    fontWeight: "500",
    color: "#706abe",
  },
  coursePressable: {
    width: "80%",
    flexDirection: "row",
    alignSelf: "center",
    marginVertical: 10,
    paddingLeft: "5%",
    borderRadius: 5,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#bac1e7",
  },
  renderText: {
    fontSize: 18,
    marginVertical: 5,
    color: "#706abe",
    fontWeight: "500",
  },

  borderShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 10,
    padding: 5,
  },
  separationBorder: {
    borderBottomWidth: 1,
    borderColor: "#e2e2e2",
    width: "75%",
    alignSelf: "center",
    marginVertical: 10,
  },
});

export default CourseListStyles;
