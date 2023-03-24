import { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { addWishList, emptyWishList } from '../store/actions/wishList.action'
import colorss from '../constants/colorss'
import Ionicons from '@expo/vector-icons/Ionicons'




const PlacesDetailScreen = ({ navigation }) => {

  const dispatch = useDispatch()
  const detail = useSelector(state => state.places.selected)
  const [heartIcon, setHeartIcon] = useState({
    name: "heart-outline",
    isInWishList: false
  });



  const dataImages = [
    { id: 1, uri: detail.img },
    { id: 2, uri: detail.img2 },
    { id: 3, uri: detail.img3 },
  ]

  const renderItem = ({ item }) => (
    <Image style={styles.image} source={{ uri: item.uri }} />
  );


  const handleWishList = () => {
    if (heartIcon.isInWishList) {
      dispatch(emptyWishList(detail.id));
      setHeartIcon({ name: "heart-outline", isInWishList: false });
    } else {
      dispatch(addWishList(detail));
      setHeartIcon({ name: "heart", isInWishList: true });
    }
  };

  const handleHotel = () => {
    navigation.navigate("Hotel", {
      hotels: detail.hotels,
    })
  }

  const handleReview = () => {
    navigation.navigate("Review")
  }

  const handleMaps = () => {
    navigation.navigate("Maps", {
      maps: detail.maps,
    })
  }



  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <FlatList
            horizontal={true}
            data={dataImages}
            keyExtractor={item => item.id}
            renderItem={renderItem}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.icons} >
              <Ionicons name="map" size={30}  onPress={handleMaps} color='black' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icons} onPress={handleReview} >
              <Ionicons name="camera" size={30} color='black' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icons} onPress={handleHotel} >
              <Ionicons name="bed" size={30} color='black' />
            </TouchableOpacity>
          </View>
          <View style={styles.cityContainer}>
            <Text style={styles.cityText}>{detail.city},{detail.country}</Text>
            <TouchableOpacity onPress={handleWishList} style={{ marginRight: 25, marginLeft:10, marginTop: 10 }}>
              <Ionicons name={heartIcon.name} size={30} color='black' />
            </TouchableOpacity>
          </View>
          <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, marginTop: 5 }} />
          <Text style={styles.description}>
            {detail.description}
          </Text>

        </View>

      </ScrollView>

    </View>






  )
}

export default PlacesDetailScreen

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 15,
    marginBottom: 80
  },
  image: {
    width: 330,
    height: 400,
    borderRadius: 30,
    marginBottom: 12,
    marginRight: 10

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