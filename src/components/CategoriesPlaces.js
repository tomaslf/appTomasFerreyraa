import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'


const CategoriesPlaces = ({ item, onSelected }) => {

  return (
    <View style={styles.categoriesContainer}>
      <TouchableOpacity style={styles.container} onPress={() => onSelected(item)} >
        <View style={styles.textContainer}>
          <Text style={{fontFamily:'OswaldRegular', fontSize:18}}>
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
    flex:1,
    backgroundColor:'#D0B8A8',
    borderRadius:15,
    shadowColor:'black',
    shadowRadius:15,
    shadowOpacity:0.5,
    shadowOffset: {height: 2, width:0},
    elevation:6,
  },
  textContainer: {
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    height: '70%',
   
  },
  image: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
   
  }
})