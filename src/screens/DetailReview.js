import { StyleSheet, Text, View, FlatList, Button } from 'react-native'
import React from 'react'
import ReviewComponent from '../components/ReviewComponent'
import { useSelector } from 'react-redux'
import colorss from '../constants/colorss'
import { emptyReview } from '../store/actions/review.action'
import { useDispatch } from 'react-redux'


const DetailReview = () => {
  const dispatch = useDispatch()
  const review = useSelector(state => state.review.review)
  const renderItem = ({ item }) => (
    <ReviewComponent title={item.title} image={item.image} id={item.itemId} />
  )

  const handleDelete = () =>{


  }

  return (
    <View style={styles.container}>
        <FlatList
          data={review}
          keyExtractor={item => item.id}
          renderItem={renderItem} />
          <Button title='Delete all' onPress={handleDelete}/>
    </View>
  )
}

export default DetailReview

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: colorss.backgroundColor
  }
})