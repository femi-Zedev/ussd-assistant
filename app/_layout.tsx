import Colors, { getThemeColor } from "@/constants/Colors";
import ThemeProvider from "@/providers/theme/Theme.provider";

import React from "react";
import { StyleSheet, Text, Touchable, TouchableOpacity, View, useColorScheme } from "react-native";
import { Image } from 'expo-image';
import globalStyles from './globalStyle'

export default function App() {
  const colorScheme = useColorScheme();


  return (
    <ThemeProvider value={colorScheme === 'dark' ? Colors.dark : Colors.light}>
      <View style={globalStyles.page}>

        <View style={{ marginTop: 150, marginHorizontal: 50, alignItems: 'center' }}>
          <View style={styles.memojiWrapper}>
            <Image source="slider1" />
          </View>

          <Text style={[globalStyles.title28, { marginTop: 30, fontWeight: 'bold' }]}>Ne mémorisez plus !</Text>
          <Text style={[globalStyles.body20, { marginHorizontal: 20, fontWeight: 400, marginTop: 20, textAlign: 'center', }]}>
            Marre de mémoriser des codes de services GSM qui changent H24 ?
          </Text>

          <View style={ { marginTop: 70, width: 110, height: 10, borderRadius: 8, backgroundColor: "#FFFFFF", }} />
        </View>


        {/* Button de navigation */}

        <View style={ { marginTop: 90, marginHorizontal: 24, width: '100%' }}> 
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
    height: 290,
    width: 290,
    backgroundColor: '#FFFFFF'
  }
})

