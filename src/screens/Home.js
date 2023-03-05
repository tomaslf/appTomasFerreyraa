import React from 'react'
import { StyleSheet, ImageBackground, View, KeyboardAvoidingView, ScrollView, TouchableOpacity, Text } from 'react-native';
import Header from '../components/Header'
import colorss from '../constants/colorss';
import Ionicons from '@expo/vector-icons/Ionicons'



const Home = ({ navigation }) => {
 
    
    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
                <ImageBackground source={{ uri: "https://img.freepik.com/premium-photo/plane-passport-boarding-pass-travel_23-2148169920.jpg?w=2000" }} resizeMode="cover" style={styles.image}>
                    <ScrollView>
                        <View style={styles.container}>
                            <View>
                                <Header newStyles={styles.header} title={"Explore the world"} />
                                <Text style={styles.subHeader}>Everything you can imagine, is here</Text>
                            </View>
                            <View style={styles.buttonContainer} >
                                <View style={styles.buttonTravel} >
                                    <Text style={styles.text} >Discover</Text>
                                    <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                                        <Ionicons style={styles.icon} name="arrow-forward-outline" size={30} color='black' />
                                    </TouchableOpacity>
                                </View>
                            </View>
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
    },
    buttonContainer: {
        marginTop: 250,
        justifyContent: 'center',
        alignContent: 'center',
        paddingLeft: 15,
        paddingRight: 15,


    },
    buttonTravel: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        backgroundColor:colorss.headerColor,
        borderRadius: 15,
        padding: 15,
        shadowColor: 'black',
        shadowRadius: 15,
        shadowOpacity: 0.5,
        shadowOffset: { height: 2, width: 0 },
        elevation: 6,

    },
    icon:{
        backgroundColor:colorss.tabBarColor,
        padding:10,
        borderRadius:15,
        
    },
    image: {
        flex: 1,
        paddingTop: 60
    },
    text: {
        fontSize: 35,
        fontFamily: 'OswaldRegular'

    },
    header: {
        fontSize: 45,
        fontStyle: 'bolder',
        marginTop:25,

    },
    subHeader: {
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'OswaldRegular',
        fontStyle: 'italic'
    }

})