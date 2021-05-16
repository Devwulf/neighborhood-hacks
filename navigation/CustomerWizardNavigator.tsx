import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
// import DummyCustomerWizAllSetScreen from "../screens/testScreens/DummyCustomerWizAllSetScreen";
// import DummyCustomerWizDetailsScreen from "../screens/testScreens/DummyCustomerWizDetailsScreen";
import DummyCustomerWizLikedScreen from "../screens/testScreens/DummyCustomerWizLikedScreen";
// import DummyCustomerWizLocationScreen from "../screens/testScreens/DummyCustomerWizLocationScreen";
// import DummyCustomerWizServicesScreen from "../screens/testScreens/DummyCustomerWizServicesScreen";
import Customerdetails from "../screens/CustomerScreens/Customerdetails"
import CustomerInterests from "../screens/CustomerScreens/CustomerInterests"
import CustomerLocation from "../screens/CustomerScreens/CustomerLocation"
import OwnerendScreen from "../screens/OwnerendScreen"
import { CustomerWizardParamList } from "../types";
import { CustomerNavigator } from "./CustomerNavigator";

const Stack = createStackNavigator<CustomerWizardParamList>();

export function CustomerWizardNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Details">
            <Stack.Screen name="Details" component={Customerdetails} />
            <Stack.Screen name="Location" component={CustomerLocation} />
            <Stack.Screen name="Interests" component={CustomerInterests} />
            <Stack.Screen name="Liked" component={DummyCustomerWizLikedScreen} />
            <Stack.Screen name="AllSet" component={OwnerendScreen} />
            <Stack.Screen name="Customer" component={CustomerNavigator} />
        </Stack.Navigator>
    );
}