import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import DummyCustomerHomeScreen from "../screens/testScreens/DummyCustomerHomeScreen";
import DummyCustomerLikedScreen from "../screens/testScreens/DummyCustomerLikedScreen";
import DummyCustomerNotificationScreen from "../screens/testScreens/DummyCustomerNotificationScreen";
import DummyCustomerProfileScreen from "../screens/testScreens/DummyCustomerProfileScreen";
import CustomerHome from "../screens/CustomerAppScreens/CustomerHome";
import CustomerLiked from "../screens/CustomerAppScreens/CustomerLiked";
import CustomerNotification from "../screens/CustomerAppScreens/CustomerNotification";
import CustomerProfile from "../screens/CustomerAppScreens/CustomerProfile";

import { CustomerParamList } from "../types";

const Stack = createStackNavigator<CustomerParamList>();

export function CustomerNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
            
            <Stack.Screen name="Home" component={CustomerHome} />
            <Stack.Screen name="Liked" component={CustomerLiked} />
            <Stack.Screen name="Notification" component={CustomerNotification} />
            <Stack.Screen name="Profile" component={CustomerProfile} />
        </Stack.Navigator>
    );
}