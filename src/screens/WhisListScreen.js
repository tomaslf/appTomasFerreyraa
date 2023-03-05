import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react'
import colorss from '../constants/colorss'
import { useSelector, useDispatch } from 'react-redux'
import WishList from '../components/WhishList'
import { selectedPlace } from '../store/actions/places.action'
import { emptyWishList } from '../store/actions/wishList.action'
import Ionicons from '@expo/vector-icons/Ionicons'
import LottieView from "lottie-react-native";

const WhishListScreen = ({ navigation }) => {

  const dispatch = useDispatch();

  const detail = useSelector(state => state.places.selected)
  const items = useSelector(state => state.wishList.items)

  const handleSelectedPlace = item => {
    dispatch(selectedPlace(item.id))
    navigation.navigate("Details", {
      description: item.description,
      city: item.city,
      country: item.country,
      hotels: item.hotels,
      img: item.img
    })
  }

  const handleDislike = () => {
    dispatch(emptyWishList(detail))
  }

  const renderWishList = ({ item }) => (
    <View style={styles.wishContainer} >
      <WishList item={item} onSelected={handleSelectedPlace} />
    </View>
  )



  return (
    <View style={styles.container}>
      {(items.length === 0) ? <LottieView
        source={require("../assets/images/123724-wishlist-empty.json")}
        style={styles.animation}
        autoPlay
      /> : <><FlatList
        data={items}
        renderItem={renderWishList}
        keyExtractor={item => item.id}
        numColumns={2} />
        <TouchableOpacity onPress={handleDislike} >
          <Ionicons name="heart-dislike-outline" size={30} color='black' />
        </TouchableOpacity></>
      }

    </View>
  )
}

export default WhishListScreen

const styles = StyleSheet.create({
  animation: {
    backgroundColor: colorss.backgroundColor,
    marginLeft:20
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colorss.backgroundColor
  },
  wishContainer: {
    padding: 5,
    height: 200,
    width: 190,
  }

})