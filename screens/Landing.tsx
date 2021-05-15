import * as React from "react";
import { StyleSheet,Image } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function TabTwoScreen() {
    return (
        <View style={styles.container}>
       
         <Image style={styles.imagetop} source={require('../assets/vector1.png')} />
         <View style={styles.middle}>
         <Image style={styles.logo} source={require('../assets/logo.png')} /> 
         <Text> <h1>#LoveLocals</h1></Text>
         </View>
         
         <Image style={styles.imagebottom}source={require('../assets/Vector2.png')} /> 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo:{
     width:"200px",
     height:"70px",
     
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
       
        
    },
    middle:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        
    }
});
