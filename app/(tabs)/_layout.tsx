import React from 'react'

import { Tabs, useSegments } from 'expo-router';
import globalStyles from '@/app/globalStyle'
import TabBar from '../components/TabBar';
import { SearchProvider } from '../providers/search.provider';


export default function _layout() {
  // Define routes where the tab bar should be hidden
  const segment = useSegments();
  const page = segment[segment.length - 1]
  const pagesToHideTabBar = ['detect-operator']; // Add any pages
  console.log(page, '5555555')

  return (
    <SearchProvider>
      <Tabs
        backBehavior='history'
        screenOptions={{
          headerShown: false,
          lazy: true,
          tabBarStyle: {
            backgroundColor: 'white',
          },
        }}
        tabBar={props => <TabBar {...props} />}
        sceneContainerStyle={globalStyles.page}
        >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Services',
            tabBarStyle: {
              display: pagesToHideTabBar.includes(page) ? 'none' : 'flex',
            },
          }}
        />
        <Tabs.Screen
          name="recent"
          options={{
            title: 'Récent',
            tabBarStyle: {
              display: pagesToHideTabBar.includes(page) ? 'none' : 'flex',
            },
          }}
        />
        <Tabs.Screen
          name="scan"
          options={{
            title: 'Détecter',
            tabBarStyle: {
              display: pagesToHideTabBar.includes(page) ? 'none' : 'flex',
            },
          }}
        />

      </Tabs>
    </SearchProvider>
  )
}
