import { StackNavigationProp } from "@react-navigation/stack";
import * as React from "react";
import {useState} from "react";
import { StyleSheet ,Image, Alert} from "react-native";
import { Text, View, TextInput, Button } from "../components/Themed";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LoginParamList } from "../types";
import { useRoute } from "@react-navigation/core";
import AuthManager from "../utils/AuthManager";

type LoginNavProp = StackNavigationProp<LoginParamList, "Login">;
type Props = {
    navigation: LoginNavProp;
}

export default function Login(props: Props) {
    const { navigation } = props;
    const [text,setText]=useState("");
    const [password,setPassword]=useState("");

    const login = () => {
        // TODO: Login to backend
        AuthManager.login(text, password)
            .then(async response => {
                const data = await response.json();
                if (!response.ok) {
                    const error = (data && data.message) || response.status;
                    setText("");
                    setPassword("");
                    return Promise.reject(error);
                }
                Alert.alert("You are now logged in!");
                AuthManager.authToken = data.jwt;
                navigation.navigate("Onboarding");
            })
            .catch(error => {
                console.error("There was an error!", error);
            });
    };

    const signup = () => {
        // TODO: Signup to backend
        navigation.navigate("Signup");
    };
    
    return (
        <View style={styles.container}>
            <Image style={styles.imagetop} source={require("../assets/Vector1.png")}/>
            <View style={styles.form}>
                <Image style={styles.logo} source={require("../assets/logo.png")}/>
                <View style={{width: "100%"}}>
                    <Text>
                        <h1>Sign In</h1> 
                    </Text>
                </View>
                <View style={styles.formcomponent}>
                    <Text style={{marginBottom: 4}}>
                        Email Address
                    </Text>
                    <TextInput autoCompleteType="email" textContentType="emailAddress" placeholder='Enter email' onChangeText={text=>setText(text)}/>
                </View>
                <View style={styles.formcomponent}>
                    <Text style={{marginBottom: 4}}>
                        Password
                    </Text>
                    <TextInput secureTextEntry={true} placeholder='Enter Password' onChangeText={text=>setPassword(text)}/>
                </View>
                <Text style={{width: "100%", marginVertical: 16, display:"flex", flexDirection: "row-reverse"}}>
                   Forgot Password?
                </Text>
                
                <View style={{width: "100%", marginVertical: 16}}>
                    <Button text="Login" onPress={login} />
                </View>
                <Text style={{marginVertical: 16}}>
                    Dont have an account?&thinsp;
                </Text>
                <TouchableOpacity onPress={signup}>
                    <Text style={styles.link}>
                        Sign up!
                    </Text>
                </TouchableOpacity>
                <View style={styles.icons}>
                    <TouchableOpacity>
                        <Image style={styles.icon} source={require("../assets/fb.png")}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.icon} source={require("../assets/g.png")}/>
                    </TouchableOpacity>
                </View>
              
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
        fontFamily: "DM-Sans",
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
        top: 0,
        left: 0,
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
        bottom: 0,
        right: 0,
    },
    link:{
        color:"blue"
    },
    fullMarginBot: {
        width: "100%", 
        marginBottom: 16
    }
});
