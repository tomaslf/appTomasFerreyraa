import React from 'react'
import { StyleSheet, ImageBackground, View, Button, KeyboardAvoidingView, ScrollView, TouchableOpacity, Text } from 'react-native';
import Header from '../components/Header';
import colors from '../constants/colors';


const Home = ({ navigation }) => {



    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <ImageBackground source={{ uri: "https://www.entornoturistico.com/wp-content/uploads/2020/09/agencia-de-viajes-1280x720.jpg" }} resizeMode="cover" style={styles.image}>
                <ScrollView>
                    <View style={styles.container}>
                        <Header title={'Travel'} />
                        <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Categories')}>
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
        flex: 1,
        justifyContent: 'center'
    },
    image: {
        flex: 1,
        paddingTop: 60
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.backgroundColor,
        borderRadius:20,
        

    },
    text: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 45,

    }

})