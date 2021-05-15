import * as React from "react";
import { StyleSheet ,Image,Text,View,TextInput ,Button,Alert} from "react-native";


export default function Homescreen() {
    return (
        <View style={styles.container}>
            <Image style={styles.imagetop} source={require('../assets/Vector1.png')}/>
            <View style={styles.form}>
                <Text>
                    <h1>Hi there!</h1>
                </Text>
                <Text>
                    <h1>Let me get to know you better!</h1>
                </Text>
                <View>
                    <Text><h4>Are you a</h4></Text>
                    <View style={styles.buttons}>
                        < Button color="black" title="Business Owner" onPress={() => Alert.alert('Simple Button pressed')}/>
                        <Text>             </Text>
                        < Button color="black" title="Customer" onPress={() => Alert.alert('Simple Button pressed')}/>
                    </View>
                    
                </View>
            </View>
            
            <Image style={styles.imagebottom} source={require('../assets/Vector2.png')}/>
            <Image style={styles.imagenext} source={require('../assets/next.png')}/>
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
        top:"130px",

    },
    imagetop:{
        width:"165px",
        height:"251px",
        top:"0px",
        left:"0px",
    },
    buttons:{
        color:"black",
        width:"200px",
       
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
