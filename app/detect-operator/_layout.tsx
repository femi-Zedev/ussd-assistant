import React, { PropsWithChildren } from 'react'
import { PhoneProvider } from '@/app/providers/phone.provider'
import { Slot } from 'expo-router'

export default function _layout() {
  return (
    <PhoneProvider>
      <Slot />
    </PhoneProvider>
  )
}