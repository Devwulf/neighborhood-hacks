import * as React from "react";
import {useState} from "react"
import { StyleSheet ,Image,Text,View,TextInput ,Button,Alert} from "react-native";
import { SafeAreaInsetsContext } from "react-native-safe-area-context";

//  import { View } from "../components/Themed";

export default function OwnerendScreen() {
    
    return (
        <View style={styles.container}>
            <Image style={styles.imagetop} source={require('../assets/Vector1.png')}/>
            <View style={styles.form}>
               <Image style={styles.image} source={require('../assets/endboss.png')}/>
                <Text>
                    <h1>Hooray! You're all set</h1>
                </Text>
                < Button color="black" title="Let's get started" onPress={() => Alert.alert('Simple Button pressed')}/>
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
    marginTop:"50px",
    marginLeft:"30px",
    width:"300px"
   },
    imagetop:{
        width:"165px",
        height:"251px",
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
