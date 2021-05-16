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
                    <Text style={{marginBottom: "0.25rem"}}>
                        Name
                    </Text>
                    <TextInput placeholder='Enter your name...' onChangeText={text=>setText(text)}/>
                </View>
                <View style={styles.formcomponent}>
                    <Text style={{marginBottom: "0.25rem"}}>
                        Email Address
                    </Text>
                    <TextInput autoCompleteType="email" textContentType="emailAddress" placeholder='Enter your email...' onChangeText={text=>setEmail(text)}/>
                </View>
                <View style={[styles.formcomponent, {marginBottom: "1.5rem"}]}>
                    <Text style={{marginBottom: "0.25rem"}}>
                        Password
                    </Text>
                    <TextInput secureTextEntry={true} placeholder='Enter Password' onChangeText={text=>setPassword(text)}/>
                </View>
                <View style={{width: "100%", marginVertical: "1rem"}}>
                    <Button text="Create Account" onPress={signup}/>
                </View>
                <Text style={{marginVertical: "1rem"}}>
                    Already have an account?&nbsp;
                    <TouchableOpacity onPress={login}>
                        <Text style={styles.link}>
                            Login!
                        </Text>
                    </TouchableOpacity>
                </Text>
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
