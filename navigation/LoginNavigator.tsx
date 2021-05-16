import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginParamList } from "../types";
import { OnboardingNavigator } from "./OnboardingNavigator";
import Login from "../screens/Login";
import Register from "../screens/Register";
import TestScreen from "../screens/testScreens/TestScreen";

const Stack = createStackNavigator<LoginParamList>();

export function LoginNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Register} />
            <Stack.Screen name="Onboarding" component={OnboardingNavigator} />
            <Stack.Screen name="Test" component={TestScreen} />
        </Stack.Navigator>
    );
}