import { StackNavigationProp } from "@react-navigation/stack";
import * as React from "react";
import {useState} from "react";
import { StyleSheet ,Image,Alert} from "react-native";
import { SafeAreaInsetsContext } from "react-native-safe-area-context";
import { CustomerWizardParamList } from "../../types";
import { Text, View, Button } from "../../components/Themed";

type NavProp = StackNavigationProp<CustomerWizardParamList, "AllSet">;
type Props = {
    navigation: NavProp;
}

export default function CustomerEndScreen(props: Props) {
    const { navigation } = props;
    const [text,setText]=useState("");

    const next = () => {
        navigation.navigate("Customer");
    };

    return (
        <View style={styles.container}>
            <Image style={styles.imagetop} source={require("../../assets/Vector1.png")}/>
            <View style={styles.form}>
                <Image style={styles.image} source={require("../../assets/endboss.png")}/>
                <Text>
                    <h1>Hooray! You're all set</h1>
                </Text>
                <View style={{width: "100%", marginVertical: "1rem"}}>
                    <Button text="Let's get started" onPress={next} />
                </View>
            </View>
            <Image style={styles.imagebottom} source={require("../../assets/Vector2.png")}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "DM-Sans",
        paddingHorizontal: "20%",
        paddingVertical: "20%"
    },
    image:{
        width:200,
        height:300,
    },
    form:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        position:"absolute",
        width:"300px"
    },
    imagetop:{
        width:"165px",
        height:"251px",
        position: "absolute",
        top:"0px",
        left:"0px",
    },
   
    imagebottom:{
        width:"165px",
        height:"251px",
        position:"absolute",
        bottom:"0px",
        right:"0px",
        float:"right", 
    },
});
