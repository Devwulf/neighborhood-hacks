import { StackNavigationProp } from "@react-navigation/stack";
import * as React from "react";
import {useState} from "react";
import { StyleSheet,Image,Alert, TouchableOpacity} from "react-native";
import { Text, View, TextInput, Button } from "../components/Themed"; 
import { LoginParamList } from "../types";
import AuthManager from "../utils/AuthManager";

type NavProp = StackNavigationProp<LoginParamList, "Login">;
type Props = {
    navigation: NavProp;
}

export default function Register(props: Props) {
    const { navigation } = props;
    const [text,setText]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const login = () => {
        // TODO: Login to backend
        navigation.navigate("Login");
    };

    const signup = () => {
        AuthManager.register(text, email, password)
            .then(async response => {
                const data = await response.json();
                if (!response.ok) {
                    const error = (data && data.message) || response.status;
                    setText("");
                    setPassword("");
                    return Promise.reject(error);
                }
                
                navigation.navigate("Login");
            })
            .catch(error => {
                console.error("There was an error!", error);
            });
    };

    return (
        <View style={styles.container}>
            <Image style={styles.imagetop} source={require("../assets/Vector1.png")}/>
            <View style={styles.form}>
                <Text style={{width: "100%"}}>
                    <h1>Register</h1> 
                </Text>
                <View style={styles.formcomponent}>
                    <Text style={{marginBottom: 4}}>
                        Name
                    </Text>
                    <TextInput placeholder='Enter your name...' onChangeText={text=>setText(text)}/>
                </View>
                <View style={styles.formcomponent}>
                    <Text style={{marginBottom: 4}}>
                        Email Address
                    </Text>
                    <TextInput autoCompleteType="email" textContentType="emailAddress" placeholder='Enter your email...' onChangeText={text=>setEmail(text)}/>
                </View>
                <View style={[styles.formcomponent, {marginBottom: 24}]}>
                    <Text style={{marginBottom: 4}}>
                        Password
                    </Text>
                    <TextInput secureTextEntry={true} placeholder='Enter Password' onChangeText={text=>setPassword(text)}/>
                </View>
                <View style={{width: "100%", marginVertical: 16}}>
                    <Button text="Create Account" onPress={signup}/>
                </View>
                <Text style={{marginVertical: 16}}>
                    Already have an account?&nbsp;
                </Text>
                <TouchableOpacity onPress={login}>
                    <Text style={styles.link}>
                        Login!
                    </Text>
                </TouchableOpacity>
            </View>
            <Image style={styles.imagebottom} source={require("../assets/Vector2.png")}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "DM-Sans" ,
        paddingHorizontal: "20%",
        paddingVertical: "10%"
    },
    logo:{
        width:200,
        height:100,
    },
    form:{
        flex: 1,
        alignItems:"center",
        justifyContent:"center",
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
    icons:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
    },
    icon:{
        width:35,
        height:35,
    },
    imagebottom:{
        width:165,
        height:251,
        position:"absolute",
        bottom:0,
        right:0,
    },
    link:{
        color:"blue"
    },
    fullMarginBot: {
        width: "100%", 
        marginBottom: 16
    }
});
