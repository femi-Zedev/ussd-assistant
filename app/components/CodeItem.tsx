import { View, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native'
import React from 'react'
import globalStyle from '../globalStyle'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Menu, MenuOption, MenuOptions, MenuProvider, MenuTrigger } from 'react-native-popup-menu'


export default function CodeItem({ code, label, description, style }: { code: string, label: string, description?: string, style?: StyleProp<ViewStyle> }) {
  return (
    <View style={[styles.container, style]}>
      <View>
        <Text style={[globalStyle.text16Bold]}>{label}</Text>
        <Text style={[globalStyle.text12SemiBold, { marginTop: 4 }]}>{code}</Text>
      </View>


     
        <Menu>
          <MenuTrigger
            customStyles={{
              triggerWrapper: styles.popoverTrigger,
            }}
          >
            <MaterialCommunityIcons name="dots-horizontal" size={24} color="white" />
          </MenuTrigger>

          <MenuOptions customStyles={{ }}>
            <MenuOption onSelect={() => alert(`Save`)} text="Save" />
            <MenuOption onSelect={() => alert(`Delete`)} text="Delete" />
          </MenuOptions>
        </Menu>

    </View>
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

  popoverTrigger: {
    paddingHorizontal: 12,
    backgroundColor: '#797C7D1A',
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});


const triggerStyles = {
  triggerText: {
    color: 'white',
  },
  triggerOuterWrapper: {
    // backgroundColor: 'orange',
    // padding: 5,
    // flex: 1,
  },
  triggerWrapper: {
    paddingHorizontal: 12,
    backgroundColor: '#797C7D1A',
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  triggerTouchable: {
    // underlayColor: 'darkblue',
    // activeOpacity: 70,
    // style : {
    //   flex: 1,
    // },
  },
};