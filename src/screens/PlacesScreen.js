import React from 'react'
import { useEffect } from 'react'
import { FlatList, ScrollView, StyleSheet, View, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import PlacesItems from '../components/PlacesItems'
import colorss from '../constants/colorss'

import { selectedPlace, filteredPlace } from '../store/actions/places.action'


const PlacesScreen = ({ navigation }) => {

    const dispatch = useDispatch();
    const categoryPlaces = useSelector(state => state.places.filteredPlaces);
    const category = useSelector(state => state.categories.selected);

    useEffect(() => {
        dispatch(filteredPlace(category.id))
    }, [])



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

    const renderPlaces = ({ item }) => (
        <View style={styles.placesContainer}>
            <PlacesItems item={item} onSelected={handleSelectedPlace} />
        </View>

    )

    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <View style={styles.container}>
                <FlatList
                    data={categoryPlaces}
                    renderItem={renderPlaces}
                    keyExtractor={(item) => item.id}
                    numColumns={2} />
            </View>
        </KeyboardAvoidingView>

    )
}

export default PlacesScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colorss.backgroundColor


    },
    placesContainer: {
        padding: 5,
        height: 200,
        width: 190,
    }
})