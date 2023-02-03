import { Button, FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import PlacesItems from '../components/PlacesItems'
import places from '../data/places'


const PlacesScreen = ({ navigation }) => {

    const handleSelectedPlace = item => {
        navigation.navigate("Details", {
            name: item.name
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
                data={places}
                renderItem={renderPlaces}
                keyExtractor={(item) => item.id}
                numColumns={2} />


            <Button title="go" onPress={() => navigation.navigate("Home")} />
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