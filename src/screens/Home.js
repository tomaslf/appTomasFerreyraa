import React from 'react'
import { StyleSheet, ImageBackground, View, Button, KeyboardAvoidingView, ScrollView, TouchableOpacity, Text } from 'react-native';
import Header from '../components/Header'
import colorss from '../constants/colorss';


const Home = ({ navigation }) => {



    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <ImageBackground source={{ uri: "https://www.intermundial.es/blog/wp-content/uploads/2019/10/Con-que-pasaporte-viajo-si-tengo-doble-nacionalidad.jpg" }} resizeMode="cover" style={styles.image}>
                <ScrollView>
                    <Header newStyles={styles.header} title={"Explore the world"} />
                    <View style={styles.container}>
                        <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                            <Text style={styles.text} >START TRAVEL</Text>
                        </TouchableOpacity>
                    </View>
                    
                </ScrollView>
            </ImageBackground>
        </KeyboardAvoidingView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        marginTop:100,
        alignSelf: 'center',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colorss.headerColor,
        borderRadius: 15,
        padding: 15,
        borderRadius: 15,
        shadowColor: 'black',
        shadowRadius: 15,
        shadowOpacity: 0.5,
        shadowOffset: { height: 2, width: 0 },
        elevation: 6,

    },
    image: {
        flex: 1,
        paddingTop: 60
    },
    text: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 35,
        fontFamily: 'OswaldRegular'

    },
    header: {
        fontSize: 45,
        fontStyle: 'bolder'
    }

})