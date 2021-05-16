import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import BusinessHomeScreen from "../screens/BusinessAppScreens/BusinessHome";
import BusinessLikedScreen from "../screens/BusinessAppScreens/BusinessLiked";
import DummyBusinessHomeScreen from "../screens/testScreens/DummyBusinessHomeScreen";
import DummyBusinessLikedScreen from "../screens/testScreens/DummyBusinessLikedScreen";
import DummyBusinessNotificationScreen from "../screens/testScreens/DummyBusinessNotificationScreen";
import DummyBusinessProfileScreen from "../screens/testScreens/DummyBusinessProfileScreen";
import { BusinessParamList } from "../types";

const Stack = createStackNavigator<BusinessParamList>();

export function BusinessNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
            <Stack.Screen name="Home" component={BusinessHomeScreen} />
            <Stack.Screen name="Liked" component={BusinessLikedScreen} />
            <Stack.Screen name="Notification" component={DummyBusinessNotificationScreen} />
            <Stack.Screen name="Profile" component={DummyBusinessProfileScreen} />
        </Stack.Navigator>
    );
}