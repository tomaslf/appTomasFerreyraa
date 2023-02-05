import { StyleSheet, Text, View, Button,Image } from 'react-native'
import React from 'react'
import { useEffect } from 'react'


const PlacesDetailScreen = ({route}) => {

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri:route.params.img }} />
      <Button title='Hotel'  />
    </View>
  )
}

export default PlacesDetailScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  image:{
    width:'100%',
    height:'30%'
  }
})