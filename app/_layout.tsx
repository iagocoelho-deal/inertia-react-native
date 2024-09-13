import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const optionsHeader: NativeStackNavigationOptions = {
    headerStyle: {
      backgroundColor: "#ADACA7",
    },
    headerTintColor: "#fff",
    headerTitleAlign: "center",
    headerTitleStyle: {
      fontWeight: "bold",
    },
  };

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="rent"
          options={{ ...optionsHeader, title: "Alugue um Locker" }}
        />
        <Stack.Screen
          name="payment"
          options={{ ...optionsHeader, title: "Alugue um Locker" }}
        />
        <Stack.Screen name="success" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
