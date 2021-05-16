import { useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import * as React from "react";
import { Button, StyleSheet ,Image,ScrollView} from "react-native";
import { NavBar } from "../../components/NavBar";

import { Text, View,TextInput } from "../../components/Themed";
import { BusinessParamList } from "../../types";

type NavProp = StackNavigationProp<BusinessParamList, "Profile">;
type Props = {
    navigation: NavProp;
}

export default function BusinessProfileScreen(props: Props) {
    const { navigation } = props;
    const goToHome = () => {
        navigation.navigate("Home");
    };
    
    const goToLiked = () => {
        navigation.navigate("Liked");
    };

    const goToNotification = () => {
        navigation.navigate("Notification");
    };

    const goToProfile = () => {
        navigation.navigate("Profile");
    };

    const route = useRoute();

    return (
        <View style={styles.container}>
           <View style={styles.customerprofile}>
            <Image style={styles.image} source={require('../../assets/profilepictureC.png')} />
             <Text style={{color:"white"}}>
                 <h4>Danny Sum</h4>
                 <h5>250 Followers</h5>
             </Text>
            </View>
             

            <ScrollView>
            <View style={styles.formcomponent}>
                    <Text style={{marginBottom: "0.25rem"}}>
                        Name
                    </Text>
                    <TextInput placeholder='Danny Sum'/>
                </View>
                <View style={styles.formcomponent}>
                    <Text style={{marginBottom: "0.25rem"}}>
                        Age
                    </Text>
                    <TextInput placeholder='24'/>
                </View>
                <View style={styles.formcomponent}>
                    <Text style={{marginBottom: "0.25rem"}}>
                        Social Media Links
                    </Text>
                    <View style={{marginBottom: "0.25rem"}}>
                        <TextInput placeholder='dannesumofficial'/>
                    </View>
                    <View style={{marginBottom: "0.25rem"}}>
                        <TextInput placeholder='dannySum' />
                    </View>
                    <View style={{marginBottom: "0.25rem"}}>
                        <TextInput placeholder='dannysum12489' />
                    </View>
                </View>
                <View>
                    <Text>About You</Text>
                <TextInput placeholder="Hello I'm a photography enthusiast" multiline style={styles.textinput}>
                
                </TextInput>
                </View>
            </ScrollView>
            

            
            <NavBar 
                currentScreen={route.name} 
                onHomePressed={goToHome} 
                onSavedPressed={goToLiked}
                onNotifPressed={goToNotification}
                onProfilePressed={goToProfile} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        height: "100vh"
    },
    customerprofile:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"black",
        width:"100%",
        color:"white",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    image:{
        width:"150px",
        height:"150px",
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
    textinput:{
        height:"200px",
        width:"300px",
        backgroundColor:"#ECF1F4",
        
    },
    formcomponent:{
        marginVertical: "0.5rem",
        width: "100%"
    },
});
