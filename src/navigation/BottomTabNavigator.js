import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartNavigation from "./CartNavigation";
import Navigation from "./Navigation";
import Ionicons from '@expo/vector-icons/Ionicons'
import {StyleSheet, View } from "react-native";
import colorss from "../constants/colorss";



const BottomTabs = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <BottomTabs.Navigator style={styles.bottomTab} initialRouteName="Travel" screenOptions={{
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
            <BottomTabs.Screen name="Carrito" component={CartNavigation} options={{
                tabBarIcon: () => (
                    <View>
                        <Ionicons name="cart" size={25} color='black' />
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