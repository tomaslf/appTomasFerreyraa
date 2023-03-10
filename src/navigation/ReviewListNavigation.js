import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailReview from '../screens/DetailReview';
import colorss from '../constants/colorss';

const Stack = createNativeStackNavigator();

const ReviewListNavigation = () => {

    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={{
            headerStyle: { backgroundColor: colorss.headerColor }
        }
        } >
            <Stack.Screen name="Your Reviews" component={DetailReview} />

        </Stack.Navigator>



    )
}
export default ReviewListNavigation