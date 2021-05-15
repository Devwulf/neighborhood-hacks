import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Location from "../screens/Location";
import OwnerDetails from "../screens/OwnerDetails";
import OwnerendScreen from "../screens/OwnerendScreen";
import ServicesOffered from "../screens/ServicesOffered";
import Speciality from "../screens/Speciality";
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
            <Stack.Screen name="Details" component={OwnerDetails} />
            <Stack.Screen name="Services" component={ServicesOffered} />
            <Stack.Screen name="Location" component={Location} />
            <Stack.Screen name="Specialty" component={Speciality} />
            <Stack.Screen name="AllSet" component={OwnerendScreen} />
            <Stack.Screen name="Business" component={BusinessNavigator} />
        </Stack.Navigator>
    );
}