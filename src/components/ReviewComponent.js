import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'


const ReviewComponent = ({ title, image, cityName }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>City: {cityName}</Text>
            <Image style={styles.image} source={{ uri: image }} />
            <View style={styles.review}>
                <Text style={styles.title}>Description: {title}</Text>
            </View>
        </View>
    )
}

export default ReviewComponent

const styles = StyleSheet.create({
    container: {
        margin:20,
        backgroundColor: '#D0B8A8',
        borderRadius: 15,
        shadowColor: 'black',
        shadowRadius: 15,
        shadowOpacity: 0.5,
        shadowOffset: { height: 2, width: 0 },
        elevation: 6,
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center'
    },
    image: {
        width: 300,
        height: 200,
    },
    review: {
        flex: 1,
        justifyContent: 'center',

    },
    title: {
        fontFamily: 'OswaldRegular',
        fontSize: 18,
        marginBottom: 6,
        textAlign: 'center',
        padding:10
    },

})