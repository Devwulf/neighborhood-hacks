import { useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import * as React from "react";
import { Button, StyleSheet,Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { NavBar } from "../../components/NavBar";
import { Text, View,TextInput } from "../../components/Themed";
import { CustomerParamList } from "../../types";

type NavProp = StackNavigationProp<CustomerParamList, "Profile">;
type Props = {
    navigation: NavProp;
}

export default function CustomerProfileScreen(props: Props) {
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
          
            
             

            <ScrollView>
            <View style={styles.formcomponent}>
                    
               
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
        height: "100vh",
        width:"100%",
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
