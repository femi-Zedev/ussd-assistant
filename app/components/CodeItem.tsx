import { View, Text, StyleSheet, StyleProp, ViewStyle, TouchableOpacity } from 'react-native';

import React, { useState } from 'react'
import globalStyle from '../globalStyle'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { Menu, MenuOptions, MenuTrigger } from 'react-native-popup-menu'
import { BlurView } from 'expo-blur';
import * as Clipboard from 'expo-clipboard';
import * as Linking from 'expo-linking'

const options = [
  { label: 'Copier le code', action: 'copy', icon: <Ionicons name="copy-outline" size={24} color="white" /> },
  { label: 'Lancer le code', action: 'dial', icon: <MaterialCommunityIcons name="dialpad" size={24} color="white" /> }
]

export default function CodeItem({ code, label, description, style }: { code: string, label: string, description?: string, style?: StyleProp<ViewStyle> }) {

  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  const handleAction = (action: string, code: string) => {
    switch (action) {
      case 'copy':
        Clipboard.setStringAsync(code);
        alert('Code copié')
        setMenuOpen(false);
        break;

      case 'dial':
        Linking.openURL(`tel:${code}`)
        setMenuOpen(false);
        break;
    }
  }


  return (
    <TouchableOpacity onPress={() => handleAction('dial', code) } style={[styles.container, style]}>

      <View>
        <Text style={[globalStyle.text16Bold]}>{label}</Text>
        <Text style={[globalStyle.text12Medium, { marginTop: 4 }]}>{code}</Text>
      </View>



      <Menu
        opened={isMenuOpen}
        onOpen={handleMenuOpen}
        onClose={handleMenuClose}
        onBackdropPress={handleMenuClose}>
        <MenuTrigger
          customStyles={{
            TriggerTouchableComponent: TouchableOpacity,
            triggerWrapper: styles.popoverTrigger,
          }}
          onPress={() => setMenuOpen(true)}
        >
          <MaterialCommunityIcons name="dots-horizontal" size={24} color="white" />
        </MenuTrigger>

        <MenuOptions customStyles={optionsStyles}>
          
          <BlurView intensity={20} tint="dark" style={styles.menuContent}>
            {options.map((option, index) => (
              <TouchableOpacity 
                style={[styles.menuOption, { borderBottomWidth: index === options.length - 1 ? 0 : 0.5 }]} 
                key={index}
                onPress={() => handleAction(option.action, code)}>
                <Text style={globalStyle.text14Regular}>{option.label}</Text>
                {option.icon}
              </TouchableOpacity>
            ))}
          </BlurView>

        </MenuOptions>
      </Menu>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 18,
    justifyContent: 'space-between',
    // backgroundColor: '#797C7D1A',
  },

  menuContent: {
    paddingVertical: 8,
    overflow: 'hidden',
    borderRadius: 20,
  },

  menuOption: {
    // backgroundColor: '#797C7D1A',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderBottomColor: "#617275"
  },

  popoverTrigger: {
    paddingHorizontal: 12,
    // backgroundColor: '#797C7D1A',
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});


const optionsStyles = {
  optionsContainer: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    marginTop: 40,
    right: 40,
    width: 250,
    backgroundColor: '#445153B2', // Adjust the background transparency
    borderRadius: 12,
  },
};