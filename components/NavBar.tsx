import React from "react";
import { StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View } from "./Themed";

type Props = {
    currentScreen: string;
    onHomePressed?: () => void;
    onSavedPressed?: () => void;
    onNotifPressed?: () => void;
    onProfilePressed?: () => void;
};

export function NavBar(props: Props) {
    const { currentScreen, onHomePressed, onSavedPressed, onNotifPressed, onProfilePressed } = props;

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={{backgroundColor: "transparent"}}>
                    <TouchableOpacity onPress={onHomePressed}>
                        <View style={{backgroundColor: "transparent", display: currentScreen !== "Home" ? "flex" : "none"}}>
                            <Image style={{width: 22, height: 32}} source={require("../assets/icons/HomeWhite.png")}/>
                        </View>
                        <View style={{backgroundColor: "transparent", display: currentScreen === "Home" ? undefined : "none"}}>
                            <Image style={{width: 22, height: 32}} source={require("../assets/icons/HomeColour.png")}/>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{backgroundColor: "transparent"}}>
                    <TouchableOpacity onPress={onSavedPressed}>
                        <View style={{backgroundColor: "transparent", display: currentScreen !== "Liked" ? "flex" : "none"}}>
                            <Image style={{width: 23, height: 28}} source={require("../assets/icons/SavedWhite.png")}/>
                        </View>
                        <View style={{backgroundColor: "transparent", display: currentScreen === "Liked" ? undefined : "none"}}>
                            <Image style={{width: 23, height: 28}} source={require("../assets/icons/SavedColour.png")}/>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{backgroundColor: "transparent"}}>
                    <TouchableOpacity onPress={onNotifPressed}>
                        <View style={{backgroundColor: "transparent", display: currentScreen !== "Notification" ? "flex" : "none"}}>
                            <Image style={{width: 43, height: 31}} source={require("../assets/icons/NotificationWhite.png")}/>
                        </View>
                        <View style={{backgroundColor: "transparent", display: currentScreen === "Notification" ? undefined : "none"}}>
                            <Image style={{width: 43, height: 31}} source={require("../assets/icons/NotificationColour.png")}/>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{backgroundColor: "transparent"}}>
                    <TouchableOpacity onPress={onProfilePressed}>
                        <View style={{backgroundColor: "transparent", display: currentScreen !== "Profile" ? "flex" : "none"}}>
                            <Image style={{width: 23, height: 30}} source={require("../assets/icons/ProfileWhite.png")}/>
                        </View>
                        <View style={{backgroundColor: "transparent", display: currentScreen === "Profile" ? undefined : "none"}}>
                            <Image style={{width: 23, height: 30}} source={require("../assets/icons/ProfileColour.png")}/>
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
        position: "absolute",
        bottom: 30,
        width: "100%",
        height: 64,
        backgroundColor: "transparent"
    },
    innerContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 32,
        width: "80%",
        height: "100%",
        borderRadius: 21,
        backgroundColor: "rgba(0, 0, 0, 0.95)"
    }
});