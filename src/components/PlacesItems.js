import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'


const PlacesItems = ({item, onSelected}) => {
 
  return (
    <TouchableOpacity style={styles.container} onPress={()=> onSelected(item)}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri:"https://www.entornoturistico.com/wp-content/uploads/2020/09/agencia-de-viajes-1280x720.jpg" }} />
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
    borderRadius: 10,
    padding:20,
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