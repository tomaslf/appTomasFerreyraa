import React from 'react'
import Navigation from './src/navigation/Navigation';
import { useFonts } from 'expo-font';


export default function App() {
  const [loaded] = useFonts({
    OswaldRegular: require("./src/assets/fonts/Oswald-Bold.ttf"),
})
if (!loaded) {
  return null
}

  return (
      <Navigation />
  );
}
