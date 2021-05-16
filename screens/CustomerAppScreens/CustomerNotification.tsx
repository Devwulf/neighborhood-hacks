import { useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import * as React from "react";
import {  StyleSheet,ScrollView } from "react-native";
import { NavBar } from "../../components/NavBar";
import Card from "../../components/Card"
import { Text, View,Button } from "../../components/Themed";
import { BusinessParamList } from "../../types";

type NavProp = StackNavigationProp<BusinessParamList, "Notification">;
type Props = {
    navigation: NavProp;
}

export default function BusinessNotificationScreen(props: Props) {
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
            <ScrollView>
                <Card img={require('../../assets/1.png')} data="Thank you for joining #Locals!!.
                Let’s make an impact together."/>
                <Card img={require('../../assets/2.png')} data="5 people liked your reviews today! You’re making an impact!"/>
                <Card img={require('../../assets/3.png')} data="Congratulations, You’ve won the best reviewer award"/>
                <Card img={require('../../assets/4.png')} data=" Hooray!You’ve reached 200 followers"/>
                <Text style={styles.text} >Delete all</Text>
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
    text:{
        display:"flex",
        flexDirection:"row-reverse",
    },
    
});
