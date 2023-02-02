import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import colors from '../constants/colors';
import Home from '../screens/Home';
import ConfirmListScreen from "../screens/ConfirmListScreen";
import Categories from '../components/CategoriesPlaces';


const Stack = createNativeStackNavigator();

const Navigation = () => {

    return (
        <NavigationContainer  >
            <Stack.Navigator  initialRouteName='Home' screenOptions={{
                headerStyle:{backgroundColor: colors.backgroundColor}
            }
            } >
                <Stack.Screen  name="Home" component={Home} />
                <Stack.Screen name="ConfirmList" component={ConfirmListScreen} />
                <Stack.Screen name="Categories" component={Categories} />
            </Stack.Navigator>
        </NavigationContainer> 


    )
}
export default Navigation
