import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="program/[programId]"
          options={{
            title: 'Simulador Pense Bem',
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: '#1b263b' },
            headerTintColor: '#f8f9fa',
          }}
        />
      </Stack>
      <StatusBar style="light" />
    </ThemeProvider>
  );
}
