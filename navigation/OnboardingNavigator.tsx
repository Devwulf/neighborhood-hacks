import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import DummyOneScreen from "../screens/testScreens/DummyOneScreen";
import DummyThreeScreen from "../screens/testScreens/DummyThreeScreen";
import DummyTwoScreen from "../screens/testScreens/DummyTwoScreen";
import { OnboardingParamList } from "../types";

const Stack = createStackNavigator<OnboardingParamList>();

export function OnboardingNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="One">
            <Stack.Screen name="One" component={DummyOneScreen} />
            <Stack.Screen name="Two" component={DummyTwoScreen} />
            <Stack.Screen name="Three" component={DummyThreeScreen} />
        </Stack.Navigator>
    );
}