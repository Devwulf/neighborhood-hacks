import * as React from "react";
import { StyleSheet,Image } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function Landing() {
    return (
        <View style={styles.container}>
       
         <Image style={styles.imagetop} source={require('../assets/vector1.png')} />
         <Image style={styles.logotop} source={require('../assets/logotop.png')} />
         <Image style={styles.imageright} source={require('../assets/topright.png')}/>
         <Image style={styles.bottomleft} source={require('../assets/bottomleft.png')}/>
         <Image style={styles.bottomright} source={require('../assets/bottomright.png')}/>
         <Image style={styles.bottomfloat} source={require('../assets/bottomfloat.png')}/>
         <Image style={styles.topfloat} source={require('../assets/topfloat.png')}/>
         <View style={styles.middle}>
         <Image style={styles.logo} source={require('../assets/logo.png')} /> 
        
         <Text> <h1>#LoveLocals</h1></Text>
         </View>
         <Image style={styles.imagebottom}source={require('../assets/Vector2.png')} /> 
         <Image style={styles.imagenext} source={require('../assets/next.png')}/>
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
    topfloat:{
        position:"absolute",
        top: 30,
        right: 80,
        width:"20px",
        height:"20px"
    },
    bottomfloat:{
        position:"absolute",
        bottom: 80,
        left: 100,
        width:"20px",
        height:"20px"
    },
    logotop:{
        position:"absolute",
        left:130,
        top:150,
        width:"52px",
        height:"30px"
    },
    bottomleft:{
        position:"absolute",
        bottom: 15,
        left: 0,
        width:"20px",
        height:"50px"
    },
    imagetop:{
        width:"165px",
        height:"251px",
        top: 0,
        left: 0,
      
    },
    imageright:{
        position:"absolute",
        right: 0,
        top: 0,
        width:"40px",
        height:"50px"
    },
    imagebottom:{
        width:"165px",
        height:"251px",
        position:"absolute",
        bottom: 0,
        right: 0,  
    },
    bottomright:{
        width:"55px",
        height:"45px",
        position:"absolute",
        right: 40,
        bottom: 40
    },
    middle:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        
    },
    imagenext:{
        width:"50px",
        height:"50px",
        position:"absolute",
        bottom: 30,
        right: 30,
        backgroundColor:"black",
        borderRadius:50,
    },
   
});
