import React from 'react';

import { useFonts } from 'expo-font';
import {
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
} from '@expo-google-fonts/nunito';

import Routes from './src/routes';

export default function App() {
  const [fontsLoads] = useFonts({
    nunito600: Nunito_600SemiBold,
    nunito700: Nunito_700Bold,
    nunito800: Nunito_800ExtraBold,
  });

  if (!fontsLoads) {
    return null;
  }
  return <Routes />;
}
