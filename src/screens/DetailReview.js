import React from 'react'
import { StyleSheet, View, FlatList, Button } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import ReviewComponent from '../components/ReviewComponent'
import { emptyReview } from '../store/actions/review.action'
import colorss from '../constants/colorss'


const DetailReview = () => {
  const dispatch = useDispatch()
  const review = useSelector(state => state.review.review)
  const renderItem = ({ item }) => (
    <ReviewComponent title={item.title} image={item.image} id={item.itemId} />
  )

  const handleDelete = () => {


  }

  return (
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
    backgroundColor: colorss.backgroundColor
  }
})