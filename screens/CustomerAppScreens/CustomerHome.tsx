import { useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import * as React from "react";
import { Button, ScrollView, StyleSheet, Image } from "react-native";
import DetailedCard from "../../components/DetailedCard";
import { NavBar } from "../../components/NavBar";

import { Text, View } from "../../components/Themed";
import { CustomerParamList } from "../../types";

type NavProp = StackNavigationProp<CustomerParamList, "Home">;
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
            <ScrollView style={{width: "100vw"}}>
                <View style={styles.customerprofile}>
                    <Image style={styles.image} source={require("../../assets/profilepictureC.png")} />
                    <View style={{display:"flex",flexDirection:"column" ,backgroundColor:"black"}}>
                        <Text style={{color:"white"}}><h4>Hello Danny!</h4></Text>
                        <Text style={{color:"white"}}><h5>You have 250 Followers</h5></Text>
                 
                        <View style={{display:"flex",flexDirection:"row",backgroundColor:"black"}}>
                            <Text style={{color:"white"}}><h3>15</h3></Text>
                            <Text style={{color:"white"}}><h5>Liked your reviews</h5></Text>
                        </View>
                    </View>
            
                </View>
                <View style={{paddingVertical: 16}}>
                    <DetailedCard />
                    <DetailedCard />
                    <DetailedCard />
                    <DetailedCard />
                </View>
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
    },
    topView: {
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
        paddingTop: 48,
        width: "100%",
        height: 224,
        backgroundColor: "black"
    },
    mainImg: {
        width: 170, 
        height: 165,
        marginLeft: -8,
        marginRight: 16
    },
    customerprofile:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"black",
        width:"100%",
        color:"white",
    },
    details: {
        backgroundColor: "black",
        paddingTop: 8
    },
    name: {
        fontSize: 20, 
        fontWeight: "bold",
        color: "white"
    },
    mainCountContainer: {
        display: "flex",
        paddingHorizontal: 8,
        backgroundColor: "white",
        borderRadius: 5
    },
    image:{
        width:150,
        height:150,
    },
    mainCountTitle: {
        fontSize: 20, 
        fontWeight: "bold",
    },
    mainCountSubtitle: {
        fontSize: 10,
        marginTop: -4,
        marginBottom: 4
    },
    subCountContainer: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "transparent",
    },
    subCountTitle: {
        fontSize: 25, 
        fontWeight: "bold",
        marginRight: 8,
        color: "white"
    },
    subCountSubtitle: {
        fontSize: 10,
        color: "white"
    }
});
