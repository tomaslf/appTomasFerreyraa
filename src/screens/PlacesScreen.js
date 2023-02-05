import { Button, FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import PlacesItems from '../components/PlacesItems'
import places from '../data/places'


const PlacesScreen = ({ navigation, route }) => {


    const newPlaces = places.filter(
        place => place.categories === route.params.id)

    const handleSelectedPlace = item => {
        navigation.navigate("Details", {
            description: item.description,
            city: item.city,
            country:item.country,
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
        <View style={styles.container}>

            <FlatList
                data={newPlaces}
                renderItem={renderPlaces}
                keyExtractor={(item) => item.id}
                numColumns={1} />
        </View>
    )
}

export default PlacesScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    placesContainer: {
        widht: 150,
        height: 150
    }
})