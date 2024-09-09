import { View, Text, TextInput, StyleSheet, StyleProp } from 'react-native'
import React from 'react'
import { EvilIcons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

interface SearchInputProps {
  onChange?: (value: string) => void,
  placeholder: string,
  autoFocus?: boolean,
  style?: StyleProp<any>,
}

export default function SearchInput({ onChange, style, autoFocus, placeholder }: SearchInputProps) {


  return (
    <View style={[styles.container, { backgroundColor: Colors.gray.light }, style]}>
      <EvilIcons name="search" size={24} color="#BBBBBB" />

      <TextInput
        style={styles.textInput}
        autoFocus={autoFocus}
        onChangeText={onChange}
        placeholder={placeholder}
        keyboardType="default"
        selectionColor="red"
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 12,
    paddingVertical: 14,
    borderRadius: 16,
  },

  textInput: {
    fontSize: 16,
    color: '#BBBBBB',
    width: 180,
  },
});