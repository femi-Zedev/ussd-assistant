import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import globalStyles from '@/app/globalStyle';
import Colors from '@/constants/Colors';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import PhoneButton from '@/app/components/PhoneButton';

export default function Scan() {
  return (
    <View style={globalStyles.container}>

      <View style={[globalStyles.wrapper, { display: 'flex', paddingHorizontal: 36, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 140 }]}>

        <Image style={{ width: 210.63, height: 204 }} source={require('../../assets/images/memojiWondering.png')} />

        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 20, maxWidth: 290 }}>
          <Text style={[globalStyles.text18SemiBold, styles.textCenter, { lineHeight: 22 }]}>
            Un numéro vous semble étrange ?
            Vous ne savez pas de quel opérateur il s’agit ?
          </Text>

          <Text style={[globalStyles.text16Regular, styles.textCenter]}>
            Collez ou saisissez le numéro dans le champs et nous trouvons l’opérateur.
          </Text>
        </View>

        <PhoneButton />

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textCenter: {
    textAlign: 'center',
  },

  phoneButton: {
    backgroundColor: Colors.gray.light,
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 12,
    width: '100%',
  },
});