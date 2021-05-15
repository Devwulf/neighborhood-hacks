import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import DummyCustomerWizAllSetScreen from "../screens/testScreens/DummyCustomerWizAllSetScreen";
import DummyCustomerWizDetailsScreen from "../screens/testScreens/DummyCustomerWizDetailsScreen";
import DummyCustomerWizLikedScreen from "../screens/testScreens/DummyCustomerWizLikedScreen";
import DummyCustomerWizLocationScreen from "../screens/testScreens/DummyCustomerWizLocationScreen";
import DummyCustomerWizServicesScreen from "../screens/testScreens/DummyCustomerWizServicesScreen";
import { CustomerWizardParamList } from "../types";
import { CustomerNavigator } from "./CustomerNavigator";

const Stack = createStackNavigator<CustomerWizardParamList>();

export function CustomerWizardNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Details">
            <Stack.Screen name="Details" component={DummyCustomerWizDetailsScreen} />
            <Stack.Screen name="Location" component={DummyCustomerWizLocationScreen} />
            <Stack.Screen name="Services" component={DummyCustomerWizServicesScreen} />
            <Stack.Screen name="Liked" component={DummyCustomerWizLikedScreen} />
            <Stack.Screen name="AllSet" component={DummyCustomerWizAllSetScreen} />
            <Stack.Screen name="Customer" component={CustomerNavigator} />
        </Stack.Navigator>
    );
}