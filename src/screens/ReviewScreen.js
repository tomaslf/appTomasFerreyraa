import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native'
import { useDispatch } from 'react-redux'
import { addReview } from '../store/actions/review.action'
import ImageReviewSelector from '../components/ImageReviewSelector'
import colorss from '../constants/colorss'

const ReviewScreen = ({ navigation }) => {

    const dispatch = useDispatch()
    const [title, setTitle] = useState()
    const [image, setImage] = useState()

    const handleTitleChange = text => setTitle(text)

    const handleSave = () => {

        if (setTitle("")) {
            alert("Please, add a title and a photo first")
            console.log("Please, add a title and a photo first")
        } else {
            dispatch(addReview(title, image))
            navigation.navigate("Reviews")
            setTitle("")
            setImage("")
        }


    }


    return (
        <ScrollView style={styles.all}>
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder={'Tell us about the place (Max. 50)'} maxLength={50} onChangeText={handleTitleChange} value={title} />
                <ImageReviewSelector onImage={setImage} />
                <Button title='Add Review' onPress={handleSave} />
            </View>
        </ScrollView>
    )
}

export default ReviewScreen

const styles = StyleSheet.create({
    all: {
        backgroundColor: colorss.backgroundColor
    },
    container: {
        flex: 1,
        margin: 30,
    },
    label: {
        fontSize: 18,
        marginBottom: 16
    },
    input: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 2,
        paddingVertical: 4
    }
})