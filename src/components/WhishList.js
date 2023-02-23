import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'



const WhishList = ({ item, onSelected}) => {
    return (
        <View style={styles.whishContainer}>
            <TouchableOpacity onPress={() => onSelected(item)} style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={{ fontFamily: 'OswaldRegular', fontSize: 18 }}>
                        {item.city}
                    </Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: item.img }} />
                </View>
            </TouchableOpacity>
            
        </View>
    )
}

export default WhishList

const styles = StyleSheet.create({
    whishContainer: {
        flex: 1,
        borderRadius: 10,
    },
    container: {
        flex: 1,
        backgroundColor: '#D0B8A8',
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
        shadowColor: 'black',
        shadowRadius: 15,
        shadowOpacity: 0.5,
        shadowOffset: { height: 2, width: 0 },
        elevation: 6,
        flexDirection: 'column-reverse'
    },
    textContainer: {
        width: '100%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        width: '100%',
        height: '70%',

    },
    image: {
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
        width: '100%',
        height: '100%',

    }
})