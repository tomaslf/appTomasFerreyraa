import React from 'react'
import { StyleSheet, View, FlatList, KeyboardAvoidingView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import CategoriesPlaces from '../components/CategoriesPlaces'
import Header from '../components/Header'
import { selectedCategory } from '../store/actions/category.action'
import colorss from '../constants/colorss'

const CategoriesScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const categories = useSelector(state => state.categories.categories)

    const handleSelectedCategory = item => {
        dispatch(selectedCategory(item.id))
        navigation.navigate("Places", {
            title: item.name
        })
    }

    const renderCategories = ({ item }) => (
        <View style={styles.categoriesContainer}>
            <CategoriesPlaces item={item} onSelected={handleSelectedCategory} />
        </View>
    )

    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>

            <View style={styles.container}>
                <Header title={"Where do you want to go?"} />
                <FlatList

                    showsVerticalScrollIndicator={false}
                    data={categories}
                    renderItem={renderCategories}
                    keyExtractor={item => item.id}
                />
            </View >


        </KeyboardAvoidingView>


    )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colorss.backgroundColor



    },
    categoriesContainer: {
        padding: 10,
        height: 280,
        width: 300,
    }
})