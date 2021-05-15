import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Homescreen from "../screens/Homescreen";
import Onboarding1 from "../screens/Onboarding1";
import Onboarding2 from "../screens/Onboarding2";
import Onboarding3 from "../screens/Onboarding3";
import DummyChoiceScreen from "../screens/testScreens/DummyChoiceScreen";
import { OnboardingParamList } from "../types";
import { BusinessWizardNavigator } from "./BusinessWizardNavigator";
import { CustomerWizardNavigator } from "./CustomerWizardNavigator";

const Stack = createStackNavigator<OnboardingParamList>();

export function OnboardingNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="One">
            <Stack.Screen name="One" component={Onboarding1} />
            <Stack.Screen name="Two" component={Onboarding2} />
            <Stack.Screen name="Three" component={Onboarding3} />
            <Stack.Screen name="Choice" component={Homescreen} />
            <Stack.Screen name="Business" component={BusinessWizardNavigator} />
            <Stack.Screen name="Customer" component={CustomerWizardNavigator} />
        </Stack.Navigator>
    );
}