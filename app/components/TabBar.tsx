import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors';
import { useTheme } from '@/providers/theme/Theme.provider';

function TabBar({ state, descriptors, navigation }: { state: any, descriptors: any, navigation: any }) {

  const { primary_dark, primary_base, background } = useTheme();

  const styles = StyleSheet.create({

    tabBar: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      paddingHorizontal: 24,
      paddingVertical: 16,
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 12,
      borderTopColor: '#282626',
      borderTopWidth: 1,
      backgroundColor: background
    },

    tabBarItem: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
      gap: 8,
      padding: 12,
      borderRadius: 18,
    },

    tabBarItemLabel: {
      color: primary_base,
      fontSize: 14,
      fontWeight: '600',
    }

  })

  return (
    <View style={styles.tabBar}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}

          >
            <View style={[styles.tabBarItem, { backgroundColor: isFocused ? primary_dark : 'transparent' }]}>

              <View style={{ width: 24, height: 24, backgroundColor: primary_base, borderRadius: 6, }} />

              {isFocused &&
                <Text style={styles.tabBarItemLabel}>
                  {label}
                </Text>
              }

            </View>

          </TouchableOpacity>
        );
      })}
    </View>
  );
}


export default TabBar

