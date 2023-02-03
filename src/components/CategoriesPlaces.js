import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'


const CategoriesPlaces = ({ item, onSelected }) => {

  return (
    <View style={styles.categoriesContainer}>
      <TouchableOpacity style={styles.container} onPress={() => onSelected(item)} >
        <View style={styles.textContainer}>
          <Text>
            {item.name}
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: item.img }} />
        </View>
      </TouchableOpacity>
    </View>



  )
}

export default CategoriesPlaces

const styles = StyleSheet.create({
  categoriesContainer: {
    flex: 1,
    borderRadius: 10,

  },
  container: {
    flexDirection: 'row',
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,

  },
  textContainer: {
    width: '60%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    width: '40%',
    height: '100%'
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopRightRadius:10,
    borderBottomRightRadius:10
  }
})