import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, Alert, Image } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import colorss from '../constants/colorss'

const ImageReviewSelector = props => {

    const [picked, setPicked] = useState()

    const verifyPermissions = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync()

        if (status !== 'granted') {
            Alert.alert("Permisos insuficientes", [{ text: 'OK' }])
            return false
        }
        return true
    }
    const handleImage = async () => {

        try {
            const isCameraPermisionsOk = await verifyPermissions()
            if (!isCameraPermisionsOk) return
            const image = await ImagePicker.launchCameraAsync({
                allowsEditing: true,
                quality: 0.8
            })
    
            setPicked(image.assets[0].uri)
            props.onImage(image.assets[0].uri)
    
            
        } catch (error) {
            console.log(err.message)
            throw err
        }
       
    }

    return (
        <View style={styles.container}>
            <View style={styles.preview}>
                {!picked ? (<Text>Choose a Photo</Text>) : (<Image style={styles.image} source={{ uri: picked }} />)}
            </View>
            <Button title='Choose Photo' color={colorss.headerColor} onPress={handleImage} />
        </View>

    )
}

export default ImageReviewSelector

const styles = StyleSheet.create({
    container: {
        marginBottom: 10

    },
    preview: {
        width: '100%',
        height: 350,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5
    },
    image: {
        width: '100%',
        height: '100%'
    }
})