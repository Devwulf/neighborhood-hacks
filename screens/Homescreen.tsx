import { StackNavigationProp } from "@react-navigation/stack";
import * as React from "react";
import { StyleSheet ,Image,Alert, TouchableOpacity} from "react-native";
import { Text, View, Button } from "../components/Themed";
import { OnboardingParamList } from "../types";

type OnboardingNavProp = StackNavigationProp<OnboardingParamList, "Choice">;

type Props = {
    navigation: OnboardingNavProp;
}

export default function Onboarding1(props: Props) {
    const { navigation } = props;
    const business = () => {
        navigation.navigate("Business");
    };
    const customer = () => {
        navigation.navigate("Customer");
    };

    return (
        <View style={styles.container}>
            <Image style={styles.imagetop} source={require("../assets/Vector1.png")}/>
            <View style={styles.form}>
                <Text>
                    <h1>Hi there!</h1>
                </Text>
                <Text>
                    <h1>Let me get to know you better!</h1>
                </Text>
                <View>
                    <Text><h3>Are you a</h3></Text>
                    
                    <View style={{width: "100%", marginTop: 16, marginBottom: 4}}>
                        <Button text="Business Owner" onPress={business} />
                    </View>
                    <View style={{width: "100%", marginTop: 4, marginBottom: 16}}>
                        <Button text="Customer" onPress={customer} />
                    </View>
                </View>
            </View>
            
            <Image style={styles.imagebottom} source={require("../assets/Vector2.png")}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent:"center",
        justifyContent:"center",
        fontFamily: "DM-Sans",
        paddingHorizontal: "20%",
        paddingVertical: "10%"
    },
    form:{
        backgroundColor:"transparent"
    },
    imagetop:{
        width:165,
        height:251,
        position: "absolute",
        top:0,
        left:0,
    },
    buttons:{
        color:"black",
        width:200,
       
    },
    imagebottom:{
        width:165,
        height:251,
        position:"absolute",
        bottom: 0,
        right: 0,
    }
   
});
