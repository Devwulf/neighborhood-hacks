import { StackNavigationProp } from "@react-navigation/stack";
import * as React from "react";
import {useState} from "react";
import { StyleSheet ,Image, Alert, ScrollView} from "react-native";
import { Text, View, TextInput, Button } from "../../components/Themed";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LoginParamList } from "../../types";
import { Hashtags } from "../../components/Hashtags";
import { NavBar } from "../../components/NavBar";
import DetailedCard from "../../components/DetailedCard";

type NavProp = StackNavigationProp<LoginParamList, "Test">;
type Props = {
    navigation: NavProp;
}

export default function TestScreen(props: Props) {
    const { navigation } = props;
    const back = () => {
        navigation.navigate("Login");
    };

    const foodItems = ["Indian","Korean","Mexican","Italian","SweetFood","Salty","Desserts","Starters","Vegan"];
    return (
        <View style={styles.container}>
            <View style={{width: "100%", marginBottom: "2rem"}}>
                <Button text="back" onPress={back} />
            </View>

            <ScrollView style={{width: "100vw"}}>
                <DetailedCard />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100vh"
    },
    logo:{
        width:"200px",
        height:"100px",
    },
    form:{
        flex: 1,
        alignItems:"center",
        justifyContent:"center",
        width:"100%",
        backgroundColor:"transparent"
    },
    textinput:{
        height: "40px",
        backgroundColor: "lightgrey",
        width: "100%"
    },
    formcomponent:{
        marginVertical: "0.5rem",
        width: "100%"
    },
    imagetop:{
        width:"165px",
        height:"251px",
        position: "absolute",
        top:0,
        left:0,
    },
    icons:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
    },
    icon:{
        width:"35px",
        height:"35px",
    },
    imagebottom:{
        width:"165px",
        height:"251px",
        position:"absolute",
        bottom:0,
        right:0,
    },
    link:{
        color:"blue"
    },
    fullMarginBot: {
        width: "100%", 
        marginBottom: "1rem"
    }
});
