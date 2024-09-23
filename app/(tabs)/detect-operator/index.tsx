import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'
import globalStyles from '@/app/globalStyle';
import LottieView from "lottie-react-native";
import PhoneInput from '@/app/components/PhoneInput';
import { usePhoneValue } from '@/app/providers/phone.provider';
import { router } from 'expo-router';


const DismissKeyboard = ({ children }: { children: React.ReactNode }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);


export default function DetectOperator() {

  const { phoneValue } = usePhoneValue();
  return (
    <DismissKeyboard>
      <View style={globalStyles.page}>
        <View style={[globalStyles.wrapper]}>
          <View style={styles.scanContainer}>

            <LottieView
              source={require('../../../assets/animations/scan.json')}
              style={{ width: "100%", height: 340 }}
              autoPlay
              loop
            />

            <PhoneInput
              prefix='+229'
              autoFocus={false}
              onChange={(value: string) => console.log(value)}
            />

          </View>

          <TouchableOpacity style={styles.cancelButton} onPress={() => router.back()}>
            <Text style={globalStyles.text16Regular}>Retour</Text>
          </TouchableOpacity>

        </View>
      </View>
    </DismissKeyboard>
  )
}

const styles = StyleSheet.create({

  scanContainer: {
    marginTop: 30,
    display: 'flex',
    flexDirection: 'column',
    gap: 40,
    maxWidth: '100%',
  },

  phoneInputContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    gap: 12,
    width: '100%',
    maxWidth: '100%',
    opacity: 0.8,
    // backgroundColor: '#797C7D1A'
  },
  cancelButton: {
    // backgroundColor: '#797D1A',
    marginTop: 20,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 12,
    backgroundColor: '#1D1D1D',
  }

});