import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import MainNavigation from './src/navigation'
import { Provider } from 'react-redux';
import store from './src/store';

export default function App() {
  const [loaded] = useFonts({
    OswaldRegular: require("./src/assets/fonts/Oswald-Bold.ttf"),
  })
  if (!loaded) {
    return null
  }

  return (
    <Provider  store={store} >
      <NavigationContainer  >
        <MainNavigation  />
      </NavigationContainer>
    </Provider>


  );
}

