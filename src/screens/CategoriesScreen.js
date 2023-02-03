import { StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
import CategoriesPlaces from '../components/CategoriesPlaces'
import categories from '../data/categories'
import Header from '../components/Header'


const CategoriesScreen = ({ navigation }) => {

    const handleSelectedCategory = item => {
        navigation.navigate("Places", {
            id: item.id,
            title: item.name
        })
    }

    const renderCategories = ({ item }) => (
        <View style={styles.categoriesContainer}>
            <CategoriesPlaces item={item} onSelected={handleSelectedCategory} />
        </View>
    )

    return (
        <View style={styles.container}>
            <Header title={"Choose your type of trip"} />
            <FlatList
                data={categories}
                renderItem={renderCategories}
                keyExtractor={item => item.id} />
        </View >

    )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    categoriesContainer: {
        padding: 15,
        height: 150
    }
})