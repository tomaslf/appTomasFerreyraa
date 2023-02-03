import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import { useEffect } from 'react'

const PlacesItems = ({item, onSelected}) => {
  useEffect(() => {
    console.log({item})
  }, [])


  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri:"https://www.entornoturistico.com/wp-content/uploads/2020/09/agencia-de-viajes-1280x720.jpg" }} />
      </View>
      <View style={styles.cityContainer}>
        <Text>city</Text>
        <Text>country</Text>
      </View>
    </View>
  )
}

export default PlacesItems

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
  },
  imageContainer: {
    height: '60%',
    width:150
  },
  cityContainer: {
    height: '40%'
  },
  image:{
    width:'100%',
    height:'100%'
  }
})