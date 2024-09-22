import { View, Text, TouchableOpacity, StyleProp, GestureResponderEvent, StyleSheet } from 'react-native'
import React from 'react'
import { router } from 'expo-router';
import { EvilIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';


export default function SearchButton() {
  return (
    <BlurView tint='light' intensity={8} style={styles.blurContainer}>
      <TouchableOpacity
        accessibilityRole="button"
        style={styles.button}
        onPress={() => router.push('/(tabs)/search')}>
        <EvilIcons name="search" size={24} color="white" />
        <Text style={styles.text}>rechercher</Text>
      </TouchableOpacity>
    </BlurView>

  )
}


const styles = StyleSheet.create({
  blurContainer: {
    marginTop: 'auto',
    marginBottom: 20,
    marginHorizontal: 'auto',
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 0.5,
    borderColor: '#19191933', 
  },

  button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
    gap: 4,
    borderRadius: 20,
  },

  text: {
    fontSize: 14,
    fontWeight: '500',
    color: 'white',
    marginEnd: 4,
  },
});