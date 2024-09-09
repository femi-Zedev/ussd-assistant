import { getThemeColor } from "@/constants/Colors";
import { StyleSheet } from "react-native";


export default StyleSheet.create({
  
  page:{
    flex: 1,
    color: "#FFFFFF",
    backgroundColor: getThemeColor('dark').background,
    maxWidth: '100%',
    maxHeight: '100%',
  },

  wrapper: {
    maxWidth: '100%',
    width: '100%',
    paddingHorizontal: 20,
  },
  
  container: {
    flex: 1,
    maxWidth: '100%',
    maxHeight: '100%',
  },

  body20: {
    fontSize: 20,
    color: "#FFFFFF",
    fontFamily: 'Nunito-ExtraBold'
    // fontFamily: 'Nunito_600SemiBold'
  },

  title28: {
    fontSize: 28,
    color: "#FFFFFF",
    fontFamily: 'Nunito-ExtraBold'
    // fontFamily: 'Nunito_800ExtraBold'
  },

  text18SemiBold: {
    fontSize: 18,
    color: "#FFFFFF",
    fontFamily: 'Nunito-Regular',
    fontWeight: '700'
    // fontFamily: 'Nunito_400Regular'
  },

  text18Bold: {
    fontSize: 18,
    color: "#FFFFFF",
    fontFamily: 'Nunito-Regular',
    fontWeight: '800'
    // fontFamily: 'Nunito_400Regular'
  },

  text18ExtraBold: {
    fontSize: 18,
    color: "#FFFFFF",
    fontFamily: 'Nunito-Regular',
    fontWeight: '900'
  },

  text16Bold: {
    fontSize: 16,
    color: "#FFFFFF",
    fontFamily: 'Nunito-ExtraBold',
    fontWeight: '700'
    // fontFamily: 'Nunito_600SemiBold'
  },

  text16ExtraBold: {
    fontSize: 16,
    color: "#FFFFFF",
    fontFamily: 'Nunito-ExtraBold',
    fontWeight: '800'
    // fontFamily: 'Nunito_600SemiBold'
  },

  text16Medium: {
    fontSize: 16,
    color: "#FFFFFF",
    fontFamily: 'Nunito-ExtraBold',
    fontWeight: '600'
    // fontFamily: 'Nunito_600SemiBold'
  },

  text16Regular: {
    fontSize: 16,
    color: "#FFFFFF",
    fontFamily: 'Nunito-ExtraBold',
    fontWeight: '500'
    // fontFamily: 'Nunito_600SemiBold'
  },

  text12SemiBold: {
    fontSize: 12,
    color: "#FFFFFF",
    fontFamily: 'Nunito-SemiBold',
    fontWeight: '700'
  },

  text12ExtraBold: {
    fontSize: 12,
    color: "#FFFFFF",
    fontFamily: 'Nunito-SemiBold',
    fontWeight: '900'
  },

  text12Medium: {
    fontSize: 12,
    color: "#FFFFFF",
    fontFamily: 'Nunito-SemiBold',
    fontWeight: '600'
  },
  
})