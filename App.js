import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';


export default function App() {
  const [loaded] = useFonts({
    OswaldRegular: require("./src/assets/fonts/Oswald-Bold.ttf"),
  })
  if (!loaded) {
    return null
  }

  return (
    <NavigationContainer >
      <BottomTabNavigator/>
    </NavigationContainer>

  );
}
