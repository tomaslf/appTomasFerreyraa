import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthScreen from "../screens/AuthScreen";

const Stack = createNativeStackNavigator()

const AuthNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Auth" screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Auth" component={AuthScreen} />
        </Stack.Navigator>
    )

}
export default AuthNavigator