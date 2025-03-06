import { Stack } from "expo-router";
//we imported
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    //full code written self 
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen name="index" options={{headerShown:false}}/>
      </Stack>
    </SafeAreaProvider>
  ) 

}
