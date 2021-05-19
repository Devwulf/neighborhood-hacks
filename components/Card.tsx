import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text, View } from "./Themed";
type Props={
    img:string;
    data:string;
};
export default function DetailedCard(props:Props) {
    
    const {img,data}=props;
    
    console.log(img);
    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                
                <Image style={styles.imagestyle} source={{uri: JSON.stringify(props.img) }}/>
              
                <View style={styles.details}>
                    <Text style={styles.description} numberOfLines={3} ><h5>{data}</h5></Text>
                </View>
               
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
        height: 128,
        width: "100vw"
    },
    cardContainer: {
        display: "flex",
        position: "relative",
        flexDirection: "row",
        borderRadius: 20,
        width: "80%",
        height: 112,
        paddingHorizontal: 8
    },
    mainImg: {
        width: 30,
        height: 30,
        marginTop: -32
    },
    details: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 16
    },
    imagestyle:{
        width:16,
        height:16,
    },
    title: {
        color: "#57c4cc",
        marginBottom: 8,
        fontSize: 11,
        fontWeight: "bold"
    },
    description: {
        flex: 1,
        flexWrap: "wrap",
        fontSize: 18,
        
    },
  
});