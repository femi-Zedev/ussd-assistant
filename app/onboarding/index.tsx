import React, { useEffect, useRef, useState } from "react";

import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from "react-native";
import globalStyles from '@/app/globalStyle';
import { router } from 'expo-router';


import { Image } from 'expo-image';
import AntDesign from '@expo/vector-icons/AntDesign';
import PagerView from 'react-native-pager-view';
import Button from "@/app/components/Button";
import IconButton from "@/app/components/IconButton";
import useAppStore from "../store/appData";

interface Step {
  title: string;
  desc: string;
  image: any;
}

const steps: Step[] = [
  {
    title: 'Ne mémorisez plus !',
    desc: 'Marre de mémoriser les codes de services GSM qui changent H24 ?',
    image: require('../../assets/slider/slider1.png'),
  },
  {
    title: 'USSD Assistant',
    desc: 'USSD Assistant est la solution pour mettre fin à votre cauchemar !',
    image: require('../../assets/slider/slider2.png'),
  },
  {
    title: 'Simple et pratique',
    desc: 'Tous les services de vos opérateurs préférés en un seul et même endroit !',
    image: require('../../assets/slider/slider3.png'),
  },
]

export default function Onboarding() {

  const { setFirstAppLaunch } = useAppStore();

  const [page, setPage] = useState(0);
  const pagerRef = useRef(null);
  const indicatorWidth = 40;


  const handleNext = () => {
    if (page < steps.length - 1) {
      setPage((prevPage) => prevPage + 1); // Update the state first
      // @ts-ignore
      pagerRef.current.setPage(page + 1); // Programmatically move to the next page
    }
  };

  const handleStart = () => {
    setPage(2);
    // @ts-ignore
    pagerRef.current.setPage(2); // Programmatically move to the next page
  }

  const handleNavigateHome = () => {
    router.push('(tabs)');
    setFirstAppLaunch(false);
  }
  return (
    <View style={globalStyles.page}>


      <PagerView
        ref={pagerRef}
        style={styles.carouselWrapper}
        onPageSelected={(e) => setPage(e.nativeEvent.position)}
        initialPage={0}
      >
        {steps.map((step, page) => (
          <CarouselView
            key={page}
            image={step.image}
            title={step.title}
            desc={step.desc} />
        ))}
      </PagerView>

      <View style={{ flex: 1, paddingBottom: 30, }}>
        <View style={styles.stepper}>
          {[0, 1, 2].map((index) => (
            <View
              key={index}
              style={{
                width: 40,
                height: 10,
                borderRadius: 8,
                backgroundColor: index === page ? '#FFFFFF' : '#5B5B5B',
              }}
            />
          ))}
          {/* {Array.from({ length: steps.length - page }, (_, i) => i + 1).map((index) => {
            console.log(index);
            const currentPage = page + 1;
            return (
              <View
                key={index}
                style={{
                  width: index === currentPage ? indicatorWidth * currentPage : indicatorWidth,
                  height: 10,
                  borderRadius: 8,
                  backgroundColor: index === currentPage ? '#FFFFFF' : '#5B5B5B',
                }}
              />
            );
          })} */}
        </View>

        {/* Button de navigation */}

        {page < 2 ?
          <>
            <View style={{ marginTop: 80, marginHorizontal: 24, display: "flex", flexDirection: 'row', justifyContent: 'space-between' }}>
              <Button title='Passer' variant="transparent" onPress={() => handleStart()} />
              <IconButton
                onPress={() => handleNext()}
                icon={<AntDesign name="arrowright" size={24} color="black" />} />
            </View>
          </>
          :
          <View style={{ marginTop: 80, display: "flex", justifyContent: 'center', alignItems: 'center' }}>
            <Button buttonStyle={{ width: '100%', maxWidth: 300, }} title='Démarrer !' variant="filled" onPress={() => handleNavigateHome()} />
          </View>

        }
      </View>

    </View>
  )
}


function CarouselView({ image, title, desc }: { image: string, title: string, desc: string }) {
  return (
    <View style={{ marginTop: 150, marginHorizontal: 50, alignItems: 'center' }}>

      <LinearGradient
        colors={['#FFFFFF', '#2795A4']}
        start={{ x: 0.5, y: 0 }}
        style={styles.memojiWrapper}>
        <Image style={{ width: 230, height: 230 }} source={image} />
      </LinearGradient>

      <Text style={[globalStyles.title28, styles.title28_specific]}>{title}</Text>
      <Text style={[globalStyles.title20Bold, { marginHorizontal: 30, fontWeight: 400, marginTop: 20, textAlign: 'center', }]}>
        {desc}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  carouselWrapper: {
    flex: 3,
    alignItems: 'center',
    // backgroundColor: '#FFFFFF',
    // opacity: 0.5,
  },

  memojiWrapper: {
    alignSelf: "center",
    textAlign: 'center',
    borderRadius: 600,
    alignItems: 'center',
    justifyContent: 'center',
    height: 290,
    width: 290,
  },

  title28_specific: {
    marginTop: 30,
    fontWeight: '800',
  },
  stepper: {
    marginHorizontal: 'auto',
    marginTop: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
})