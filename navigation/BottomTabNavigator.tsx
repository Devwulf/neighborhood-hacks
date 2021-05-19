/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import Onboarding1 from "../screens/Onboarding1";
import Location from "../screens/Location";
import Onboarding3 from "../screens/Onboarding3";
import Onboarding2 from "../screens/Onboarding2";
import TabOneScreen from "../screens/TabOneScreen";
import OwnerendScreen from "../screens/OwnerendScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import Template from "../screens/Template";
import Login from "../screens/Login";
import Speciality from "../screens/Speciality";
import OwnerDetails from "../screens/OwnerDetails";
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from "../types";
import Landing from "../screens/Landing"
import Homescreen from "../screens/Homescreen";
import ServicesOffered from "../screens/ServicesOffered";
import Register from "../screens/Register";
const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
    const colorScheme = /*useColorScheme()*/ "light"; // TODO: Fix before deploy

    return (
        <BottomTab.Navigator
            initialRouteName="TabOne"
            tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
            <BottomTab.Screen
                name="TabOne"
                component={ServicesOffered}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
                }}
            />
            <BottomTab.Screen
                name="TabTwo"
                component={ServicesOffered}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
                }}
            />
        </BottomTab.Navigator>
    );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>["name"]; color: string }) {
    return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
    return (
        <TabOneStack.Navigator>
            <TabOneStack.Screen
                name="TabOneScreen"
                component={TabOneScreen}
                options={{ headerTitle: "Tab One Title" }}
            />
        </TabOneStack.Navigator>
    );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
    return (
        <TabTwoStack.Navigator>
            <TabTwoStack.Screen
                name="TabTwoScreen"
                component={Template}
                options={{ headerTitle: "Template" }}
            />
        </TabTwoStack.Navigator>
    );
}
