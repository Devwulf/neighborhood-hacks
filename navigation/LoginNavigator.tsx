import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginParamList } from "../types";
import DummyLoginScreen from "../screens/testScreens/DummyLoginScreen";
import DummySignupScreen from "../screens/testScreens/DummySignupScreen";

const Stack = createStackNavigator<LoginParamList>();

export function LoginNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
            <Stack.Screen name="Login" component={DummyLoginScreen} />
            <Stack.Screen name="Signup" component={DummySignupScreen} />
        </Stack.Navigator>
    );
}