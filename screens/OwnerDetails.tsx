import * as React from "react";
import { StyleSheet ,Image,Text,View,TextInput ,Button,ScrollView} from "react-native";
import {useState} from "react";

export default function OwnerDetails() {
    const [text,setText]=useState('');
    return (
        <View style={styles.container}>
            <Image style={styles.imagetop} source={require('../assets/Vector1.png')}/>
           
            <ScrollView style={styles.form} >
                <Text >
                    <h1>
                        Let Customers know more about your Business
                    </h1>
                </Text>
                <View style={styles.formcomponent}>
                    <Text>
                        Email-address
                    </Text>
                    <TextInput autoCompleteType="off" style={styles.textinput} placeholder='Enter valid email-id' onChangeText={text=>setText(text)}/>
                </View>
                <View style={styles.formcomponent}>
                    <Text>
                        Name
                    </Text>
                    <TextInput autoCompleteType="off" style={styles.textinput} placeholder='Enter valid email-id' onChangeText={text=>setText(text)}/>
                </View>
                <View style={styles.formcomponent}>
                    <Text>
                        Business-Name
                    </Text>
                    <TextInput autoCompleteType="off" style={styles.textinput} placeholder='Enter your Name' onChangeText={text=>setText(text)}/>
                </View>
                <View style={styles.formcomponent}>
                    <Text>
                        Business Launch Date
                    </Text>
                    <TextInput autoCompleteType="off" style={styles.textinput} placeholder='Business Launch Date' onChangeText={text=>setText(text)}/>
                </View>
                <View style={styles.formcomponent}>
                    <Text>
                        Social Media Links
                    </Text>
                    <TextInput autoCompleteType="off" style={styles.textinput} placeholder='Instagram' onChangeText={text=>setText(text)}/>
                    <TextInput autoCompleteType="off" style={styles.textinput} placeholder='Facebook' onChangeText={text=>setText(text)}/>
                    <TextInput autoCompleteType="off" style={styles.textinput} placeholder='Twitter' onChangeText={text=>setText(text)}/>
                </View>
            </ScrollView>
            <Image style={styles.imagenext} source={require('../assets/next.png')}/>
            {/* <Image style={styles.imagebottom} source={require('../assets/Vector2.png')}/> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontFamily: "DM-Sans" ,
    },
    textinput:{
        height:"40px",
        backgroundColor:"lightgrey",
        width:"300px",
        marginBottom:"10px"
    },
    form:{
        marginLeft:"40px",
        // position: 'absolute',
        // top:"130px",

    },
    imagetop:{
        width:"130px",
        height:"150px",
        top:"0px",
        left:"0px",
    },
    formcomponent:{
        margin:"10px"
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
        right:"10px",
        backgroundColor:"black",
        borderRadius:50,
    },
});
