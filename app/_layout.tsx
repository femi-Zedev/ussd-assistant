import Colors from "@/constants/Colors";
import ThemeProvider from "@/providers/theme/Theme.provider";
import { useColorScheme } from "react-native";
import { Stack } from 'expo-router/stack';
import Onboarding from "./onboarding/Onboarding";
export default function App() {
  
  const colorScheme = useColorScheme();


  return (
    <ThemeProvider value={colorScheme === 'dark' ? Colors.dark : Colors.light}>
      {false ?
        <Onboarding />
        :
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      } 
    </ThemeProvider>
  );
}