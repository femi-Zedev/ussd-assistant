import Colors from "@/constants/Colors";
import ThemeProvider from "@/providers/theme/Theme.provider";
import { useColorScheme, View } from "react-native";
import { Stack } from 'expo-router/stack';
import useAppStore from "./store/appData";
import { MenuProvider } from "react-native-popup-menu";
import { useEffect, useState } from "react";
import { ApolloClient, ApolloProvider, InMemoryCache, NormalizedCacheObject } from "@apollo/client";
import { hygraph_endpoint } from "./constants";

export default function App() {

  const colorScheme = useColorScheme();
  const { firstAppLaunch } = useAppStore();

  const client = new ApolloClient({
    uri: hygraph_endpoint,
    cache: new InMemoryCache(),
  });

  return (
    <ThemeProvider value={colorScheme === 'dark' ? Colors.dark : Colors.light}>
      <ApolloProvider client={client}>
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
      </ApolloProvider>

    </ThemeProvider>
  );
}