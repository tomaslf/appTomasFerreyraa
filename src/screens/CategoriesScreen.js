import { Button, FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import CategoriesPlaces from '../components/CategoriesPlaces'
import categories from '../data/categories'

const CategoriesScreen = ({navigation}) => {

    const handleCategories = ({item}) => ( <CategoriesPlaces item={item} onSelected={() => console.log("hola")} />)


    return (
        <View>  
            <FlatList
            data={categories}
            renderItem={handleCategories}
            keyExtractor={item => item.id} />
            <View>
                <Button title='Go to Places' onPress={()=> navigation.navigate("Home")} />
            </View>
        </View>

    )
}

export default CategoriesScreen

const styles = StyleSheet.create({})