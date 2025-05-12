import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "../screens/auth/SignInScreen";
import SignUpScreen from "../screens/auth/SignUpScreen";
import OnboardingScreen from "../screens/auth/OnBoardingScreen";

const Stack = createStackNavigator()

export default function AuthStack () {
    return (
        <Stack.Navigator 
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="OnboardingScreen"
        >
            <Stack.Screen name="OnboardingScreen" component={OnboardingScreen}/>
            <Stack.Screen name="SignInScreen" component={SignInScreen}/>
            <Stack.Screen name="SignUpScreen" component={SignUpScreen}/>
        </Stack.Navigator>
    )
}