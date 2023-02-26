import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, StatusBar } from 'react-native'
import colorss from '../constants/colorss'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useSelector, useDispatch } from 'react-redux'
import { addWishList } from '../store/actions/wishList.action'
import { useState } from 'react'


const PlacesDetailScreen = ({ navigation }) => {

  const dispatch = useDispatch()
  const detail = useSelector(state => state.places.selected)
  const [like, setLike] = useState(<Ionicons name="heart-outline" size={30} color='black' />)

  const handleWishList = () => {
    dispatch(addWishList(detail))
    setLike(<Ionicons name="heart" size={30} color='black' />)
    
  }

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

        <TouchableOpacity style={styles.icons} >
          <Ionicons name="map" size={30} color='black' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icons}>
          <Ionicons name="restaurant" size={30} color='black' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icons} onPress={handleHotel} >
          <Ionicons name="bed" size={30} color='black' />
        </TouchableOpacity>
      </View>
      <View style={styles.cityContainer}>
        <Text style={styles.cityText}>{detail.city},{detail.country}</Text>
        <TouchableOpacity onPress={handleWishList} style={{ marginRight: 25, marginTop: 10 }}>
          {like}
        </TouchableOpacity>
      </View>
      <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, marginTop: 5 }} />
      <Text style={styles.description}>
        {detail.description}
      </Text>
    </View>

  )
}

export default PlacesDetailScreen

const styles = StyleSheet.create({
  imgContainer: {
    height: 400,
    backgroundColor: 'red',
    width: 200
  },
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: colorss.backgroundColor,
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
  },
  toastify: {
    backgroundColor: colorss.tabBarColor,
    color: 'black'
  },
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
  cityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
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
  },
  buttonStyle: {
    marginTop: 10,
    backgroundColor: "white",
    borderColor: "green",
    borderWidth: 2,
    padding: 10
  }
})