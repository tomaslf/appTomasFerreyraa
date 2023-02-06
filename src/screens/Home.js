import React from 'react'
import { StyleSheet, ImageBackground, View, Button, KeyboardAvoidingView, ScrollView, TouchableOpacity, Text } from 'react-native';
import Header from '../components/Header'
import colors from '../constants/colors';


const Home = ({ navigation }) => {



    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <ImageBackground source={{ uri: "https://www.entornoturistico.com/wp-content/uploads/2020/09/agencia-de-viajes-1280x720.jpg" }} resizeMode="cover" style={styles.image}>
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
        backgroundColor: colors.headerColor,
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
        fontStyle: 'italic'
    }

})