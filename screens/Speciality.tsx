import * as React from "react";
import {StyleSheet,Text,Button,Alert,View,Image,TextInput} from "react-native"
import { AntDesign } from '@expo/vector-icons';
import {useState} from "react";
export default function Speciality(){
    const [text,setText]=useState('');
    return(
    <View style={styles.container}>
       <Image style={styles.imagetop} source={require('../assets/Vector1.png')}/>
       <View style={styles.form}>
            <Text style={styles.text}>
                <h1>Tell us one speciality about your business?</h1>
            </Text>
            <TextInput   multiline style={styles.textinput}>
                
            </TextInput>
        </View>
        <Image style={styles.imagebottom} source={require('../assets/Vector2.png')}/>
        <Image style={styles.imagenext} source={require('../assets/next.png')}/>
     </View>
   
    );
}
const styles=StyleSheet.create({
      container:{   
          flex:1,
          backgroundColor:"white",
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
    text:{
        width:"300px",
    },
    imagetop:{
        width:"165px",
        height:"251px",
        top:"0px",
        left:"0px",
    },
    form:{
        marginLeft:"40px",
        position:"absolute",
        top:"150px",
        justifyContent: 'center',
         alignItems: 'center',
       
    },
    textinput:{
        height:"200px",
        width:"300px",
        backgroundColor:"#ECF1F4",
    },
   
    
});