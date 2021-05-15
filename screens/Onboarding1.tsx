import { StackNavigationProp } from "@react-navigation/stack";
import * as React from "react";
import { StyleSheet, View ,Image,Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { OnboardingParamList } from "../types";
// import { View } from "../components/Themed";

type OnboardingNavProp = StackNavigationProp<OnboardingParamList, "One">;

type Props = {
    navigation: OnboardingNavProp;
}

export default function Onboarding1(props: Props) {
    const { navigation } = props;
    const next = () => {
        navigation.navigate("Two");
    };

    return (
        <View style={styles.container} >
            <Image style={styles.image} source={require("../assets/onboarding1.png")}/>
            <View>
                <Text><h1>#We support Locals</h1></Text>
                <Text style={styles.textDescription}>
                    Grid layouts offer rules of how you and your team should organize and position the UI elements to create a more consistent and effective layout. 
                </Text>
            </View>
            <Image style={styles.imagebottom} source={require("../assets/Vector2.png")}/>
            <View style={styles.imageNextContainer}>
                <TouchableOpacity onPress={next}>
                    <Image style={styles.imagenext} source={require("../assets/next.png")}/>
                </TouchableOpacity>
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
        width:"200px",
        height:"300px"
    },
    imagebottom:{
        width:"165px",
        height:"251px",
        position:"absolute",
        bottom:"0px",
        right:"0px",
    },
    imagenext:{
        width:"50px",
        height:"50px",
        backgroundColor:"black",
        borderRadius:50,
    },
    imageNextContainer: {
        position:"absolute",
        bottom:"30px",
        right:"30px",
    }
});
