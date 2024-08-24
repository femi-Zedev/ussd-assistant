import Colors, { getThemeColor } from "@/constants/Colors";
import ThemeProvider from "@/providers/theme/Theme.provider";
import { LinearGradient } from 'expo-linear-gradient';

import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, Touchable, TouchableOpacity, View, useColorScheme } from "react-native";
import { Image } from 'expo-image';
import globalStyles from './globalStyle'
import Button from "./components/Button";
import IconButton from "./components/IconButton";
import AntDesign from '@expo/vector-icons/AntDesign';

interface Step {
  title: string;
  desc: string;
  image: any;
}

const steps: Step[] = [
  {
    title: 'Ne mémorisez plus !',
    desc: 'Marre de mémoriser les codes de services GSM qui changent H24 ?',
    image: require('../assets/slider/slider1.png'),
  },
  {
    title: 'USSD Assistant',
    desc: 'USSD Assistant est la solution pour mettre fin à votre cauchemar !',
    image: require('../assets/slider/slider2.png'),
  },
  {
    title: 'Simple et pratique',
    desc: 'Tous les services de vos opérateurs préférés en un seul et même endroit !',
    image: require('../assets/slider/slider3.png'),
  },
]
export default function App() {
  const colorScheme = useColorScheme();

  const [step, setStep] = useState(0)
  const [content, setContent] = useState<Step>({} as Step)

  function onNextStep() {
    setStep(step + 1)
    console.log(step)
    setContent(steps[step])
  }

  useEffect(() => {
    setContent(steps[step])
  }, [])


  return (
    <ThemeProvider value={colorScheme === 'dark' ? Colors.dark : Colors.light}>
      <View style={globalStyles.page}>

        <View style={{ marginTop: 150, marginHorizontal: 50, alignItems: 'center' }}>
          <LinearGradient
            colors={['#FFFFFF', '#2795A4']}
            start={{ x: 0.5, y: 0 }}
            style={styles.memojiWrapper}>
            <Image style={{ width: 230, height: 230 }} source={content.image} />
          </LinearGradient>

          <Text style={[globalStyles.title28, styles.title28_specific]}>{content.title}</Text>
          <Text style={[globalStyles.body20, { marginHorizontal: 30, fontWeight: 400, marginTop: 20, textAlign: 'center', }]}>
            {content.desc}
          </Text>

          <View style={{ marginTop: 70, width: 110, height: 10, borderRadius: 8, backgroundColor: "#FFFFFF", }} />
        </View>


        {/* Button de navigation */}

        <View style={{ marginTop: 90, marginHorizontal: 24, flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Button title='Démarrer' variant="transparent" />
          <IconButton
            onPress={onNextStep}
            icon={<AntDesign name="arrowright" size={24}color="black" />} />
        </View>

      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  memojiWrapper: {
    alignSelf: "center",
    textAlign: 'center',
    borderRadius: 600,
    alignItems: 'center',
    justifyContent: 'center',
    height: 290,
    width: 290,
    //linear-gradient(180deg, #FFF 0%, #2795A4 100%);
  },

  title28_specific: {
    marginTop: 30,
    fontWeight: 'bold',
  }
})

