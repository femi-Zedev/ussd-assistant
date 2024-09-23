import Colors from "@/constants/Colors";
import ThemeProvider from "@/providers/theme/Theme.provider";
import { useColorScheme, View } from "react-native";
import { Stack } from 'expo-router/stack';
import Onboarding from "./onboarding";
import useAppStore from "./store/appData";
import { useEffect } from "react";
import { router, Slot } from "expo-router";
import { SearchProvider } from "./providers/search.provider";
import { MenuProvider } from "react-native-popup-menu";
export default function App({ children }: { children: any }) {

  const colorScheme = useColorScheme();
  const { firstAppLaunch } = useAppStore();

  useEffect(() => {
    if (firstAppLaunch === true) {
      router.replace('/onboarding');
    } else if (firstAppLaunch === false) {
      router.replace('(tabs)');
    }
  }, [firstAppLaunch, router]);

  if (firstAppLaunch === null) {
    // Optionally, render a loading screen while checking AsyncStorage
    return null;
  }


  return (
    <ThemeProvider value={colorScheme === 'dark' ? Colors.dark : Colors.light}>
      <SearchProvider>
      <MenuProvider>
        <Slot />
      </MenuProvider>
      </SearchProvider>
    </ThemeProvider>
  );
}