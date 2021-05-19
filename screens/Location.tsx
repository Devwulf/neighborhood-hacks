import * as React from "react";
import {StyleSheet,Text,Button,Alert,View,Image} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import {useState} from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { BusinessWizardParamList } from "../types";
import { NextButton, TextInput } from "../components/Themed";

type NavProp = StackNavigationProp<BusinessWizardParamList, "Location">;
type Props = {
    navigation: NavProp;
}

export default function Location(props: Props) {
    const { navigation } = props;
    const [text,setText]=useState("");

    const next = () => {
        navigation.navigate("Specialty");
    };

    return(
        <View style={styles.container}>
            <Image style={styles.imagetop} source={require("../assets/Vector1.png")}/>
            <View style={styles.form}>
                <Text style={styles.text}>
                    <h1>Where is your business Located?</h1>
                </Text>
                <View style={styles.searchSection}>
                    <TextInput
                        placeholder=""
                        onChangeText={(searchString) => {setText(searchString);}}
                        underlineColorAndroid="transparent"
                    />
                    <AntDesign style={styles.searchIcon} name="search1" size={24} color="black" />
                </View>
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
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:"white",
        paddingHorizontal: "15%",
        paddingVertical: "10%"
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
        position:"absolute",
        bottom: 0,
        right: 0,
        backgroundColor:"black",
        borderRadius:50,
    },
    text:{
        width:250,
    },
    imagetop:{
        width:165,
        height:251,
        position: "absolute",
        top: 0,
        left: 0,
    },
    form:{
        position:"absolute",
        top: 150,
        justifyContent: "center",
        alignItems: "center",
       
    },
    searchSection: {
        flex: 1,
        flexDirection: "row",
        marginTop:20,
        backgroundColor: "#fff",
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        borderRadius:8,
        flex: 1,
        height:43,
        width:230,
        marginLeft:20,
        backgroundColor: "white",
        color: "#424242",
        elevation: 5,
    },
    imageNextContainer: {
        position:"absolute",
        bottom: 30,
        right: 30,
    }
});