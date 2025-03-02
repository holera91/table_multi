import { Stack } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="main" />
      <Stack.Screen name="studie" />
      <Stack.Screen name="testing" />
      <Stack.Screen name="game" />
      <Stack.Screen name="prepare" />
    </Stack>
  );
}
