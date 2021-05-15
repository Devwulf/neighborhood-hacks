import { StackNavigationProp } from "@react-navigation/stack";
import * as React from "react";
import { Button, StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";
import { CustomerParamList } from "../../types";

type NavProp = StackNavigationProp<CustomerParamList, "Notification">;
type Props = {
    navigation: NavProp;
}

export default function DummyCustomerNotificationScreen(props: Props) {
    const { navigation } = props;
    const goToHome = () => {
        navigation.navigate("Home");
    };
    
    const gotoLiked = () => {
        navigation.navigate("Liked");
    };

    const goToNotification = () => {
        navigation.navigate("Notification");
    };

    const goToProfile = () => {
        navigation.navigate("Profile");
    };

    return (
        <View style={styles.container}>
            <Text>Notification</Text>
            <Button title="Home" onPress={goToHome} />
            <Button title="Liked" onPress={gotoLiked} />
            <Button title="Notification" onPress={goToNotification} />
            <Button title="Profile" onPress={goToProfile} />
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
