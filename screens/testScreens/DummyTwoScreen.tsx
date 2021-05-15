import { StackNavigationProp } from "@react-navigation/stack";
import * as React from "react";
import { Button, StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";
import { OnboardingParamList } from "../../types";

type OnboardingNavProp = StackNavigationProp<OnboardingParamList, "Two">;
type Props = {
    navigation: OnboardingNavProp;
}

export default function DummyTwoScreen(props: Props) {
    const { navigation } = props;
    const goToNext = () => {
        navigation.navigate("Three");
    };
    const goToBack = () => {
        navigation.navigate("One");
    };

    return (
        <View style={styles.container}>
            <Text>Two</Text>
            <Button title="Back" onPress={goToBack} />
            <Button title="Next" onPress={goToNext} />
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
