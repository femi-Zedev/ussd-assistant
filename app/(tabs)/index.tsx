import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SearchButton from '@/app/components/SearchButton';

export default function index() {
  return (
    <View style={styles.container}>
      <Text>Tab [Home]</Text>
      <SearchButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: '100%',
    maxHeight: '100%',
  },
});