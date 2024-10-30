import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors';
import globalStyles from '@/app/globalStyle';
import { router } from 'expo-router';


export default function PhoneButton() {
  return (

    <TouchableOpacity style={[styles.phoneButton, { marginTop: 50 }]} onPress={() => router.push('/detect-operator')}>
      <Text style={[globalStyles.text16Regular, { color: '#646C6D', }]}>
        Entrez le numéro ici
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

  phoneButton: {
    backgroundColor: Colors.gray.light,
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 12,
    width: '100%',
  },
});