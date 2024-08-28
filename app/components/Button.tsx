import React from 'react';
import { Text, StyleSheet, Pressable, PressableProps, TouchableOpacity, GestureResponderEvent, StyleProp } from 'react-native';

// interface ButtonProps extends PressableProps {
interface ButtonProps {
  title: string;
  variant: 'filled' | 'transparent',
  onPress?: (vent: GestureResponderEvent) => void;
  buttonStyle?: StyleProp<any>;
}

export default function Button(props: ButtonProps) {
  const { onPress, title, variant, buttonStyle } = props;
  return (
    <Pressable
      style={[ styles.button, variant == 'filled' ? styles.variantFilled : styles.variantTransparent, buttonStyle ]}
      onPress={onPress}>
      <Text style={[styles.text, variant == 'filled' ? { color: 'black' } : { color: 'white' }]}>{title}</Text>
    </Pressable>
  );
}


const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: '900',
    letterSpacing: 0.25,
  },
  variantFilled: {
    backgroundColor: 'white',
  },
  variantTransparent: {
    backgroundColor: 'transparent'
  }
});