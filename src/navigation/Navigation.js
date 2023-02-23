import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import colorss from '../constants/colorss';
import Home from '../screens/Home';
import ConfirmListScreen from "../screens/ConfirmListScreen";
import CategoriesScreen from '../screens/CategoriesScreen';
import PlacesScreen from '../screens/PlacesScreen';
import PlacesDetailScreen from '../screens/PlacesDetailScreen';
import HotelScreen from '../screens/HotelScreen';


const Stack = createNativeStackNavigator();

const Navigation = () => {

    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={{
            headerStyle: { backgroundColor: colorss.headerColor },
        }
        } >
            <Stack.Screen name="Home" component={Home} options={{headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
            headerShown:false
             }} />
            <Stack.Screen name="ConfirmList" component={ConfirmListScreen} />
            <Stack.Screen name="Details" component={PlacesDetailScreen} />
            <Stack.Screen name="Categories" component={CategoriesScreen} options={{ title: "Choose your type" }} />
            <Stack.Screen name="Places" component={PlacesScreen} options={({ route }) => ({
                title: route.params.title
            })} />
            <Stack.Screen name="Hotel" component={HotelScreen} options={{ title: "Hotels" }} />
        </Stack.Navigator>



    )
}
export default Navigation
