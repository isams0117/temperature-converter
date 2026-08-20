import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TemperatureScreen from './Screens/TemperatureScreen.js';

export default function App() {
  return (
    <SafeAreaProvider>
      <TemperatureScreen />
    </SafeAreaProvider>
  );
}