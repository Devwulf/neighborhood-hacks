import { StackNavigationProp } from "@react-navigation/stack";
import * as React from "react";
import { StyleSheet, View ,Image,Text, TouchableOpacity } from "react-native";
import { OnboardingParamList } from "../types";
//import onBoarding2 from "../assets/onBoarding2.png";
// import { View } from "../components/Themed";

type OnboardingNavProp = StackNavigationProp<OnboardingParamList, "Two">;

type Props = {
    navigation: OnboardingNavProp;
}

export default function Onboarding2(props: Props) {
    const { navigation } = props;
    const next = () => {
        navigation.navigate("Three");
    };
    
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../assets/onBoarding2.png")}/>
            
            <Text><h1>#Your dollars stays in community</h1></Text>
            <Text style={styles.textDescription}>
                Grid layouts offer rules of how you and your team should organize and position the UI elements to create a more consistent and effective layout. 
            </Text>
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
        paddingHorizontal:"10%"
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
