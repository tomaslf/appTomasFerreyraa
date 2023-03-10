import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'


const ReviewComponent = ({ title, image }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: image }} />
            <View style={styles.review}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    )
}

export default ReviewComponent

const styles = StyleSheet.create({
    container: {
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center'
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
        fontSize: 15,
        marginBottom: 6,
        textAlign: 'center'
    },

})