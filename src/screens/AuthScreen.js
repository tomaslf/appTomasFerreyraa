import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity, TextInput, Button, Alert } from 'react-native'
import { signUp } from '../store/actions/auth.action'
import LottieView from "lottie-react-native";
import colorss from '../constants/colorss'

const AuthScreen = () => {

    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isValidPassword, setIsValidPassword] = useState(false)

    const validatePassword = () => {
        if (password.length >= 7) {
            setIsValidPassword(true)
        } else {
            setIsValidPassword(false)
        }
    }

    const handleSignUp = () => {
        if (isValidPassword) {
            dispatch(signUp(email, password))
        } else {
            Alert.alert('Invalid password', 'Please enter a password of at least 7 characters')
        }
    }

    return (
        <KeyboardAvoidingView behavior='height' style={styles.screen}>
            <LottieView
                source={require("../assets/images/19080-travel-the-world")}
                style={styles.animation}
                autoPlay
            />
            <View style={styles.container}>
                <Text style={styles.title}>Register</Text>
                <Text style={styles.text}>Email</Text>
                <TextInput style={styles.textInput} autoCapitalize='none' keyboardType='email-adress' value={email} onChangeText={setEmail} />
                <Text style={styles.text}>Password</Text>
                <TextInput style={styles.textInput} secureTextEntry autoCapitalize='none' value={password} onChangeText={(text) => {
                    setPassword(text)
                    validatePassword()
                }} />
                <View style={styles.buttonContainer}>
                    <Button title='Register' color={colorss.headerColor} onPress={handleSignUp} />
                </View>
            </View>
        </KeyboardAvoidingView>

    )
}

export default AuthScreen

const styles = StyleSheet.create({
    animation: {
        backgroundColor: colorss.backgroundColor,
        height: 200,
        width: 250,
        marginBottom: 20
    },
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colorss.backgroundColor,
    },
    title: {
        fontSize: 24,
        marginBottom: 18,
        textAlign: 'center'
    },
    container: {
        width: '80%',
        maxWidth: 400,
        padding: 12,
        margin: 12,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: 'black',
        shadowRadius: 15,
        shadowOpacity: 0.5,
        shadowOffset: { height: 2, width: 0 },
        elevation: 6,
    },
    prompt: {
        alignItems: 'center'
    },
    promptMessage: {
        fontSize: 16,
        color: 'green'
    },
    promptButton: {
        fontSize: 16
    },
    button: {
        backgroundColor: 'blue',
    },
    buttonContainer: {
        margin: 15
    },
    textInput: {
        height: 50,
        borderWidth: 0.5,
        fontSize: 17
    },
    text: {
        fontSize: 20,
        margin: 10
    }
})