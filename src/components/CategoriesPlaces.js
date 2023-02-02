import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'


const CategoriesPlaces = ({item, onSelected }) => {

  return (
    <TouchableOpacity onPress={onSelected}>
        <Text>{item.name}</Text>
    </TouchableOpacity>



  )
}

export default CategoriesPlaces

const styles = StyleSheet.create({
  image: {
    flex: 1,
    paddingTop: 60
}
})