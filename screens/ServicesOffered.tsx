import * as React from "react";
import {StyleSheet,Text,Button,Alert,View,TextInput,Image} from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from '@expo/vector-icons';
import {useState} from "react";
export default function ServicesOffered(){

//storing dummy data in async storage 
const foodItems=["Indian","Korean","Mexican","Italian","SweetFood","Salty","Desserts","Starters","non-vegetarian,vegan"]
var Apparel=["Formal","informal","modern","traditional","partywear","summerwear","simple","jeans","Hipster"]
var Bakery=["Cakes","chocolates","Puffs","IceCreams","fastFoods","Burgers"]

//pushing data into asyncstorage



    var mapp=new Map();
    mapp.set("food",foodItems);
    mapp.set("apparel",Apparel);
    mapp.set("bakery",Bakery);
    const [text,setText]=useState("food");
    return(
    <View style={styles.container}>
         <Image style={styles.imagetop} source={require('../assets/Vector1.png')}/>
         <View style={styles.form}>
       <Text style={styles.text}><h1>What Services do you offer?</h1></Text>
       <View style={styles.searchSection}>      
            <TextInput
                style={styles.input}
                placeholder=""
                onChangeText={(searchString) => {setText(searchString)}}
                underlineColorAndroid="transparent"
            />
            <AntDesign style={styles.searchIcon} name="search1" size={24} color="black" />
        </View>
        <View>
            {  
                mapp.get(text)!==undefined?(
                mapp.get(text).map((item:string)=>{
                   return (
                   <Text style={styles.textdisplay}>
                      { item}
                    </Text>)
                })
                ):(<Text>Enter some valid choice</Text>)
            }
        
        </View>
        </View>
    </View>
    );
}
const styles=StyleSheet.create({
      container:{   
          flex:1,
            backgroundColor:"white",
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
    text:{
        width:"250px",

    },
    form:{
        marginLeft:"40px",
        position:"absolute",
        top:"40px",
        justifyContent: 'center',
         alignItems: 'center',
    },
    imagetop:{
        width:"165px",
        height:"251px",
        top:"0px",
        left:"0px",
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
    textdisplay:{
        borderColor:"black",
        width:"100px",
        height:"20px",
        borderWidth:2,
        backgroundColor:"black",
        color:"white",
        margin:"2px",
    },
   
});