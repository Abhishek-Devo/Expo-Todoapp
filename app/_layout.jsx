import { Stack } from "expo-router";
//we imported
import { SafeAreaProvider } from "react-native-safe-area-context";

import {ThemeProvider} from "../context/ThemeContext.js"

export default function RootLayout() {
  return (
    //full code written self 
    <ThemeProvider>
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen name="index" options={{headerShown:false}}/>
      </Stack>
    </SafeAreaProvider>
    </ThemeProvider>
  ) 

}
