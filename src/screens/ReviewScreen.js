import React, { useState } from 'react'
import { StyleSheet, View, ScrollView, TextInput, Text, TouchableOpacity, Alert } from 'react-native'
import { useDispatch } from 'react-redux'
import { addReview } from '../store/actions/review.action'
import ImageReviewSelector from '../components/ImageReviewSelector'
import colorss from '../constants/colorss'


const ReviewScreen = ({ navigation }) => {

    const dispatch = useDispatch()
    const [title, setTitle] = useState()
    const [cityName, setCityName] = useState("")
    const [image, setImage] = useState()

    const handleTitleChange = text => setTitle(text)
    const handleCityChange = text => setCityName(text)

    const handleSave = () => {
        if (title === '' || cityName === '' || image === '') {
            Alert.alert('Error', 'Please write a review and add an image');
            return;
        }
        dispatch(addReview(title, image, cityName))
        navigation.navigate("Reviews")
        setTitle("")
        setCityName("")
        setImage("")
    }

    return (
        <ScrollView style={styles.all}>
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder={'City'} onChangeText={handleCityChange} value={cityName} />
                <TextInput style={styles.input} placeholder={'Tell us about the place (Max. 50)'} maxLength={50} onChangeText={handleTitleChange} value={title} />
                <ImageReviewSelector onImage={setImage} />
                <TouchableOpacity style={styles.review} onPress={handleSave}>
                    <Text style={styles.textReview}>ADD REVIEW</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default ReviewScreen

const styles = StyleSheet.create({
    review: {
        backgroundColor: colorss.headerColor,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: 120,
        height: 70,
        borderRadius: 20,
        shadowColor: 'black',
        shadowRadius: 15,
        shadowOpacity: 0.5,
        shadowOffset: { height: 2, width: 0 },
        elevation: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textReview: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white'
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