import { StackNavigationProp } from "@react-navigation/stack";
import * as React from "react";
import {useState} from "react";
import { StyleSheet ,Image, Alert} from "react-native";
import { Text, View, TextInput, Button } from "../../components/Themed";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LoginParamList } from "../../types";
import { Hashtags } from "../../components/Hashtags";

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

            <View style={{height: "9rem"}}>
                <Hashtags tags={foodItems} />
                <Hashtags tags={foodItems} />
                <Hashtags tags={foodItems} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        top:"0px",
        left:"0px",
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
        bottom:"0px",
        right:"0px",
    },
    link:{
        color:"blue"
    },
    fullMarginBot: {
        width: "100%", 
        marginBottom: "1rem"
    }
});
