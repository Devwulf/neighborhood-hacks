import * as React from "react";
import { StyleSheet ,Image,ScrollView} from "react-native";
import { Text, View, TextInput, Button, NextButton } from "../../components/Themed";
import {useState} from "react";
import { CustomerWizardParamList } from "../../types";
import { StackNavigationProp } from "@react-navigation/stack";


type NavProp = StackNavigationProp<CustomerWizardParamList, "Details">;

type Props = {
    navigation: NavProp;
}

export default function CustomerDetails(props: Props) {
    const { navigation } = props;
    const next = () => {
        navigation.navigate("Location");
    };

    const [text,setText]=useState("");
    return (
        <View style={styles.container}>
            <Image style={styles.imagetop} source={require("../../assets/Vector1.png")}/>

            <ScrollView style={styles.form} >
                <Text>
                    <h1>
                        Tell us more about Yourself
                    </h1>
                </Text>
                <View style={styles.formcomponent}>
                    <Text style={{marginBottom: "0.25rem"}}>
                        Email Address
                    </Text>
                    <TextInput autoCompleteType="email" textContentType="emailAddress" placeholder='Enter your email...' onChangeText={text=>setText(text)}/>
                </View>
                <View style={styles.formcomponent}>
                    <Text style={{marginBottom: "0.25rem"}}>
                        Name
                    </Text>
                    <TextInput placeholder='Enter your name...' onChangeText={text=>setText(text)}/>
                </View>
                <View style={styles.formcomponent}>
                    <Text style={{marginBottom: "0.25rem"}}>
                        Age
                    </Text>
                    <TextInput placeholder='Enter your age...' onChangeText={text=>setText(text)}/>
                </View>
                <View style={styles.formcomponent}>
                    <Text style={{marginBottom: "0.25rem"}}>
                        Social Media Links
                    </Text>
                    <View style={{marginBottom: "0.25rem"}}>
                        <TextInput placeholder='Instagram' onChangeText={text=>setText(text)}/>
                    </View>
                    <View style={{marginBottom: "0.25rem"}}>
                        <TextInput placeholder='Facebook' onChangeText={text=>setText(text)}/>
                    </View>
                    <View style={{marginBottom: "0.25rem"}}>
                        <TextInput placeholder='Twitter' onChangeText={text=>setText(text)}/>
                    </View>
                </View>
                
            </ScrollView>
            <View style={styles.imageNextContainer}>
                <NextButton onPress={next} />
            </View>
            {/* <Image style={styles.imagebottom} source={require('../assets/Vector2.png')}/> */}
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
    logo:{
        width:"200px",
        height:"100px",
    },
    form:{
        flex: 1,
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
    },
    imagenext:{
        width:"50px",
        height:"50px",
        backgroundColor:"black",
        borderRadius:50,
    },
    imageNextContainer: {
        position:"absolute",
        bottom:30,
        right:30,
    }
});
