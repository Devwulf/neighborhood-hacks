/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import * as React from "react";
import { NativeScrollEvent, NativeSyntheticEvent, StyleProp } from "react-native";
import { StyleSheet, Text as DefaultText, View as DefaultView, TextInput as DefaultTextInput, Button as DefaultButton, ViewStyle, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

export function useThemeColor(
    props: { light?: string; dark?: string },
    colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
    const theme = /*useColorScheme()*/ "light"; // TODO: Fix before deploy
    const colorFromProps = props[theme];

    if (colorFromProps) {
        return colorFromProps;
    } else {
        return Colors[theme][colorName];
    }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText["props"];
export type ViewProps = ThemeProps & DefaultView["props"];
export type TextInputProps = DefaultTextInput["props"];
export type ButtonProps = {text: string, textColor?: string,} & TouchableOpacity["props"];
export type NextButtonProps = TouchableOpacity["props"];

export function Text(props: TextProps) {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

    return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, "background");

    return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function TextInput(props: TextInputProps) {
    const { ...otherProps } = props;
    return (
        <DefaultTextInput style={styles.textInput} {...otherProps} />
    );
}

export function Button(props: ButtonProps) {
    const { text, textColor, ...otherProps } = props;
    return (
        <View style={{width: "100%"}}>
            <TouchableOpacity style={styles.button} {...otherProps}>
                <Text style={{color: `${textColor ?? "white"}`}}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
}

export function NextButton(props: NextButtonProps) {
    const { ...otherProps } = props;
    return (
        <TouchableOpacity {...otherProps}>
            <Image style={styles.imagenext} source={require("../assets/next.png")}/>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    textInput: {
        height: 48,
        width: "100%",
        backgroundColor: "#ECF1F4",
        color: "#8C8CA1",
        borderRadius: 8,
        paddingHorizontal: 16
    },
    button: {
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        width: "100%",
        height: 48,
        backgroundColor: "black",
        borderRadius: 8
    },
    imagenext:{
        width:50,
        height:50,
        backgroundColor:"black",
        borderRadius:50,
    }
});
