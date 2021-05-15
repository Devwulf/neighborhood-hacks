import { StackNavigationProp } from "@react-navigation/stack";
import * as React from "react";
import { Button, StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";
import { LoginParamList } from "../../types";

type SignupNavProp = StackNavigationProp<LoginParamList, "Login">;
type Props = {
    navigation: SignupNavProp;
}

export default function DummySignupScreen(props: Props) {
    const { navigation } = props;
    const goToLogin = () => {
        navigation.navigate("Login");
    };

    return (
        <View style={styles.container}>
            <Text>Signup</Text>
            <Button title="Back" onPress={goToLogin} />
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
