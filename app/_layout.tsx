import Colors from "@/constants/Colors";
import ThemeProvider from "@/providers/theme/Theme.provider";
import { useColorScheme, View } from "react-native";
import { Stack } from 'expo-router/stack';
import Onboarding from "./onboarding";
import useAppStore from "./store/appData";
import { useEffect, useState } from "react";
import { Slot, useRouter } from "expo-router";
import { SearchProvider } from "./providers/search.provider";
import { MenuProvider } from "react-native-popup-menu";
import { PhoneProvider } from "./providers/phone.provider";

export default function App({ children }: { children: any }) {

  const colorScheme = useColorScheme();
  const { firstAppLaunch } = useAppStore();
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(() => {
    if (!isLoaded) {
      // Navigate to the correct screen based on first app launch
      if (firstAppLaunch) {
        router.push('/onboarding'); // Push to onboarding page
      } else {
        router.replace('/(tabs)'); // Push to tab layout
        console.log('pushing to tabs');
      }
      setIsLoaded(true); // Ensure the layout loads only once
    }
  }, [firstAppLaunch, isLoaded, router]);

  return (
    <ThemeProvider value={colorScheme === 'dark' ? Colors.dark : Colors.light}>
      <SearchProvider>
        <PhoneProvider>
          <MenuProvider>
          <Slot />
        </MenuProvider>
        </PhoneProvider>
        
      </SearchProvider>
    </ThemeProvider>
  );
}