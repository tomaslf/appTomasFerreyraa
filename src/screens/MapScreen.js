import React from 'react'
import { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { WebView } from 'react-native-webview'
import colorss from '../constants/colorss'
import LottieView from "lottie-react-native";

const MapScreen = ({ route }) => {

  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 6000)
  })
  useEffect(() => {
    console.log(route.params.maps)
  }, [])


  return (
    <View style={styles.container}>
      {(loader) ? <LottieView
        source={require("../assets/images/78072-map-pin-location.json")}
        style={styles.animation}
        autoPlay
      /> : <WebView style={{ backgroundColor: colorss.backgroundColor }} source={{ uri: route.params.maps }} />}
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: colorss.backgroundColor,
    marginBottom: 90,

  },
  animation: {
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: colorss.backgroundColor,
    marginBottom: 60,
    marginLeft: 20,
    marginRight: 20
  },

})