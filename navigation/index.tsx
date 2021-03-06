/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";

import NotFoundScreen from "../screens/NotFoundScreen";
import ServicesOffered from "../screens/ServicesOffered";
import { RootStackParamList } from "../types";
import BottomTabNavigator from "./BottomTabNavigator";
import { BusinessNavigator } from "./BusinessNavigator";
import { BusinessWizardNavigator } from "./BusinessWizardNavigator";
import { CustomerNavigator } from "./CustomerNavigator";
import LinkingConfiguration from "./LinkingConfiguration";
import { LoginNavigator } from "./LoginNavigator";
import { OnboardingNavigator } from "./OnboardingNavigator";

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
    // TODO: Fix color scheme before deploy
    return (
        <NavigationContainer
            linking={LinkingConfiguration}
            theme={/*colorScheme === "dark" ? DarkTheme :*/ DefaultTheme}> 
            <RootNavigator />
        </NavigationContainer>
    );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginNavigator} />
            <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: "Oops!" }} />
        </Stack.Navigator>
    );
}
