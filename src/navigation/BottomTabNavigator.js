import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Navigation from "./Navigation";
import WhishListNavigation from "./WhishListNavigation";
import ReviewListNavigation from "./ReviewListNavigation";
import Ionicons from '@expo/vector-icons/Ionicons'
import colorss from "../constants/colorss";



const BottomTabs = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <BottomTabs.Navigator style={styles.bottomTab} initialRouteName="Home" screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: styles.bottomTab,
        }}>
            <BottomTabs.Screen name="Travel" component={Navigation} options={{
                tabBarIcon: ({focused }) => (
                    <View >
                        <Ionicons name="airplane"  color={focused ? colorss.headerColor : 'black'} size={30} />
                    </View>
                ),
                
            }} />
            <BottomTabs.Screen name="WhishList" component={WhishListNavigation} options={{
                tabBarIcon: ({focused }) => (
                    <View>
                        <Ionicons name="heart" color={focused ? colorss.headerColor : 'black'} size={30} />
                    </View>
                ),
            }} />
            <BottomTabs.Screen name="Reviews" component={ReviewListNavigation} options={{
                tabBarIcon: ({focused }) => (
                    <View>
                        <Ionicons name="list" size={30} color={focused ? colorss.headerColor : 'black'} />
                    </View>
                ),
            }} />
        </BottomTabs.Navigator>
    )
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
    bottomTab: {
        backgroundColor: colorss.tabBarColor,
        height:70,
        shadowColor:'black',
        shadowOffset:{width: 0,height:0},
        shadowOpacity: 0.5,
        shadowRadius: 0.5,
        elevation:5,
        position:'absolute',
        bottom:15,
        left:8,
        right:8,
        borderRadius:15,

    }
})