import React from 'react';
import { Text, StyleSheet, Pressable, PressableProps, TouchableOpacity } from 'react-native';

interface ButtonProps extends PressableProps {
  title: string;
  variant: 'filled' | 'transparent'
}

export default function Button(props: ButtonProps) {
  const { onPress, title, variant  } = props;
  return (
    <TouchableOpacity style={[styles.button, variant == 'filled' ? styles.variantFilled : styles.variantTransparent]} onPress={()=>{}}>
      <Text style={[styles.text, variant == 'filled' ? { color: 'black'}: { color : 'white'} ]}>{title}</Text>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderRadius: 12,
    elevation: 3,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
  variantFilled: {
    backgroundColor: 'white',
  },
  variantTransparent: {
    backgroundColor: 'transparent'
  }
});