import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import DummyCustomerAllSetScreen from "../screens/testScreens/DummyCustomerAllSetScreen";
import DummyCustomerDetailsScreen from "../screens/testScreens/DummyCustomerDetailsScreen";
import DummyCustomerLikedScreen from "../screens/testScreens/DummyCustomerLikedScreen";
import DummyCustomerLocationScreen from "../screens/testScreens/DummyCustomerLocationScreen";
import DummyCustomerServicesScreen from "../screens/testScreens/DummyCustomerServicesScreen";
import { CustomerWizardParamList } from "../types";

const Stack = createStackNavigator<CustomerWizardParamList>();

export function CustomerWizardNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Details">
            <Stack.Screen name="Details" component={DummyCustomerDetailsScreen} />
            <Stack.Screen name="Location" component={DummyCustomerLocationScreen} />
            <Stack.Screen name="Services" component={DummyCustomerServicesScreen} />
            <Stack.Screen name="Liked" component={DummyCustomerLikedScreen} />
            <Stack.Screen name="AllSet" component={DummyCustomerAllSetScreen} />
        </Stack.Navigator>
    );
}