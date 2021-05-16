import { useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import * as React from "react";
import { Button, StyleSheet } from "react-native";
import { NavBar } from "../../components/NavBar";

import { Text, View } from "../../components/Themed";
import { BusinessParamList } from "../../types";

type NavProp = StackNavigationProp<BusinessParamList, "Home">;
type Props = {
    navigation: NavProp;
}

export default function BusinessHomeScreen(props: Props) {
    const { navigation } = props;
    const goToHome = () => {
        navigation.navigate("Home");
    };
    
    const goToLiked = () => {
        navigation.navigate("Liked");
    };

    const goToNotification = () => {
        navigation.navigate("Notification");
    };

    const goToProfile = () => {
        navigation.navigate("Profile");
    };

    const route = useRoute();

    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <NavBar 
                currentScreen={route.name} 
                onHomePressed={goToHome} 
                onSavedPressed={goToLiked}
                onNotifPressed={goToNotification}
                onProfilePressed={goToProfile} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        height: "100vh"
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
