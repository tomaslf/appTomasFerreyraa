import React from 'react'
import { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { WebView } from 'react-native-webview'
import colorss from '../constants/colorss'
import LottieView from "lottie-react-native";

const HotelScreen = ({ route }) => {

  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 4000)
  })

  return (
    <View style={styles.container}>
      {(loader) ? <LottieView
        source={require("../assets/images/98089-loader.json")}
        style={styles.animation}
        autoPlay
      /> : <WebView style={{ backgroundColor: colorss.backgroundColor }} source={{ uri: route.params.hotels }} />}
    </View>
  )
}

export default HotelScreen

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: colorss.backgroundColor

  },
  animation: {
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: colorss.backgroundColor,
  },

})