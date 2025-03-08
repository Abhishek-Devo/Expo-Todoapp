import { Stack } from "expo-router";
//we imported
import { SafeAreaProvider } from "react-native-safe-area-context";

import {ThemeProvider} from "../context/ThemeContext.js"

export default function RootLayout() {
  return (
    //full code written self 
    <ThemeProvider>
    <SafeAreaProvider>
      <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen name="index" />
        {/* dynamic route  */}
        <Stack.Screen name="todos/[id]" />
      </Stack>
    </SafeAreaProvider>
    </ThemeProvider>
  ) 

}
