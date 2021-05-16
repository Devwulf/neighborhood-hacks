import { useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import * as React from "react";
import { Button, ScrollView, StyleSheet, Image } from "react-native";
import DetailedCard from "../../components/DetailedCard";
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
            <ScrollView style={{width: "100vw"}}>
                <View style={styles.topView}>
                    <Image style={styles.mainImg} source={require("../../assets/bakery.png")}/>
                    <View style={styles.details}>
                        <View style={{backgroundColor: "transparent", marginBottom: "0.5rem"}}>
                            <Text style={styles.name}>Hello</Text>
                            <Text style={styles.name}>Bread&Butter</Text>
                        </View>

                        <View style={{backgroundColor: "transparent", display: "flex", flexDirection: "row"}}>
                            <View style={styles.mainCountContainer}>
                                <Text style={styles.mainCountTitle}>3K<sup>+</sup></Text>
                                <Text style={styles.mainCountSubtitle}>customers</Text>
                            </View>
                            <View></View>
                        </View>

                        <View style={styles.subCountContainer}>
                            <Text style={styles.subCountTitle}>2K</Text>
                            <View style={{backgroundColor: "transparent"}}>
                                <Text style={styles.subCountSubtitle}>visited your</Text>
                                <Text style={styles.subCountSubtitle}>business this week</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{paddingVertical: "1rem"}}>
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
        paddingTop: "3rem",
        width: "100%",
        height: "14rem",
        backgroundColor: "black"
    },
    mainImg: {
        width: 170, 
        height: 165,
        marginLeft: "-0.5rem",
        marginRight: "1rem"
    },
    details: {
        backgroundColor: "black",
        paddingTop: "0.5rem"
    },
    name: {
        fontSize: 20, 
        fontWeight: "bold",
        color: "white"
    },
    mainCountContainer: {
        display: "flex",
        paddingHorizontal: "0.5rem",
        backgroundColor: "white",
        borderRadius: 5,
        shadowColor: "white",
        shadowOffset: {width: 4, height: 4},
        shadowRadius: 5,
        shadowOpacity: 0.15
    },
    mainCountTitle: {
        fontSize: 20, 
        fontWeight: "bold",
    },
    mainCountSubtitle: {
        fontSize: 10,
        marginTop: "-0.25rem",
        marginBottom: "0.25rem"
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
        marginRight: "0.5rem",
        color: "white"
    },
    subCountSubtitle: {
        fontSize: 10,
        color: "white"
    }
});
