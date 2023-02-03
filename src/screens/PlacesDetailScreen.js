import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useEffect } from 'react'

const PlacesDetailScreen = ({navigation, route}) => {

    useEffect(() => {
        console.log(route.params)
      }, [])
  return (
    <View>
      <Text>PlacesDetailScreen</Text>
    </View>
  )
}

export default PlacesDetailScreen

const styles = StyleSheet.create({})