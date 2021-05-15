import * as React from "react";
import { StyleSheet ,Image,Text,View,TextInput } from "react-native";

//  import { View } from "../components/Themed";

export default function Onboarding() {
    return (
        <View style={styles.container}>
            <Image style={styles.imagetop} source={require('../assets/Vector1.png')}/>
         <Text style={styles.heading}>
            <h1>Sign-in</h1> 
             </Text>
        <Text>
            Email-address
        </Text>
        <TextInput placeholder='Enter valid email-id'/>
        <Text>
            Password
        </Text>
        <TextInput placeholder='Enter Password'/>
        <Text>
            Password
        </Text>
        <Image style={styles.imagebottom} source={require('../assets/Vector2.png')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        fontFamily: "DM-Sans" ,
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
    heading:{
        

    },

   
});
