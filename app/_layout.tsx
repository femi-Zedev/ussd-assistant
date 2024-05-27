import Colors, { getThemeColor } from "@/constants/Colors";
import ThemeProvider from "@/providers/theme/Theme.provider";

import React from "react";
import { StyleSheet, Text, View, useColorScheme } from "react-native";

export default function App() {
  const colorScheme = useColorScheme();

 
    return (
      <ThemeProvider value={colorScheme === 'dark' ? Colors.dark : Colors.light}>
        <View style={styles.container} >
          <Text style={styles.text} >Open up App.js to start working on your app!</Text>
        </View>
      </ThemeProvider>
    );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: getThemeColor('dark').background
  },
  text: {
    color: getThemeColor('dark').text
  }
})

