import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import DummyBusinessAllSetScreen from "../screens/testScreens/DummyBusinessAllSetScreen";
import DummyBusinessDetailsScreen from "../screens/testScreens/DummyBusinessDetailsScreen";
import DummyBusinessLocationScreen from "../screens/testScreens/DummyBusinessLocationScreen";
import DummyBusinessServicesScreen from "../screens/testScreens/DummyBusinessServicesScreen";
import DummyBusinessSpecialtyScreen from "../screens/testScreens/DummyBusinessSpecialtyScreen";
import { BusinessWizardParamList } from "../types";

const Stack = createStackNavigator<BusinessWizardParamList>();

export function BusinessWizardNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Details">
            <Stack.Screen name="Details" component={DummyBusinessDetailsScreen} />
            <Stack.Screen name="Services" component={DummyBusinessServicesScreen} />
            <Stack.Screen name="Location" component={DummyBusinessLocationScreen} />
            <Stack.Screen name="Specialty" component={DummyBusinessSpecialtyScreen} />
            <Stack.Screen name="AllSet" component={DummyBusinessAllSetScreen} />
        </Stack.Navigator>
    );
}