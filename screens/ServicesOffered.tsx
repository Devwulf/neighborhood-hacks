import * as React from "react";
import {StyleSheet,Text,Button,Alert,View,Image} from "react-native";
import { NextButton, TextInput } from "../components/Themed";
import { AntDesign } from "@expo/vector-icons";
import {useState} from "react";
import { Hashtags } from "../components/Hashtags";
import { StackNavigationProp } from "@react-navigation/stack";
import { BusinessWizardParamList } from "../types";

type NavProp = StackNavigationProp<BusinessWizardParamList, "Services">;
type Props = {
    navigation: NavProp;
}

export default function ServicesOffered(props: Props) {
    const { navigation } = props;
    //storing dummy data in async storage 
    const [text,setText]=useState("food");

    const shuffle = (arr: string[]) => {
        let j, x, index;
        for (index = arr.length - 1; index > 0; index--) {
            j = Math.floor(Math.random() * (index + 1));
            x = arr[index];
            arr[index] = arr[j];
            arr[j] = x;
        }
        return arr;
    };

    const next = () => {
        navigation.navigate("Location");
    };

    const foodItems1 = ["Indian","Korean","Mexican","Italian","SweetFood","Salty","Desserts","Starters","Vegan"];
    const foodItems2 = shuffle([...foodItems1]);
    const foodItems3 = shuffle([...foodItems2]);

    const apparel1 = ["Formal","Informal","Modern","Traditional","Partywear","Summerwear","Jeans"];
    const apparel2 = shuffle([...apparel1]);
    const apparel3 = shuffle([...apparel2]);

    const entertainment1 = ["Movies","Gaming","Bar","Music"];
    const entertainment2 = shuffle([...entertainment1]);
    const entertainment3 = shuffle([...entertainment2]);

    return(
        <View style={styles.container}>
            <Image style={styles.imagetop} source={require("../assets/Vector1.png")}/>
            <View style={{marginBottom: "2rem"}}>
                <Text style={styles.text}><h1>What services do you offer?</h1></Text>
                <View style={styles.searchSection}>
                    <TextInput
                        placeholder=""
                        onChangeText={(searchString) => {setText(searchString);}}
                        underlineColorAndroid="transparent"
                    />
                    <AntDesign style={styles.searchIcon} name="search1" size={24} color="black" />
                </View>
            </View>
            <View style={{marginBottom: "1rem", width: "100%"}}>
                <Text style={{fontSize: 20, fontWeight: "600"}}>Food</Text>
            </View>
            <View style={{marginBottom: "1rem"}}>
                <Hashtags tags={foodItems1} />
                <Hashtags tags={foodItems2} />
                <Hashtags tags={foodItems3} />
            </View>
            <View style={{marginBottom: "1rem", width: "100%"}}>
                <Text style={{fontSize: 20, fontWeight: "600"}}>Apparel</Text>
            </View>
            <View style={{marginBottom: "1rem"}}>
                <Hashtags tags={apparel1} />
                <Hashtags tags={apparel2} />
                <Hashtags tags={apparel3} />
            </View>
            <View style={{marginBottom: "1rem", width: "100%"}}>
                <Text style={{fontSize: 20, fontWeight: "600"}}>Entertainment</Text>
            </View>
            <View style={{marginBottom: "4rem"}}>
                <Hashtags tags={entertainment1} />
                <Hashtags tags={entertainment2} />
                <Hashtags tags={entertainment3} />
            </View>
            <View style={styles.imageNextContainer}>
                <NextButton onPress={next} />
            </View>
        </View>
    );
}
const styles=StyleSheet.create({
    container:{   
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:"white",
        paddingHorizontal: "15%",
        paddingVertical: "10%"
    },
    searchSection: {
        flex: 1,
        flexDirection: "row",
        marginTop:"20px",
        backgroundColor: "#fff",
    },
    searchIcon: {
        padding: 10,
    },
    text:{
        width:"80%",
        

    },
    form:{
        top:"40px",
        justifyContent: "center",
        alignItems: "center",
    },
    imagetop:{
        width:"165px",
        height:"251px",
        position: "absolute",
        top:0,
        left:0,
    },
    input: {
        borderRadius:8,
        flex: 1,
        height:"43px",
        width:"230px",
        marginLeft:"20px",
        backgroundColor: "white",
        color: "#424242",
        shadowColor: "#000",
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
    imageNextContainer: {
        position:"absolute",
        bottom:30,
        right:30,
    }
});