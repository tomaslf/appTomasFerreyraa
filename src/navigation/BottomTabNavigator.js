import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Navigation from "./Navigation";
import Ionicons from '@expo/vector-icons/Ionicons'
import {StyleSheet, View } from "react-native";
import colorss from "../constants/colorss";
import WhishListNavigation from "./WhishListNavigation";
import ReviewListNavigation from "./ReviewListNavigation";



const BottomTabs = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <BottomTabs.Navigator style={styles.bottomTab} initialRouteName="Home" screenOptions={{
            headerShown: false,
            tabBarShowLabel:false,
            tabBarStyle: styles.bottomTab
        }}>
            <BottomTabs.Screen  name="Travel"  component={Navigation} options={{
                tabBarIcon: () => (
                    <View >
                        <Ionicons  name="airplane" size={25} color='black' />
                    </View>
                ),
            }} />
            <BottomTabs.Screen name="WhishList" component={WhishListNavigation} options={{
                tabBarIcon: () => (
                    <View>
                        <Ionicons name="heart" size={25} color='black' />
                    </View>
                ),
            }} />
             <BottomTabs.Screen name="Reviews" component={ReviewListNavigation} options={{
                tabBarIcon: () => (
                    <View>
                        <Ionicons name="list" size={25} color='black' />
                    </View>
                ),
            }} />
        </BottomTabs.Navigator>
    )
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
    bottomTab:{
        backgroundColor:colorss.tabBarColor
    }
})