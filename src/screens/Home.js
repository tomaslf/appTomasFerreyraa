import React from 'react'
import { StyleSheet, ImageBackground, View, KeyboardAvoidingView, ScrollView, TouchableOpacity, Text } from 'react-native';
import Header from '../components/Header'
import colorss from '../constants/colorss';
import { useEffect, useState } from 'react';
import LottieView from "lottie-react-native";

const Home = ({ navigation }) => {


    const [loader, setLoader] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        }, 5000)
    })


    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            {(loader) ?
            <LottieView 
            source={require("../assets/images/19080-travel-the-world")}
            style={styles.animation}
            autoPlay
          /> :
            <ImageBackground source={{ uri: "https://img.freepik.com/premium-photo/plane-passport-boarding-pass-travel_23-2148169920.jpg?w=2000" }} resizeMode="cover" style={styles.image}>
                <ScrollView>
                    <Header newStyles={styles.header} title={"Explore the world"} />
                    <Text style={styles.subHeader}>Everything you can imagine, is here</Text>
                    <View style={styles.container}>
                        <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                            <Text style={styles.text} >START TRAVEL</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </ImageBackground> }

        </KeyboardAvoidingView>
    )
}

export default Home

const styles = StyleSheet.create({
    animation:{
        backgroundColor:colorss.backgroundColor,
        flex:1,
    },
    container: {
        marginTop: 100,
        alignSelf: 'center',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colorss.headerColor,
        borderRadius: 15,
        padding: 15,
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
        fontStyle: 'bolder',
       
    },
    subHeader:{
        textAlign:'center',
        fontSize: 18,
        fontFamily: 'OswaldRegular',
        fontStyle:'italic'
    }

})