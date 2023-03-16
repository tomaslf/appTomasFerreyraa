import React from 'react'
import { StyleSheet, View, FlatList, Button, Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import ReviewComponent from '../components/ReviewComponent'
import { emptyDataBaseReview, emptyReview, loadReview } from '../store/actions/review.action'
import LottieView from "lottie-react-native";
import { useEffect } from 'react'




const DetailReview = () => {

  const dispatch = useDispatch()

  const review = useSelector(state => state.review.review)

  const renderItem = ({ item }) => (
    <ReviewComponent title={item.title} cityName={item.cityName} image={item.image} id={item.itemId}  />
  )

  const handleDelete = () => {
    dispatch(emptyReview())
    dispatch(emptyDataBaseReview())
  }

  useEffect(() => {
    dispatch(loadReview())
  }, [])
  

  return (

    (review.length === 0) ? <LottieView
      source={require("../assets/images/123724-wishlist-empty.json")}
      style={styles.animation}
      autoPlay
    /> :
      <View style={styles.container}>
        <FlatList
          data={review}
          keyExtractor={item => item.id}
          renderItem={renderItem} />
        <Button title='Delete all' onPress={handleDelete} />
      </View>
  )
}

export default DetailReview

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 100,
  },
  animation:{
    marginBottom:80,
    marginLeft: 20
  }
})