import { StackNavigationProp } from "@react-navigation/stack";
import * as React from "react";
import { Button, StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";
import { OnboardingParamList } from "../../types";

type OnboardingNavProp = StackNavigationProp<OnboardingParamList, "Choice">;
type Props = {
    navigation: OnboardingNavProp;
}

export default function DummyChoiceScreen(props: Props) {
    const { navigation } = props;
    const goToBack = () => {
        navigation.navigate("Three");
    };

    const goToBusiness = () => {
        navigation.navigate("Business");
    };

    const goToCustomer = () => {
        navigation.navigate("Customer");
    };

    return (
        <View style={styles.container}>
            <Button title="Back" onPress={goToBack} />
            <Text>Are you a</Text>
            <Button title="Business Owner" onPress={goToBusiness} />
            <Button title="Customer" onPress={goToCustomer} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
});
