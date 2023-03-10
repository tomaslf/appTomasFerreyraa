import { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native'
import { useSelector } from "react-redux";
import BottomTabNavigator from './BottomTabNavigator'
import AuthNavigator from "./AuthNavigator";
import LottieView from "lottie-react-native";
import colorss from '../constants/colorss';

export default () => {

    const userId = useSelector(state => state.auth.userId)

    const [loader, setLoader] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        }, 5000)
    })

    return (
        <>
            {(loader) ?
                <LottieView
                    source={require("../assets/images/19080-travel-the-world")}
                    style={styles.animation}
                    autoPlay
                /> :

                <BottomTabNavigator />
            }</>
    )
}

const styles = StyleSheet.create({
    animation: {
        backgroundColor: colorss.backgroundColor,
        flex: 1,
    },
})