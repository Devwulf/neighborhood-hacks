import * as React from "react";
import { StyleSheet,Image } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function TabTwoScreen() {
    return (
        <View style={styles.container}>
         <Image source={require('../assets/hifi.jpg')}/>
         {/* <Image source={require('../assets/landingpage/logo.png')} /> 
         <Text>#LoveLocals</Text>
         <Image source={require('../assets/landingpage/Vector2.png')} />  */}
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
