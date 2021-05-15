import { StackNavigationProp } from "@react-navigation/stack";
import * as React from "react";
import { Button, StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";
import { LoginParamList } from "../../types";

type LoginNavProp = StackNavigationProp<LoginParamList, "Login">;
type Props = {
    navigation: LoginNavProp;
}

export default function DummyLoginScreen(props: Props) {
    const { navigation } = props;
    const goToSignup = () => {
        navigation.navigate("Signup");
    };

    const goToOnboarding = () => {
        navigation.navigate("Onboarding");
    };

    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <Button title="Sign Up" onPress={goToSignup} />
            <Button title="Onboarding" onPress={goToOnboarding} />
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
