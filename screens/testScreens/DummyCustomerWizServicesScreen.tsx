import { StackNavigationProp } from "@react-navigation/stack";
import * as React from "react";
import { Button, StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";
import { CustomerWizardParamList } from "../../types";

type NavProp = StackNavigationProp<CustomerWizardParamList, "Services">;
type Props = {
    navigation: NavProp;
}

export default function DummyCustomerWizServicesScreen(props: Props) {
    const { navigation } = props;
    const goToBack = () => {
        navigation.navigate("Location");
    };
    
    const goToNext = () => {
        navigation.navigate("Liked");
    };

    return (
        <View style={styles.container}>
            <Text>Services</Text>
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
