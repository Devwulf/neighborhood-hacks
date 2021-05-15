import * as React from "react";
import { StyleSheet, View ,Image,Text } from "react-native";
//import onBoarding2 from "../assets/onBoarding2.png";
// import { View } from "../components/Themed";

export default function Onboarding() {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/onBoarding2.png')}/>
            
            <Text><h1>#Your dollars stays in community</h1></Text>
            <Text style={styles.textDescription}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel ducimus nobis incidunt molestias tenetur. Similique quasi sapiente facilis quidem a, magni consequatur perferendis dolor, velit provident at incidunt, voluptates animi.</Text>
            <Image style={styles.imagebottom} source={require('../assets/Vector2.png')}/>
            <Image style={styles.imagenext} source={require('../assets/next.png')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
        marginLeft:"20px",
    },
    image:{
        width:"200px",
        height:"300px"
    },
    textDescription:{
        width:"320px"
    },
    imagebottom:{
        width:"165px",
        height:"251px",
        position:"absolute",
        bottom:"0px",
        right:"0px",
        float:"right",      
    },
    imagenext:{
        width:"50px",
        height:"50px",
        position:"absolute",
        bottom:"30px",
        right:"30px",
        backgroundColor:"black",
        borderRadius:50,
    },
});
