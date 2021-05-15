import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import DummyBusinessWizAllSetScreen from "../screens/testScreens/DummyBusinessWizAllSetScreen";
import DummyBusinessWizDetailsScreen from "../screens/testScreens/DummyBusinessWizDetailsScreen";
import DummyBusinessWizLocationScreen from "../screens/testScreens/DummyBusinessWizLocationScreen";
import DummyBusinessWizServicesScreen from "../screens/testScreens/DummyBusinessWizServicesScreen";
import DummyBusinessWizSpecialtyScreen from "../screens/testScreens/DummyBusinessWizSpecialtyScreen";
import { BusinessWizardParamList } from "../types";
import { BusinessNavigator } from "./BusinessNavigator";

const Stack = createStackNavigator<BusinessWizardParamList>();

export function BusinessWizardNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Details">
            <Stack.Screen name="Details" component={DummyBusinessWizDetailsScreen} />
            <Stack.Screen name="Services" component={DummyBusinessWizServicesScreen} />
            <Stack.Screen name="Location" component={DummyBusinessWizLocationScreen} />
            <Stack.Screen name="Specialty" component={DummyBusinessWizSpecialtyScreen} />
            <Stack.Screen name="AllSet" component={DummyBusinessWizAllSetScreen} />
            <Stack.Screen name="Business" component={BusinessNavigator} />
        </Stack.Navigator>
    );
}