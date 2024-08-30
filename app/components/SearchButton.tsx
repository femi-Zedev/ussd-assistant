import { View, Text, TouchableOpacity, StyleProp, GestureResponderEvent, StyleSheet } from 'react-native'
import React from 'react'
import { router } from 'expo-router';
import { EvilIcons } from '@expo/vector-icons';


export default function SearchButton() {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      style={styles.button}
      onPress={() => router.push('/search')}>
      <EvilIcons name="search" size={24} color="white" />
      <Text style={styles.text}>rechercher</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  button: {
    marginTop: 'auto',
    marginBottom: 20,
    marginHorizontal: 'auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
    gap: 4,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: '#222728',
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    color: 'white',
  },
});