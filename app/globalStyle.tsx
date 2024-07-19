import { getThemeColor } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  page:{
    flex: 1,
    color: "#FFFFFF",
    // fontFamily: 'Nunito',
    backgroundColor: getThemeColor('dark').background
  },
  body20: {
    fontSize: 20,
    color: "#FFFFFF",
  },
  title28: {
    fontSize: 28,
    color: "#FFFFFF",
  }
})