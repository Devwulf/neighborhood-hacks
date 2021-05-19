import * as React from "react";
import { StyleSheet ,Image,ScrollView} from "react-native";
import { Text, View, TextInput, Button, NextButton } from "../components/Themed";
import {useState} from "react";
import { BusinessWizardParamList } from "../types";
import { StackNavigationProp } from "@react-navigation/stack";


type NavProp = StackNavigationProp<BusinessWizardParamList, "Details">;

type Props = {
    navigation: NavProp;
}

export default function OwnerDetails(props: Props) {
    const { navigation } = props;
    const next = () => {
        navigation.navigate("Services");
    };

    const [text,setText]=useState("");
    return (
        <View style={styles.container}>
            <Image style={styles.imagetop} source={require("../assets/Vector1.png")}/>

            <ScrollView style={styles.form} >
                <Text>
                    <h1>
                        Let customers know more about your business
                    </h1>
                </Text>
                <View style={styles.formcomponent}>
                    <Text style={{marginBottom: 4}}>
                        Email Address
                    </Text>
                    <TextInput autoCompleteType="email" textContentType="emailAddress" placeholder='Enter your email...' onChangeText={text=>setText(text)}/>
                </View>
                <View style={styles.formcomponent}>
                    <Text style={{marginBottom: 4}}>
                        Name
                    </Text>
                    <TextInput placeholder='Enter your name...' onChangeText={text=>setText(text)}/>
                </View>
                <View style={styles.formcomponent}>
                    <Text style={{marginBottom: 4}}>
                        Business-Name
                    </Text>
                    <TextInput placeholder='Enter your business name...' onChangeText={text=>setText(text)}/>
                </View>
                <View style={styles.formcomponent}>
                    <Text style={{marginBottom: 4}}>
                        Business Launch Date
                    </Text>
                    <TextInput placeholder='Enter your launch date...' onChangeText={text=>setText(text)}/>
                </View>
                <View style={styles.formcomponent}>
                    <Text style={{marginBottom: 4}}>
                        Social Media Links
                    </Text>
                    <View style={{marginBottom: 4}}>
                        <TextInput placeholder='Instagram' onChangeText={text=>setText(text)}/>
                    </View>
                    <View style={{marginBottom: 4}}>
                        <TextInput placeholder='Facebook' onChangeText={text=>setText(text)}/>
                    </View>
                    <View style={{marginBottom: 4}}>
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
        width:200,
        height:100,
    },
    form:{
        flex: 1,
        width:"100%",
        backgroundColor:"transparent"
    },
    textinput:{
        height: 40,
        backgroundColor: "lightgrey",
        width: "100%"
    },
    formcomponent:{
        marginVertical: 8,
        width: "100%"
    },
    imagetop:{
        width:165,
        height:251,
        position: "absolute",
        top:0,
        left:0,
    },
    icon:{
        width:35,
        height:35,
    },
    imagebottom:{
        width:165,
        height:251,
        position:"absolute",
        bottom: 0,
        right: 0,
    },
    link:{
        color:"blue"
    },
    fullMarginBot: {
        width: "100%", 
        marginBottom: 16
    },
    imagenext:{
        width:50,
        height:50,
        backgroundColor:"black",
        borderRadius:50,
    },
    imageNextContainer: {
        position:"absolute",
        bottom: 30,
        right: 30,
    }
});
