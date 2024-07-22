import { getThemeColor } from "@/constants/Colors";
import { StyleSheet } from "react-native";


export default StyleSheet.create({
  
  page:{
    flex: 1,
    color: "#FFFFFF",
    backgroundColor: getThemeColor('dark').background,
    maxWidth: '100%'
  },
  body20: {
    fontSize: 20,
    color: "#FFFFFF",
    // fontFamily: 'Nunito_600SemiBold'
  },
  title28: {
    fontSize: 28,
    color: "#FFFFFF",
    // fontFamily: 'Nunito_800ExtraBold'
  }
  
})