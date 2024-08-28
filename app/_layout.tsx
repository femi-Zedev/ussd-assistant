import Colors from "@/constants/Colors";
import ThemeProvider from "@/providers/theme/Theme.provider";
import { useColorScheme, View } from "react-native";
import { Stack } from 'expo-router/stack';
import Onboarding from "./onboarding/Onboarding";
import useAppStore from "./store/appData";
import { useEffect } from "react";
import { router } from "expo-router";
export default function App({ children }: { children: any }) {
  
  const colorScheme = useColorScheme();
  const { firstAppLaunch } = useAppStore();

  useEffect(() => {
    if (firstAppLaunch === false) {
      router.replace('(tabs)');
    }
  }, [firstAppLaunch, router]);

  if (firstAppLaunch === false) {
    return null;
  }


  return (
    <ThemeProvider value={colorScheme === 'dark' ? Colors.dark : Colors.light}>
      {firstAppLaunch ?
        <Onboarding/>
        :
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          {children}
        </Stack>
      } 
    </ThemeProvider>
  );
}