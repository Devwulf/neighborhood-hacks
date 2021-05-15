import * as React from "react";
import {StyleSheet,Text,Button,Alert,View,Image,TextInput} from "react-native"
import { AntDesign } from '@expo/vector-icons';
import {useState} from "react";
export default function ServicesOffered(){
    const [text,setText]=useState('');
    return(
    <View style={styles.container}>
       <Image style={styles.imagetop} source={require('../assets/Vector1.png')}/>
       <View style={styles.form}>
            <Text style={styles.text}>
                <h1>Where is your business Located?</h1>
            </Text>
            <View style={styles.searchSection}>

            
            <TextInput
                style={styles.input}
                placeholder=""
                onChangeText={(searchString) => {setText(searchString)}}
                underlineColorAndroid="transparent"
            />
            <AntDesign style={styles.searchIcon} name="search1" size={24} color="black" />
        </View>
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
        width:"250px",
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
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        marginTop:"20px",
        backgroundColor: '#fff',
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        borderRadius:8,
        flex: 1,
        height:"43px",
        width:"230px",
        marginLeft:"20px",
        backgroundColor: 'white',
        color: '#424242',
        outline:"none",
        shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 3,  
        elevation: 5,
    },
   
    
});