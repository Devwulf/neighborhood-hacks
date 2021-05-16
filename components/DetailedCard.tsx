import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text, View } from "./Themed";

export default function DetailedCard() {
    const [liked, setLiked] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <View style={{backgroundColor: "transparent", display: "flex"}}>
                    <Image style={styles.mainImg} source={require("../assets/bakeryShop.png")} />

                    <View style={{backgroundColor: "transparent", paddingHorizontal: "1.5rem", marginTop: "-0.25rem"}}>
                        <Text style={{fontSize: 10, fontWeight: "bold"}}>Circo's Pastry</Text>
                        <Text style={{fontSize: 8}}>2km away from you</Text>
                    </View>
                </View>
                <View style={styles.details}>
                    <Text style={styles.title}>"10% promotion for a week"</Text>
                    <Text style={styles.customerCount}>400 customers</Text>
                    <Text style={styles.description} numberOfLines={4} ellipsizeMode="tail">Bakery is an American-style pastry kitchen established in 2004 to bring the bona fide taste of American home heating to London. The organization opened its first branch on Portobello Road in Notting Hill in 2007</Text>
                </View>
                <View style={styles.heartContainer}>
                    <TouchableOpacity onPress={() => setLiked(!liked)}>
                        <View style={{backgroundColor: "transparent", display: !liked ? "flex" : "none"}}>
                            <Image style={{width: 31, height: 30}} source={require("../assets/heart.png")}/>
                        </View>
                        <View style={{backgroundColor: "transparent", display: liked ? "flex" : "none"}}>
                            <Image style={{width: 31, height: 30}} source={require("../assets/heartFilled.png")}/>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
        height: "13rem",
        width: "100vw"
    },
    cardContainer: {
        display: "flex",
        position: "relative",
        flexDirection: "row",
        borderRadius: 20,
        width: "80%",
        height: "8rem",
        paddingHorizontal: "0.5rem",
        shadowOffset: {width: 0, height: 2},
        shadowColor: "black",
        shadowOpacity: 0.1, 
        shadowRadius: 15
    },
    mainImg: {
        width: 132,
        height: 128,
        marginTop: "-2rem"
    },
    details: {
        flex: 1,
        paddingHorizontal: "1rem",
        paddingVertical: "1rem"
    },
    title: {
        color: "#57c4cc",
        marginBottom: "0.5rem",
        fontSize: 11,
        fontWeight: "bold"
    },
    customerCount: {
        marginBottom: "0.5rem",
        fontSize: 9,
    },
    description: {
        flex: 1,
        flexWrap: "wrap",
        fontSize: 9
    },
    heartContainer: {
        position: "absolute",
        borderRadius: 100,
        top: -10,
        right: -10,
        shadowOffset: {width: 0, height: 2},
        shadowColor: "black",
        shadowOpacity: 0.1, 
        shadowRadius: 15
    },
    heart: {
        width: 31,
        height: 30,
        shadowOffset: {width: 0, height: 2},
        shadowColor: "black",
        shadowOpacity: 0.1, 
        shadowRadius: 15
    }
});