import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WhishListScreen from '../screens/WhisListScreen';
import colorss from '../constants/colorss';


const Stack = createNativeStackNavigator();

const WhishListNavigation = () => {

    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={{
            headerStyle: { backgroundColor: colorss.headerColor }
        }
        } >
            <Stack.Screen name="Bucket List" component={WhishListScreen} />

        </Stack.Navigator>



    )
}
export default WhishListNavigation