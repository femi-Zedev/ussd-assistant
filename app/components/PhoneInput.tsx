import { View, Keyboard, StyleSheet, StyleProp, TouchableOpacity, Text, ActivityIndicator } from 'react-native'
import React, { useRef, useState } from 'react'
import { EvilIcons, FontAwesome6, Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { usePhoneValue } from '../providers/phone.provider';
import MaskInput, { Masks, useMaskedInputProps } from 'react-native-mask-input';
import LottieView from 'lottie-react-native';

interface PhoneInputProps {
  onChange: (value: string) => void,
  prefix: string,
  placeholder?: string,
  autoFocus?: boolean,
  style?: StyleProp<any>,
}

export default function PhoneInput({ onChange, style, prefix, autoFocus, placeholder }: PhoneInputProps) {

  const { debouncedPhoneValue, setDebouncedPhoneValue, isDebouncing } = usePhoneValue(); 
  const [isValid, setIsValid] = useState(false);
  const inputRef = useRef<any>(null);

  const phoneMask = [
    /\d/, /\d/, ' ', // first two digits
    /\d/, /\d/, ' ', // second two digits
    /\d/, /\d/, ' ', // third two digits
    /\d/, /\d/       // last two digits
  ];

  const handlePhoneChange = (masked: string, unmasked: string) => {
    
    setDebouncedPhoneValue(masked);
    
      if (debouncedPhoneValue.length === 8) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    // Validate input (ensure it's exactly 8 digits, excluding spaces)
   


  };

  return (
    <View>
      <TouchableOpacity
        style={[styles.container, { backgroundColor: Colors.gray.light, borderWidth: 1, borderColor: debouncedPhoneValue.length > 0 && !isValid ? "#CF5656" : Colors.gray.light  }, style]}
        onPress={() => inputRef.current?.focus()}>

        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <Text style={styles.prefix}>{prefix}</Text>

          <MaskInput
            ref={inputRef}  // Attach the ref to MaskInput
            style={styles.textInput}
            autoFocus={autoFocus}
            value={debouncedPhoneValue}
            onChangeText={handlePhoneChange}
            mask={phoneMask}
            keyboardType="numeric"
            placeholder=""
            keyboardAppearance='dark'
          />
        </View>

        {isDebouncing &&
          <LottieView
            source={require('../../assets/animations/spinner.json')}
            style={{ width: 24, height: 24 }}
            autoPlay
            loop
          />
        }
      </TouchableOpacity>

      {(debouncedPhoneValue.length > 0 && !isValid) &&
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 12, marginLeft: 4 }}>
          <FontAwesome6 name="circle-exclamation" size={20} color="#CF5656" />
          <Text style={{ color: "#CF5656", fontSize: 13, fontWeight: 500 }}>{isValid ? '' : 'Veuillez saisir un numéro de téléphone valide'}</Text>
        </View>
      }

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