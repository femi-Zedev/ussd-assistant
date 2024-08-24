import React, { ReactNode } from 'react';
import { Text, StyleSheet, Pressable, PressableProps, TouchableOpacity, GestureResponderEvent } from 'react-native';

interface IconButtonProps extends PressableProps {
  icon: ReactNode;
  onPress?: (vent: GestureResponderEvent) => void;

}

export default function IconButton(props: IconButtonProps) {
  const { onPress, icon  } = props;
  return (
    <TouchableOpacity style={[styles.iconButton]} onPress={props.onPress}>
      {icon}
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  iconButton: {
    width: 54, 
    height: 54, 
    borderRadius: 90, 
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});