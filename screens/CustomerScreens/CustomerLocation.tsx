import * as React from "react";
import {StyleSheet,Text,Button,Alert,View,Image} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import {useState} from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { NextButton, TextInput } from "../../components/Themed";
import { CustomerWizardParamList } from "../../types";
type NavProp = StackNavigationProp<CustomerWizardParamList, "Location">;
type Props = {
    navigation: NavProp;
}

export default function CustomerLocation(props: Props) {
    const { navigation } = props;
    const [text,setText]=useState("");

    const next = () => {
        navigation.navigate("Interests");
        
    };

    return(
        <View style={styles.container}>
            <Image style={styles.imagetop} source={require("../../assets/Vector1.png")}/>
            <View style={styles.form}>
                <Text style={styles.text}>
                    <h1>Where are you Located?</h1>
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
      
            <Image style={styles.imagebottom} source={require("../../assets/Vector2.png")}/>
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
        width:"165px",
        height:"251px",
        position:"absolute",
        bottom:0,
        right:0,
    },
    imagenext:{
        width:"50px",
        height:"50px",
        position:"absolute",
        bottom:30,
        right:30,
        backgroundColor:"black",
        borderRadius:50,
    },
    text:{
        width:"250px",
    },
    imagetop:{
        width:"165px",
        height:"251px",
        position: "absolute",
        top:0,
        left:0,
    },
    form:{
        position:"absolute",
        top:150,
        justifyContent: "center",
        alignItems: "center",
       
    },
    searchSection: {
        flex: 1,
        flexDirection: "row",
        marginTop:"20px",
        backgroundColor: "#fff",
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        borderRadius:8,
        flex: 1,
        height:"43px",
        width:"230px",
        marginLeft:"20px",
        backgroundColor: "white",
        color: "#424242",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 3,  
        elevation: 5,
    },
    imageNextContainer: {
        position:"absolute",
        bottom:30,
        right:30,
    }
});