import Colors, { getThemeColor } from "@/constants/Colors";
import ThemeProvider from "@/providers/theme/Theme.provider";
import { LinearGradient } from 'expo-linear-gradient';
import { Platform } from 'react-native';

import React from "react";
import { StyleSheet, Text, Touchable, TouchableOpacity, View, useColorScheme } from "react-native";
import { Image } from 'expo-image';
import globalStyles from './globalStyle'

import {  useFonts, Nunito_800ExtraBold, Nunito_600SemiBold, } from '@expo-google-fonts/nunito';



export default function App() {
  const colorScheme = useColorScheme();

  let [fontsLoaded] = useFonts({
    Nunito_800ExtraBold,
  });
  
  if (!fontsLoaded) {
    return null;
  }


  return (
    <ThemeProvider value={colorScheme === 'dark' ? Colors.dark : Colors.light}>
      <View style={globalStyles.page}>

        <View style={{ marginTop: 150, marginHorizontal: 50, alignItems: 'center' }}>
          <LinearGradient
            colors={['#FFFFFF', '#2795A4']}
            start={{ x: 0.5, y: 0 }}
            style={styles.memojiWrapper}>
            <Image style={{  width: 230, height: 230}} source={require('../assets/slider/slider1.png')} />
          </LinearGradient>

          <Text style={[globalStyles.title28, styles.title28_specific]}>Ne mémorisez plus !</Text>
          <Text style={[globalStyles.body20, { marginHorizontal: 30, fontWeight: 400, marginTop: 20, textAlign: 'center', }]}>
            Marre de mémoriser les codes de services GSM qui changent H24 ?
          </Text>

          <View style={{ marginTop: 70, width: 110, height: 10, borderRadius: 8, backgroundColor: "#FFFFFF", }} />
        </View>


        {/* Button de navigation */}

        <View style={{ marginTop: 90, marginHorizontal: 24, width: '100%' }}>
          <TouchableOpacity />
        </View>





      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  memojiWrapper: {
    alignSelf: "center",
    textAlign: 'center',
    borderRadius: 600,
    alignItems: 'center', 
    justifyContent: 'center',
    height: 290,
    width: 290,
    //linear-gradient(180deg, #FFF 0%, #2795A4 100%);
  },

  title28_specific: {
    marginTop: 30, 
    fontWeight: 'bold', 
    fontFamily: Platform.select({
      android: 'Nunito_800ExtraBold',
      ios: 'Nunito-ExtraBold',
    }),
  }
})

