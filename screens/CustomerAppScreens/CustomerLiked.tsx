import { useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import * as React from "react";
import { Button, Image, ScrollView, StyleSheet } from "react-native";
import DetailedCard from "../../components/DetailedCard";
import { NavBar } from "../../components/NavBar";

import { Text, View } from "../../components/Themed";
import { CustomerParamList } from "../../types";

type NavProp = StackNavigationProp<CustomerParamList, "Liked">;
type Props = {
    navigation: NavProp;
}

export default function CustomerLikedScreen(props: Props) {
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
            <Image style={{position: "absolute", width: "100vw", height: "100vh"}} source={require("../../assets/leaves.png")} />
            <ScrollView style={{backgroundColor: "transparent", width: "100vw", paddingVertical: 64}}>
                <View style={{backgroundColor:"transparent", width: "100%", paddingHorizontal: 48, marginBottom: 16}}>
                    <Text style={{fontSize: 28, fontWeight: "bold"}}>Saved Stores</Text>
                </View>
                <DetailedCard />
                <DetailedCard />
                <DetailedCard />
                <DetailedCard />
            </ScrollView>

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
        height: "100vh",
        width: "100vw"
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
