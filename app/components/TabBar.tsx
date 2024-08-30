import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react';
import { useTheme } from '@/providers/theme/Theme.provider';
import { Menu } from '@/app/icons/menu';
import { Clock } from '@/app/icons/clock';
import { Scan } from '@/app/icons/scan';

type Route = {
  key: string;
  name: string;
  params?: Record<string, any>; // params are optional and can be of any type
};


function TabBar({ state, descriptors, navigation }: { state: any, descriptors: any, navigation: any }) {

  const { primary_dark, primary_base, primary_medium, background } = useTheme();

  const icons: Record<string, (props: any) => JSX.Element> = {
    index: (props) => <Menu color={primary_base} {...props} />,
    recent: (props) => <Clock color={primary_base} {...props} />,
    scan: (props) => <Scan color={primary_base} {...props} />,
  }

  const styles = StyleSheet.create({

    tabBar: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      paddingHorizontal: 24,
      paddingTop: 16,
      paddingBottom: 30,
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
      {state.routes.map((route: Route, index: number) => {
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
              {
                icons[route.name]({
                  color: isFocused ? primary_base : primary_medium,
                })
              }
              {
                isFocused &&
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

