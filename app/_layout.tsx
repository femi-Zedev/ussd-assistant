import Colors from "@/constants/Colors";
import ThemeProvider from "@/providers/theme/Theme.provider";
import { useColorScheme, View } from "react-native";
import { Stack } from 'expo-router/stack';
import useAppStore from "./store/appData";
import { MenuProvider } from "react-native-popup-menu";

export default function App() {

  const colorScheme = useColorScheme();
  const { firstAppLaunch } = useAppStore();


  return (
    <ThemeProvider value={colorScheme === 'dark' ? Colors.dark : Colors.light}>
      <MenuProvider>
        <Stack
          initialRouteName={firstAppLaunch === true ? 'onboarding' : '(tabs)'}
          screenOptions={{
            headerShown: false,
          }}>
          {/* Optionally configure static options outside the route.*/}
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="onboarding" />
          <Stack.Screen name="detect-operator" />
        </Stack>
      </MenuProvider>
    </ThemeProvider>
  );
}