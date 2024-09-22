import React from 'react'

import { Tabs, usePathname, useSegments } from 'expo-router';
import globalStyles from '@/app/globalStyle'
import TabBar from '../components/TabBar';
import DetectOperator from './detect-operator';
import { FontAwesome } from '@expo/vector-icons';


export default function _layout() {
  // Define routes where the tab bar should be hidden
  const segment = useSegments();
  const page = segment[segment.length - 1]
  const pagesToHideTabBar = ['detect-operator']
  console.log(page, '5555555')

  return (
    <Tabs
      backBehavior='history'
      screenOptions={{
        headerShown: false,
        lazy: true,
      }}
      tabBar={props => <TabBar {...props} />}
      sceneContainerStyle={globalStyles.page}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Services',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,

        }}
      />
      <Tabs.Screen
        name="recent"
        options={{
          title: 'Récent',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,

        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          title: 'Détecter',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          tabBarStyle: {
            display: pagesToHideTabBar.includes(page) ? 'none' : 'flex',
            backgroundColor: 'white',
          }
        }}
      />
    </Tabs>
  )
}
