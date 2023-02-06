import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartNavigation from "./CartNavigation";
import Navigation from "./Navigation";
import Ionicons from '@expo/vector-icons/Ionicons'
import { View } from "react-native";


const BottomTabs = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <BottomTabs.Navigator initialRouteName="Travel" screenOptions={{
            headerShown: false,
            tabBarShowLabel:false,
        }}>
            <BottomTabs.Screen name="Travel"  component={Navigation} options={{
                tabBarIcon: () => (
                    <View>
                        <Ionicons name="airplane" size={20} color='black' />
                    </View>
                ),
            }} />
            <BottomTabs.Screen name="Carrito" component={CartNavigation} options={{
                tabBarIcon: () => (
                    <View>
                        <Ionicons name="cart" size={20} color='black' />
                    </View>
                ),
            }} />
        </BottomTabs.Navigator>
    )
}

export default BottomTabNavigator;