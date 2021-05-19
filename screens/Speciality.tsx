import * as React from "react";
import {StyleSheet,Text,Button,Alert,View,Image} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import {useState} from "react";
import { NextButton, TextInput } from "../components/Themed";
import { StackNavigationProp } from "@react-navigation/stack";
import { BusinessWizardParamList } from "../types";

type NavProp = StackNavigationProp<BusinessWizardParamList, "Specialty">;
type Props = {
    navigation: NavProp;
}

export default function Speciality(props: Props) {
    const { navigation } = props;
    const [text,setText]=useState("");

    const next = () => {
        navigation.navigate("AllSet");
    };

    return(
        <View style={styles.container}>
            <Image style={styles.imagetop} source={require("../assets/Vector1.png")}/>
            <View style={styles.form}>
                <Text style={styles.text}>
                    <h1>Tell us one specialty about your business</h1>
                </Text>
                <TextInput multiline style={styles.textinput}>
                
                </TextInput>
            </View>
            <Image style={styles.imagebottom} source={require("../assets/Vector2.png")}/>
            
            <View style={styles.imageNextContainer}>
                <NextButton onPress={next} />
            </View>
        </View>
   
    );
}
const styles=StyleSheet.create({
    container:{   
        flex:1,
        backgroundColor:"white",
    },
    imagebottom:{
        width:165,
        height:251,
        position:"absolute",
        bottom:0,
        right:0,
    },
    imagenext:{
        width:50,
        height:50,
        position:"absolute",
        bottom:30,
        right:30,
        backgroundColor:"black",
        borderRadius:50,
    },
    text:{
        width:300,
    },
    imagetop:{
        width:165,
        height:251,
        position: "absolute",
        top:0,
        left:0,
    },
    form:{
        marginLeft:40,
        position:"absolute",
        top:150,
        justifyContent: "center",
        alignItems: "center",
       
    },
    textinput:{
        height:200,
        width:300,
        backgroundColor:"#ECF1F4",
    },
    imageNextContainer: {
        position:"absolute",
        bottom:30,
        right:30,
    }
});