import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import colors from '../constants/colors';
import Home from '../screens/Home';
import ConfirmListScreen from "../screens/ConfirmListScreen";
import CategoriesScreen from '../screens/CategoriesScreen';
import PlacesScreen from '../screens/PlacesScreen';
import PlacesDetailScreen from '../screens/PlacesDetailScreen';


const Stack = createNativeStackNavigator();

const Navigation = () => {

    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={{
            headerStyle: { backgroundColor: colors.backgroundColor }
        }
        } >
            <Stack.Screen name="Home" component={Home} options={{ title: "Travel" }} />
            <Stack.Screen name="ConfirmList" component={ConfirmListScreen} />
            <Stack.Screen name="Details" component={PlacesDetailScreen} />
            <Stack.Screen name="Categories" component={CategoriesScreen} options={{ title: "Choose your type" }} />
            <Stack.Screen name="Places" component={PlacesScreen} options={({ route }) => ({
                title: route.params.title
            })} />
        </Stack.Navigator>



    )
}
export default Navigation
