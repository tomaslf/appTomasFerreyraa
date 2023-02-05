import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'


const PlacesItems = ({item, onSelected}) => {


  return (
    <TouchableOpacity style={styles.container} onPress={()=> onSelected(item)}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri:item.img }} />
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
    backgroundColor: 'red',
    width: 200,
    marginTop:10
  },
  imageContainer: {
    height: '70%',

  },
  cityContainer: {
    height: '30%',
  },
  image:{
    width:'100%',
    height:'100%'
  }
})