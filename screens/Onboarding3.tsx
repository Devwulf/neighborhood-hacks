import { StackNavigationProp } from "@react-navigation/stack";
import * as React from "react";
import { StyleSheet, View ,Image,Text, TouchableOpacity } from "react-native";
import { NextButton } from "../components/Themed";
import { OnboardingParamList } from "../types";
// import { View } from "../components/Themed";

type OnboardingNavProp = StackNavigationProp<OnboardingParamList, "Three">;

type Props = {
    navigation: OnboardingNavProp;
}

export default function Onboarding3(props: Props) {
    const { navigation } = props;
    const next = () => {
        navigation.navigate("Choice");
    };

    return (
        <View style={styles.container} >
            <Image style={styles.image} source={require("../assets/onboarding3.png")}/>
            <Text><h1>#Share your story</h1></Text>
            <Text style={styles.textDescription}>
                Grid layouts offer rules of how you and your team should organize and position the UI elements to create a more consistent and effective layout. 
            </Text>
            <Image style={styles.imagebottom} source={require("../assets/Vector2.png")}/>
            <View style={styles.imageNextContainer}>
                <NextButton onPress={next} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
   
    container:{
        // backgroundColor:"white",
        flex: 1,
        justifyContent: "center",
        paddingHorizontal:"10%",
        backgroundColor:"white"
    },
    textDescription:{
        width:"100%"
    },
    image:{
        width:200,
        height:300
    },
    imagebottom:{
        width:165,
        height:251,
        position:"absolute",
        bottom: 0,
        right: 0,
    },
    imagenext:{
        width:50,
        height:50,
        backgroundColor:"black",
        borderRadius:50,
    },
    imageNextContainer: {
        position:"absolute",
        bottom: 0,
        right: 0,
    }
});
