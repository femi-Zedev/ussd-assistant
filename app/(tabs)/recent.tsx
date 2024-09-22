import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import globalStyles from '@/app/globalStyle';
import SearchButton from '../components/SearchButton';
import CodeItem from '../components/CodeItem';
import Colors from '@/constants/Colors';


export default function Recent() {
  const codes = [
    { label: 'Mobile money (MTN)', code: '*880#' },
    { label: 'Mobile money (Celtiis)', code: '*889#' },
  ]

  return (
    <View style={globalStyles.container}>
      <View style={[globalStyles.wrapper, { marginTop: 70 }]}>

        <Text style={[globalStyles.text18SemiBold, { marginVertical: 14 }]}>Récemment utilisé </Text>

        <View style={{ marginTop: 20, paddingLeft: 10 }}>
          {codes.map((item, index) => (
            <CodeItem code={item.code} key={index} label={item.label} style={{ borderBottomWidth: index === codes.length - 1 ? 0 : 1, borderBottomColor: Colors.gray.light }} />
          ))}
        </View>

      </View>
      <SearchButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});