import { Button, FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import PlacesItems from '../components/PlacesItems'
import places from '../data/places'


const PlacesScreen = ({ navigation }) => {
   
    

    const renderPlaces = ({item}) => (
        
        <PlacesItems item={item}  />
    )

    return (
        <View style={styles.container}>
            <View style={styles.placesContainer}>
                <FlatList
                data={places}
                renderItem={renderPlaces}
                keyExtractor={item => item.id}/>
                <PlacesItems />
            </View>
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
    placesContainer:{
        widht:150,
        height: 150
    }
})