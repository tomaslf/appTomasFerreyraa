import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'


const PlacesItems = ({ item, onSelected }) => {


  return (
    <TouchableOpacity style={styles.container} onPress={() => onSelected(item)}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: item.img }} />
      </View>
      <View style={styles.cityContainer}>
        <Text>{item.city}</Text>
        <Text>{item.country}</Text>
      </View>

    </TouchableOpacity>
  )
}

export default PlacesItems

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D0B8A8',
    borderRadius: 15,
    shadowColor: 'black',
    shadowRadius: 15,
    shadowOpacity: 0.5,
    shadowOffset: { height: 2, width: 0 },
    elevation: 6,
    marginTop: 10,
  },
  imageContainer: {
    width: '100%',
    height: '70%',
  },
  cityContainer: {
    width: '100%',
    height: '30%',
    marginLeft: 5,

  },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  }
})