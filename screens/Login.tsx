import * as React from "react";
import {useState} from "react"
import { StyleSheet ,Image,Text,View,TextInput ,Button,Alert} from "react-native";
import { SafeAreaInsetsContext } from "react-native-safe-area-context";

//  import { View } from "../components/Themed";

export default function Onboarding() {
    const [text,setText]=useState('');
    const [password,setPassword]=useState('');
    return (
        <View style={styles.container}>
            <Image style={styles.imagetop} source={require('../assets/Vector1.png')}/>
            <View style={styles.form}>
                <Text>
                    <h1>Sign-in</h1> 
                </Text>
                <View style={styles.formcomponent}>
                    <Text>
                        Email-address
                    </Text>
                    <TextInput autoCompleteType="off" style={styles.textinput} placeholder='Enter valid email-id' onChangeText={text=>setText(text)}/>
                </View>
                <View style={styles.formcomponent}>
                    <Text>
                        Password
                    </Text>
                    <TextInput style={styles.textinput} placeholder='Enter Password' onChangeText={text=>setPassword(text)}/>
                </View>
                <View style={{width:150,marginTop:20}}>
                < Button title="Submit" onPress={() => Alert.alert('Simple Button pressed')}/>
                </View>
               
                <View style={styles.icons}>
                <Image style={styles.icon} source={require('../assets/fb.png')}/>
                <Image style={styles.icon} source={require('../assets/g.png')}/>
                </View>
              
            </View>
            <Image style={styles.imagebottom} source={require('../assets/Vector2.png')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        fontFamily: "DM-Sans" ,
    },
    form:{
        marginLeft:"40px",
        position:"absolute",
        top:"200px",
        alignItems:"center"
    },
    textinput:{
        height:"40px",
        backgroundColor:"lightgrey",
        width:"300px"

    },
    formcomponent:{
        margin:"10px"
    },
    imagetop:{
        width:"165px",
        height:"251px",
        top:"0px",
        left:"0px",
    },
    icons:{
      display:"flex",
      marginTop:"20px",
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
        float:"right", 
    },
});
