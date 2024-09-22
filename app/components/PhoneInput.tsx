import { View, TextInput, StyleSheet, StyleProp, TouchableOpacity, Text } from 'react-native'
import React, { useState } from 'react'
import { EvilIcons, Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { usePhoneValue } from '../providers/phone.provider';
import MaskInput, { Masks, useMaskedInputProps } from 'react-native-mask-input';

interface PhoneInputProps {
  onChange: (value: string) => void,
  prefix: string,
  placeholder?: string,
  autoFocus?: boolean,
  style?: StyleProp<any>,
}

export default function PhoneInput({ onChange, style, prefix, autoFocus, placeholder }: PhoneInputProps) {

  const { phoneValue, setPhoneValue } = usePhoneValue();
  const [isValid, setIsValid] = useState(false);

  const phoneMask = [
    /\d/, /\d/, ' ', // first two digits
    /\d/, /\d/, ' ', // second two digits
    /\d/, /\d/, ' ', // third two digits
    /\d/, /\d/       // last two digits
  ];

  const handlePhoneChange = (masked: string, unmasked: string) => {
    setPhoneValue(masked);
    
    // Validate input (ensure it's exactly 8 digits, excluding spaces)
    if (unmasked.length === 8) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: Colors.gray.light }, style]}>
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8 }}>
        <Text style={styles.prefix}>{prefix}</Text>

        {/* <TextInput
          style={styles.textInput}
          autoFocus={autoFocus}
          onChangeText={(value) => handleChange(value)}
          placeholder={placeholder}
          value={phoneValue}
          keyboardType="default"
          selectionColor="red"
        /> */}

        <MaskInput
          style={styles.textInput}
          autoFocus={autoFocus}
          value={phoneValue}
          onChangeText={handlePhoneChange}
          mask={phoneMask}
          keyboardType="numeric"
          placeholder=""
          keyboardAppearance='dark'
        />
      </View>


      {/* {!isValid && (

        <TouchableOpacity onPress={() => setPhoneValue('')}>
          <Ionicons name="close-circle-sharp" size={24} color="#BBBBBB" />
        </TouchableOpacity>
      )} */}
    </View>
  )
}


const styles = StyleSheet.create({
  prefix: {
    fontSize: 16,
    color: '#5B5B5B',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 4,
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 12,
  },

  textInput: {
    fontSize: 16,
    color: '#BBBBBB',
    width: 180,
    height: 24,
  },
});