import { View, Text, TextInput, StyleSheet, StyleProp, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { EvilIcons, Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { useSearchValue } from '../providers/search.provider';

interface SearchInputProps {
  onChange: (value: string) => void,
  placeholder: string,
  autoFocus?: boolean,
  style?: StyleProp<any>,
}

export default function SearchInput({ onChange, style, autoFocus, placeholder }: SearchInputProps) {

 const { searchValue, setSearchValue } = useSearchValue()

  function handleChange(value: string) {
    setSearchValue(value)
    onChange(value)
  }


  return (
    <View style={[styles.container, { backgroundColor: Colors.gray.light }, style]}>
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 4 }}>
        <EvilIcons name="search" size={24} color="#BBBBBB" />

        <TextInput
          style={styles.textInput}
          autoFocus={autoFocus}
          onChangeText={(value) => handleChange(value)}
          placeholder={placeholder}
          value={searchValue}
          keyboardType="default"
          selectionColor="red"
        />
      </View>


      {searchValue.length > 0 && (
    
        <TouchableOpacity onPress={() => setSearchValue('')}>
          <Ionicons name="close-circle-sharp" size={24} color="#BBBBBB"  />
        </TouchableOpacity>
      )}
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 4,
    paddingHorizontal: 12,
    paddingVertical: 14,
    borderRadius: 16,
  },

  textInput: {
    fontSize: 16,
    color: '#BBBBBB',
    width: 180,
    height: 24,
  },
});