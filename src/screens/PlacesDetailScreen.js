import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import colorss from '../constants/colorss'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useSelector } from 'react-redux'

const PlacesDetailScreen = ({ navigation }) => {

  const detail = useSelector(state => state.places.selected)


  const handleHotel = () => {
    navigation.navigate("Hotel", {
        hotels: detail.hotels,
    })
}

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: detail.img }} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.icons}>
          <Ionicons name="airplane" size={30} color='black' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icons}>
          <Ionicons name="map" size={30} color='black' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icons}>
          <Ionicons name="restaurant" size={30} color='black' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icons} onPress={handleHotel} >
          <Ionicons name="bed" size={30} color='black' />
        </TouchableOpacity>

      </View>

      <Text style={styles.cityText}>{detail.city},{detail.country}</Text>
      <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, marginTop: 5 }} />
      <Text style={styles.description}>{detail.description}</Text>


    </View>
  )
}

export default PlacesDetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: colorss.backgroundColor
  },
  image: {
    width: '100%',
    height: '55%',
    borderRadius: 30,
    marginBottom: 10,
  },
  buttonContainer: {
    justifyContent: 'space-around',
    flexDirection: 'row',
  }
  ,
  icons: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 70,
    backgroundColor: colorss.headerColor,
    borderRadius: 70,
    shadowColor: 'black',
    shadowRadius: 15,
    shadowOpacity: 0.5,
    shadowOffset: { height: 2, width: 0 },
    elevation: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cityText: {
    marginTop: 10,
    marginLeft: 3,
    fontFamily: 'OswaldRegular',
    fontSize: 30,
  },
  description: {
    fontFamily: 'OswaldRegular',
    fontStyle: 'italic',
    textAlign: 'justify'
  }
})