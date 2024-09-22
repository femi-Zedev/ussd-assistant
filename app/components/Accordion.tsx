import React, { PropsWithChildren, useRef, useState } from 'react'
import { Entypo } from '@expo/vector-icons';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Platform,
  UIManager,
  LayoutAnimation,
  Pressable,
  Animated
} from 'react-native';
import globalStyles from '@/app/globalStyle';
import { LinearGradient } from 'expo-linear-gradient';



type AccordionItemPros = PropsWithChildren<{
  title: string;
  subTitle: string;
  icon: React.ReactNode;
}>;

function Accordion({ children, subTitle, icon, title }: AccordionItemPros) {

  if (Platform.OS === 'android') {
    UIManager && UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const [expanded, setExpanded] = useState(false);
  const body = <View style={styles.accordBody}>{children}</View>;
  const rotation = useRef(new Animated.Value(0)).current; // Initialize animated value

  function toggleItem() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    Animated.timing(rotation, {
      toValue: expanded ? 0 : 1, // Toggle between 0 and 1
      duration: 300,
      useNativeDriver: true,
    }).start();
    setExpanded(!expanded);
  }

  const rotateInterpolate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '90deg'], // Rotate from 0 to 90 degrees
  });

  return (
    <LinearGradient
      colors={['#304E52', '#339BA9']}
      start={{ x: 1, y: 0 }}
      style={styles.accordionContainer}>

      <Pressable style={{}} onPress={toggleItem}>

        <View style={styles.accordionPreview}>

          <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: 12 }}>
            <View style={{ width: 48, height: 48, backgroundColor: "black", borderRadius: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {icon}
            </View>

            <View style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <Text style={globalStyles.text16ExtraBold}>{title}</Text>
              <Text style={globalStyles.text12SemiBold}>{subTitle}</Text>
            </View>
          </View>

          <Animated.View style={{ transform: [{ rotate: rotateInterpolate }] }}>
            <Entypo name="chevron-right" size={20} color="white" />
          </Animated.View>
        </View>


        {expanded && body}

      </Pressable >
    </LinearGradient>


  )
}

export default Accordion

const styles = StyleSheet.create({

  accordionContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    borderRadius: 16,
    padding: 16,
    width: '100%',
    height: 'auto',
  },

  accordionPreview: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  accordBody: {
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    paddingLeft: 16,
  },

});
