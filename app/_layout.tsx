import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import {StyleSheet} from "react-native"



// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    Quicksand: require('../assets/fonts/Quicksand-Regular.ttf'),

  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
   <>
     <Stack>
        <Stack.Screen name="index" options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name="(tabs)" options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name="register" options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name="recover_password" options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name="reception" options={{headerShown: false}}></Stack.Screen>
      </Stack>
   </>
  );

}

