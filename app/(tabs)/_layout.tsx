import React from 'react'

import { Tabs } from 'expo-router';
import { FontAwesome } from "@expo/vector-icons";
import globalStyles from '@/app/globalStyle'
import TabBar from '../components/TabBar';


export default function _layout() {
  return (
    <Tabs
    initialRouteName="index"
      screenOptions={{
        headerShown: false,
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
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          title: 'Détecter',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
    </Tabs>
  )
}
