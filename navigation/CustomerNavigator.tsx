import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import DummyCustomerHomeScreen from "../screens/testScreens/DummyCustomerHomeScreen";
import DummyCustomerLikedScreen from "../screens/testScreens/DummyCustomerLikedScreen";
import DummyCustomerNotificationScreen from "../screens/testScreens/DummyCustomerNotificationScreen";
import DummyCustomerProfileScreen from "../screens/testScreens/DummyCustomerProfileScreen";
import { CustomerParamList } from "../types";

const Stack = createStackNavigator<CustomerParamList>();

export function CustomerNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
            <Stack.Screen name="Home" component={DummyCustomerHomeScreen} />
            <Stack.Screen name="Liked" component={DummyCustomerLikedScreen} />
            <Stack.Screen name="Notification" component={DummyCustomerNotificationScreen} />
            <Stack.Screen name="Profile" component={DummyCustomerProfileScreen} />
        </Stack.Navigator>
    );
}